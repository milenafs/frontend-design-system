#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "../packages/ui/src/components");
const DOCS_OUTPUT_DIR = path.join(__dirname, "../apps/docs/docs/components/auto-generated");
const SIDEBARS_FILE = path.join(__dirname, "../apps/docs/sidebars.ts");

// Ensure output directory exists
if (!fs.existsSync(DOCS_OUTPUT_DIR)) {
  fs.mkdirSync(DOCS_OUTPUT_DIR, { recursive: true });
}

function extractJSDoc(fileContent) {
  const jsdocRegex = /\/\*\*[\s\S]*?\*\//g;
  const matches = fileContent.match(jsdocRegex);
  if (!matches) return null;

  const jsdoc = matches[matches.length - 1];
  const lines = jsdoc.split("\n").map((line) => line.replace(/^\s*\*\s?/, ""));

  // Extract description (everything before first @)
  let description = "";
  let examples = [];
  let inExample = false;
  let currentExample = "";

  for (let i = 1; i < lines.length - 1; i++) {
    const line = lines[i];

    if (line.startsWith("@example")) {
      inExample = true;
      if (description === "") continue;
    } else if (inExample) {
      currentExample += line + "\n";
      if (line.trim() === "```") {
        examples.push(currentExample.trim());
        currentExample = "";
        inExample = false;
      }
    } else if (!line.startsWith("@")) {
      description += line + "\n";
    }
  }

  return {
    jsdoc,
    description: description.trim(),
    examples: examples.filter(ex => ex.length > 0)
  };
}

function extractProps(fileContent) {
  const propsRegex =
    /export interface (\w+Props)[^}]*\{([\s\S]*?)\}/;
  const match = fileContent.match(propsRegex);
  if (!match) return [];

  const propsContent = match[2];
  const propLines = propsContent.split("\n");
  const props = [];

  propLines.forEach((line) => {
    const propMatch = line.match(
      /\/\*\*\s*(.*?)\s*\*\/\s*(\w+)\??:\s*([^;]+);/
    );
    if (propMatch) {
      props.push({
        name: propMatch[2],
        type: propMatch[3].trim(),
        description: propMatch[1].trim(),
      });
    }
  });

  return props;
}

function getComponentName(dirName) {
  return dirName.charAt(0).toUpperCase() + dirName.slice(1);
}

function generateMarkdown(componentName, description, props, examples = []) {
  let markdown = `# ${componentName}\n\n`;
  markdown += `${description}\n\n`;

  if (examples.length > 0) {
    markdown += `## Examples\n\n`;
    examples.forEach((example, idx) => {
      markdown += `${example}\n\n`;
    });
  }

  if (props.length > 0) {
    markdown += `## Props\n\n`;
    markdown += `| Prop | Type | Description |\n`;
    markdown += `|------|------|-------------|\n`;
    props.forEach((prop) => {
      markdown += `| \`${prop.name}\` | \`${prop.type}\` | ${prop.description} |\n`;
    });
    markdown += `\n`;
  }

  markdown += `## Interactive Playground\n\n`;
  markdown += `For more examples and interactive testing, see the ${componentName} component story in Storybook (run \`npm run storybook --workspace=packages/ui\`).\n`;

  return markdown;
}

function generateDocs() {
  const components = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) =>
      fs.statSync(path.join(COMPONENTS_DIR, file)).isDirectory()
    );

  const componentMetadata = [];

  components.forEach((componentDir) => {
    const componentPath = path.join(COMPONENTS_DIR, componentDir);
    const componentFile = path.join(componentPath, `${componentDir}.tsx`);

    if (!fs.existsSync(componentFile)) {
      return;
    }

    const fileContent = fs.readFileSync(componentFile, "utf-8");
    const jsdocData = extractJSDoc(fileContent);

    if (!jsdocData) {
      console.warn(
        `⚠️  No JSDoc found for ${componentDir}, skipping...`
      );
      return;
    }

    const props = extractProps(fileContent);
    const componentName = getComponentName(componentDir);
    const markdown = generateMarkdown(
      componentName,
      jsdocData.description,
      props,
      jsdocData.examples
    );

    const outputFile = path.join(
      DOCS_OUTPUT_DIR,
      `${componentDir.toLowerCase()}.mdx`
    );
    fs.writeFileSync(outputFile, markdown);

    componentMetadata.push({
      name: componentName,
      id: componentDir.toLowerCase(),
    });

    console.log(`✅ Generated docs for ${componentName}`);
  });

  return componentMetadata;
}

function updateSidebar(components) {
  const sidebarPath = SIDEBARS_FILE;

  if (!fs.existsSync(sidebarPath)) {
    console.warn("⚠️  Sidebars file not found, skipping update...");
    return;
  }

  let sidebarContent = fs.readFileSync(sidebarPath, "utf-8");

  const componentItems = components
    .map(
      (comp) =>
        `        'components/auto-generated/${comp.id}',`
    )
    .join("\n");

  const autoGenSection = `${componentItems}`;

  // Replace or add the auto-generated components section
  if (sidebarContent.includes("// AUTO-GENERATED COMPONENTS START")) {
    const startMarker = "// AUTO-GENERATED COMPONENTS START";
    const endMarker = "// AUTO-GENERATED COMPONENTS END";
    const startIdx = sidebarContent.indexOf(startMarker);
    const endIdx = sidebarContent.indexOf(endMarker);

    if (startIdx !== -1 && endIdx !== -1) {
      sidebarContent =
        sidebarContent.substring(0, startIdx) +
        startMarker +
        "\n" +
        autoGenSection +
        "\n    " +
        endMarker +
        sidebarContent.substring(endIdx + endMarker.length);
    }
  } else {
    console.warn(
      "⚠️  Auto-generated markers not found in sidebar, add these markers manually"
    );
    console.log("Add this to your sidebars.ts:");
    console.log(autoGenSection);
    return;
  }

  fs.writeFileSync(sidebarPath, sidebarContent);
  console.log("✅ Updated sidebar configuration");
}

console.log("🔄 Generating component documentation...\n");
const components = generateDocs();
updateSidebar(components);
console.log("\n✨ Documentation generation complete!");
