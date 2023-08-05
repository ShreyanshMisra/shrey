"use client";

import Image, { StaticImageData } from "next/image";

export default function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SocialLink({
  img,
  link,
  name,
  platform,
}: {
  img: StaticImageData;
  link: string;
  name: string;
  platform: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">{platform}</p>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

export function TextLink({ link, text }: { link: string; text: string }) {
  return (
    <li>
      <a
        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
      >
        <ArrowIcon />
        <p className="h-7 ml-2">{text}</p>
      </a>
    </li>
  );
}
