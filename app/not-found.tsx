import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page did not exist",
};

export default function NotFound() {
  return (
    <>
      <main className="bg-white px-6 py-24 sm:py-32 lg:px-8 grid min-h-full place-items-center">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 gap-x-6 flex items-center justify-center">
            <Link
              className="h-10 gap-2 bg-black px-4 text-sm sm:h-12 sm:px-5 sm:text-base flex items-center justify-center rounded-full border border-solid transition-colors"
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
