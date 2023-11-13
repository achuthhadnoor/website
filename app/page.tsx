import Social from "@/components/Social";
import Scramble from "@/components/scramble";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Achuth Hadnoor - Designer and Engineer",
  description:
    "Achuth Hadnoor is a  designer, developer, and creator based in India. He shares about UI/UX design, Solopreneurship, App Development.",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen py-10 p-4 md:p-24 text-neutral-600 max-w-5xl mx-auto align-middle">
      <header>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.10449 32.9999C8.10454 22.2307 6.32951 13 17.4092 13C28.2646 13 23.7168 13.0001 24.4921 13.0001V25.3077V33M8.10449 25.3077L16.2983 25.3077M40 13.0001L40 25M40 33L40 25M40 25H35L30 25"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </header>
      <section className="py-5">
        <h1 className="text-2xl font-bold">
          <Scramble value="Achuth Hadnoor" />
        </h1>
        {/* <h2 className="text-lg">Designer and Engineer</h2> */}
        <p className="my-5">
          <Scramble value="Designer and Engineer working on products as a Solopreneur." />
        </p>
        <div className="flex gap-5 text-xl items-center">
          <Link href={"https://x.com/achuth_hadnoor"}>
            <Social name="x" />
          </Link>
          <Link href={"https://dribbble.com/achuth_hadnoor"}>
            <Social name="dribbble" />
          </Link>
          <Link href={"https://github.com/achuthhadnoor"}>
            <Social name="github" />
          </Link>
          <Link href={"https://linkedin.com/in/achuth-hadnoor"}>
            <Social name="linkedin" />
          </Link>
          <Link href={"https://instagram.com/uiuxdx"}>
            <Social name="instagram" />
          </Link>
          <Link href={"mailto:hey@achuth.dev"}>
            <Social name="mail" />
          </Link>
        </div>
      </section>
      {/* <section>
        <h2 className="text-md font-bold">
          <Scramble value="Products" />
        </h2>
        <hr className="py-2" />
        <Link href={"https://getlapseapp.com"} className="py-2 cursor-pointer">
          <>
            <Scramble
              value="01. Lapse [ A time-lapse screen recording app for macOs and windows] -
          $25 ↗"
            />
          </>
        </Link>
      </section> */}
    </main>
  );
}
