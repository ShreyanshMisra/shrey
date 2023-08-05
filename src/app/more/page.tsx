import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shreyansh Misra | More",
  description: "More",
};

export default async function MorePage() {
  return (
    <section>
      <h1 className="font-mono text-[20px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        More
      </h1>
    </section>
  );
}
