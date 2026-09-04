import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-mist sm:flex-row sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {SITE.fullName}
        </p>
        <p className="font-mono">Designed &amp; built with intent.</p>
      </div>
    </footer>
  );
}
