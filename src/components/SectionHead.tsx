import { ReactNode } from "react";

interface SectionHeadProps {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
}

export default function SectionHead({
  index,
  label,
  title,
  lede,
  aside,
}: SectionHeadProps) {
  return (
    <div className="grid gap-8 border-b border-hairline pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <div className="flex items-center gap-3">
          <span className="mono-tag text-lav">{index}</span>
          <span className="h-px w-6 bg-hairline" />
          <span className="eyebrow">{label}</span>
        </div>
        <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.15rem)]">{title}</h2>
        {lede && (
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.7] text-dim">
            {lede}
          </p>
        )}
      </div>
      {aside && <div className="lg:pb-2">{aside}</div>}
    </div>
  );
}
