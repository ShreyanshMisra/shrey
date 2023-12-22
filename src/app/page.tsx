import Image from "next/image";
import { SocialLink, TextLink } from "./components/Links";


export default function Home() {
  return (
    <main>
      <p className="text-[35px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        Shreyansh Misra
      </p>

      <p className="leading-loose">
      I study Computational Mathematics and Data Science at the University of Massachusetts. I grew up in Dubai and spent my last summer interning at Falcon Eye Drones.
      </p>
      
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <TextLink
          text="shreyansh@umass.edu"
          link="mailto:shreyansh@umass.edu"
        />
        <TextLink text="LinkedIn" link="https://www.linkedin.com/in/shreyanshmisra/"/>
        <TextLink text="Github" link="https://github.com/ShreyanshMisra"/>
        <TextLink text="Resume" link="/Shreyansh Misra Resume.pdf"/>
      </ul>
    </main>
  );
}
