import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shreyansh Misra | More",
  description: "More",
};

export default async function MorePage() {
  return (
    <section>
      <p className="text-[35px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        Coming soon
      </p>
    </section>
  );
}
