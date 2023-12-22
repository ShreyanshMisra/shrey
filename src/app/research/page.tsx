import type { Metadata } from "next";
import { TextLink } from "../components/Links";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shreyansh Misra | Research",
  description: "Research",
};

export default async function ResearchPage() {
  return (
    <section>
      <p className="text-[35px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        Research
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <p className="text-white font-bold">Lab Trainings</p>:
        <TextLink text="Lab Safety" link="./certificates/labsafety.pdf" />
        <TextLink
          text="Fire Safety"
          link="./certificates/firesafety.pdf"
        />
        <TextLink
          text="Bloodborne Pathogens"
          link="./certificates/bloodbornepathogens.pdf"
        />
      </ul>

      <ul className="flex flex-col md:flex-row mt-2 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <p className="text-white font-bold">CITI Certifications</p>:
        <TextLink
          text="CITI: Group 1 Biomedical Research"
          link="https://www.citiprogram.org/verify/?wb505f611-b1da-40de-8107-af5965609667-60195093/"
        />
        <TextLink
          text="CITI: Good Clinical Practice"
          link="https://www.citiprogram.org/verify/?w1f78f978-8daf-40ac-a421-368086a3ceaa-60195095/"
        />
      </ul>

      <p className="leading-loose mt-8">
        <span className="font-bold">Relevant Coursework</span>: Programming with Data Structures, Computer Systems, Intro to
        Computation (Discrete Mathematics), Multivariate Calculus, Linear
        Algebra, Intro to Kinesiology.
      </p>
    </section>
  );
}
