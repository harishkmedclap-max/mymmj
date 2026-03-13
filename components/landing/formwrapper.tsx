"use client";
/**
 * PERFORMANCE FIX — TBT / Long Tasks
 *
 * Problem: react-hook-form + @hookform/resolvers/zod + zod are 95 KiB
 * of JS that was loading in the critical bundle even though the form is
 * below-the-fold on mobile. This caused 810ms TBT and 11 long tasks.
 *
 * Solution: dynamic import with { ssr: false } defers these libraries
 * until after the page is interactive, so they never block FCP or LCP.
 *
 * The skeleton preserves exact form dimensions → zero CLS when the real
 * form swaps in.
 *
 * FILE LOCATION: src/components/landing/form-wrapper.tsx
 * Then update hero.tsx to import from form-wrapper instead of form.
 */
import dynamic from "next/dynamic";

// Skeleton matches the form's rendered height (~460px) to prevent CLS
function FormSkeleton() {
  return (
    <div
      className="shadow-[0px_10px_30px_0px_#0000001a] bg-white rounded-xl px-9 py-8 animate-pulse"
      aria-busy="true"
      aria-label="Loading form"
      style={{ minHeight: 460 }}
    >
      {/* Icon placeholder */}
      <div className="flex flex-col items-center gap-2 pb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="h-5 w-36 rounded bg-gray-200" />
        <div className="h-3.5 w-52 rounded bg-gray-100 mt-1" />
      </div>
      {/* Field placeholders */}
      {[1, 2, 3].map((n) => (
        <div key={n} className="mb-4">
          <div className="h-3.5 w-24 rounded bg-gray-200 mb-2" />
          <div className="h-11 w-full rounded-md bg-gray-100" />
        </div>
      ))}
      {/* Checkboxes */}
      <div className="flex gap-2 items-center mb-3">
        <div className="w-4 h-4 rounded bg-gray-200" />
        <div className="h-3 w-48 rounded bg-gray-100" />
      </div>
      <div className="flex gap-2 items-center mb-5">
        <div className="w-4 h-4 rounded bg-gray-200" />
        <div className="h-3 w-56 rounded bg-gray-100" />
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <div className="h-10 w-44 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

// dynamic() splits form.tsx (+ its RHF + Zod deps) into a separate JS chunk.
// That chunk is only requested after the browser has finished painting,
// which is why TBT and long tasks drop dramatically.
const LazyForm = dynamic(() => import("./form"), {
  ssr: false,        // form is client-only; no value in SSR-ing it
  loading: () => <FormSkeleton />,
});

export default function FormWrapper() {
  return <LazyForm />;
}