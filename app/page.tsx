import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-neutral-800 grid min-h-full place-items-center">
        <div className="text-center">
          <p className="text-base font-semibold">This Is</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Dashboard
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we aren&apos;t ready yet.
          </p>
          <div className="mt-10 gap-x-6 flex items-center justify-center">
            <Link
              className="h-10 gap-2 bg-black px-4 text-sm text-white hover:text-white sm:h-12 sm:px-5 sm:text-base dark:text-white flex items-center justify-center rounded-full border border-solid transition-colors hover:bg-[#383838] dark:bg-transparent dark:hover:bg-[#ccc]"
              href="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
