import { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  title?: string;
}

export default function HighlightBox({ children, title }: HighlightBoxProps) {
  return (
    <div className="my-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm">
      {title && (
        <div className="mb-3 text-sm font-semibold tracking-wide text-blue-700 uppercase">
          {title}
        </div>
      )}
      <div className="text-slate-800 text-lg leading-relaxed font-medium">
        {children}
      </div>
    </div>
  );
}
