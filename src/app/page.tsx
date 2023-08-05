import Image from "next/image";
import { SocialLink, TextLink } from "./components/Links";
import linkedin from "public/icons/linkedin.png";
import github from "public/icons/github.png";


export default function Home() {
  return (
    <main>
      <p className="font-mono text-[20px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        Hey, I'm Shrey <span className="text-[25px]">🌴</span>
      </p>

      <p className="leading-loose">
        I'm a sophomore at the University of Massachusetts. I grew up in Dubai
        and spent my last summer working at Falcon Eye Drones.
      </p>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <SocialLink
          img={linkedin}
          name="@shreyanshmisra"
          platform="Lets connect on LinkedIn!"
          link="https://www.linkedin.com/in/shreyanshmisra/"
        />
        <SocialLink
          img={github}
          name="@ShreyanshMisra"
          platform="Check out my portfolio!"
          link="https://github.com/ShreyanshMisra"
        />
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <TextLink
          text="shreyansh@umass.edu"
          link="mailto:shreyansh@umass.edu"
        />
        <TextLink text="Resume" link="/Resume.pdf"/>
      </ul>
    </main>
  );
}
