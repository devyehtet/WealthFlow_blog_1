import Link from "next/link";
import Container from "./Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/60 backdrop-blur">
      <Container>
        <div className="py-10 text-sm text-neutral-600">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="hover:text-neutral-900">About</Link>
              <Link href="/contact" className="hover:text-neutral-900">Contact</Link>
              <Link href="/privacy" className="hover:text-neutral-900">Privacy</Link>
              <Link href="/terms" className="hover:text-neutral-900">Terms</Link>
              <Link href="/disclaimer" className="hover:text-neutral-900">Disclaimer</Link>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-neutral-500">
            Educational content only. We do not provide financial, legal, or tax advice.
            Always do your own research and consult a qualified professional.
          </p>
        </div>
      </Container>
    </footer>
  );
}
