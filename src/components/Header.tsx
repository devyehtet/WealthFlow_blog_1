import Link from "next/link";
import Container from "./Container";
import { site } from "@/content/site";
import { Badge } from "@/components/ui";
import EducationalBadge from "@/components/EducationalBadge";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-sm font-bold text-white">
              W
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">{site.name}</div>
              <div className="text-xs text-neutral-500">Finance Tools</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
  <EducationalBadge />
</div>

        </div>
      </Container>
    </header>
  );
}
