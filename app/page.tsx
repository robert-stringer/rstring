import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-mono">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside  text-sm text-center sm:text-left font-mono">
          <li className="mb-2">
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
              🔒 https://
            </code>{ " " }
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
              rstr.ing
            </code>
          </li>
        </ol>
        <p className="text-sm font-mono">This site has existed in the shadows, its presence unseen, its purpose unknown. Now, the veil is lifted. What you find here has waited—patiently, quietly.</p>
        <p className="text-sm">Non omne quod sepultum est manet oblivione. Non omne quod oblivione traditum est reperiri debet.</p>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center text-sm">
        <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />In the year of our Lord
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          title="Please do not click here"
          href="/">
          2025
        </Link>
      </footer>
    </div>
  );
}
