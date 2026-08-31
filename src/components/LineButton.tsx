/** Replace with the official LINE account URL, e.g. https://line.me/R/ti/p/@xxxx */
export const LINE_URL = 'https://line.me/';

function LineMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.21 2 1.5 5.86 1.5 10.59c0 4.17 3.7 7.66 8.7 8.32.34.07.8.22.92.51.1.26.07.66.03.94l-.14.88c-.04.26-.21 1.03.91.56 1.12-.47 6-.3 8.18-2.81 1.4-1.48 2.14-3.16 2.14-5.4C22.5 5.86 17.79 2 12 2z"
      />
    </svg>
  );
}

export function LineFooterLink() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-flex items-center gap-2.5 text-sm font-light text-bishu-300 hover:text-white transition-colors"
      aria-label="LINE（準備中）"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#06C755] text-white">
        <LineMark className="h-4 w-4" />
      </span>
      LINE
      <span className="text-[10px] tracking-wider uppercase text-bishu-600">Coming soon</span>
    </a>
  );
}

export function LineFab() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg hover:scale-105 hover:brightness-110 transition-all"
      aria-label="LINE（準備中）"
      title="LINE"
    >
      <LineMark className="h-7 w-7" />
    </a>
  );
}
