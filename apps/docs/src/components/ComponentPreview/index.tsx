import React, { type ReactNode } from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";

interface ComponentPreviewProps {
  code: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function ComponentPreview({
  code,
  children,
  title,
  description,
}: ComponentPreviewProps) {
  return (
    <div className={styles.preview}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.renderArea}>{children}</div>
      <CodeBlock language="tsx" title="Code">
        {code}
      </CodeBlock>
    </div>
  );
}
