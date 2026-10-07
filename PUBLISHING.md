# Publishing Guide

This guide explains how to publish the `@milfushi-design-system/ui` package to npm.

## Prerequisites

1. **npm account** - Create one at https://www.npmjs.com/signup
2. **2FA enabled** - Recommended for security
3. **Access to GitHub repository** - To add secrets

## Step 1: Create npm Token

### Create a Read-Only Token (Recommended for CI/CD)

```bash
npm token create --read-only
```

This creates a token that can only:
- Install packages
- Download packages
- View package metadata

### Create a Full-Access Token (For local publishing)

```bash
npm token create
```

This token can:
- Publish packages
- Update package settings
- Manage permissions

**Important:** When prompted, enter your OTP (one-time password) from your authenticator app or email.

## Step 2: Configure GitHub Secret

1. Go to your GitHub repository
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **"Add secret"**

## Step 3: Publish a Release

### Via GitHub Tags (Automated)

```bash
# 1. Update version in packages/ui/package.json
# 2. Commit changes
git add packages/ui/package.json
git commit -m "chore: bump version to 1.0.0"

# 3. Create a tag
git tag -a v1.0.0 -m "Release v1.0.0"

# 4. Push to GitHub
git push origin main --tags
```

The GitHub Actions workflow will automatically:
- ✅ Build the package
- ✅ Build Storybook
- ✅ Publish to npm
- ✅ Upload Storybook to S3

### Manually (Local Publishing)

```bash
# 1. Make sure you're logged in
npm login

# 2. Build the package
npm run build --workspace=packages/ui

# 3. Publish
npm publish packages/ui/
```

## Version Numbering

Use [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (1.1.0): New features (backward compatible)
- **PATCH** (1.0.1): Bug fixes

Examples:
- `v0.0.1` - Initial release
- `v1.0.0` - First major release
- `v1.1.0` - Add new component
- `v1.1.1` - Bug fix

## Files Included in npm Package

The `.npmignore` file controls what gets published:

**Included:**
- `dist/` - Compiled JavaScript, types, CSS
- `package.json`
- `README.md` (from packages/ui)

**Excluded:**
- `src/` - Source TypeScript files
- `.storybook/` - Storybook config
- `stories/` - Story files
- Build artifacts and caches

## Verify Package

After publishing, verify the package:

```bash
# Check npm registry
npm info @milfushi-design-system/ui

# Install in a test project
npm install @milfushi-design-system/ui@latest
```

## Troubleshooting

### "Invalid or expired OTP"
- Your one-time password expired
- Run the command again and enter new OTP immediately

### "Package already published with version X.X.X"
- You need to bump the version number
- Update `packages/ui/package.json` with a new version
- Commit and tag with the new version

### "Unauthorized"
- Your npm token is invalid or expired
- Recreate the token
- Update the GitHub secret

### "Not found: @milfushi-design-system/ui"
- Check that you're publishing the correct package
- Make sure `name` in `packages/ui/package.json` is correct

## What Gets Published

```
@milfushi-design-system/ui@1.0.0
├── dist/
│   ├── index.js           # ES Module bundle
│   ├── index.d.ts         # TypeScript types
│   ├── tokens.css         # Design tokens
│   ├── components.css     # Component styles
│   └── components/        # Type definitions
├── package.json
└── README.md
```

## npm Scripts in CI/CD

The GitHub Actions workflow runs:

1. `npm ci` - Install dependencies
2. `npm run build` - Build entire monorepo
3. `npm run build-storybook --workspace=packages/ui` - Build Storybook
4. `npm publish --workspace=packages/ui` - Publish to npm (only on tags)

## Viewing Published Package

Once published, your package is available at:

- **npm registry**: https://www.npmjs.com/package/@milfushi-design-system/ui
- **Unpkg CDN**: https://unpkg.com/@milfushi-design-system/ui@latest/dist/
- **JSDelivr CDN**: https://cdn.jsdelivr.net/npm/@milfushi-design-system/ui@latest/dist/

## Testing Before Publishing

```bash
# Run tests
npm run test

# Type check
npm run typecheck

# Lint
npm run lint

# Build
npm run build --workspace=packages/ui

# Verify build output
ls -la packages/ui/dist/
```

## Next Steps

1. ✅ Create npm token
2. ✅ Add GitHub secret
3. ✅ Update version number
4. ✅ Create git tag
5. ✅ Push to GitHub (workflow publishes automatically)
6. ✅ Verify on npm registry

Good luck! 🚀
