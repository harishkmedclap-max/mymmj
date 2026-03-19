// ─────────────────────────────────────────────────────────────────
// FILE LOCATION: src/components/JsonLd.tsx
// ─────────────────────────────────────────────────────────────────
// Server component — injects <script type="application/ld+json">
// Zero client JS cost. Import and use in app/page.tsx.
// ─────────────────────────────────────────────────────────────────

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: Record<string, any> | Record<string, any>[];
}

export function JsonLd({ schema }: JsonLdProps) {
  const json = JSON.stringify(
    Array.isArray(schema)
      ? { "@context": "https://schema.org", "@graph": schema }
      : schema
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}