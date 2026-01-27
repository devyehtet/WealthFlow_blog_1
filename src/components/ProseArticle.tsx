import { ReactNode } from "react";

export default function ProseArticle({ children }: { children: ReactNode }) {
  return (
    <section className="mt-8">
      <div className="rounded-3xl border bg-white/70 px-6 py-7 backdrop-blur md:px-10 md:py-10">
        {children}
      </div>
    </section>
  );
}
