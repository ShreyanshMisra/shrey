import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shreyansh Misra | More",
  description: "More",
};

export default async function MorePage() {
  return (
    <section>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <p className="text-[35px] text-black dark:text-white font-extrabold tracking-widest mb-6">
        Coming soon
      </p>

      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="shreyanshmisra" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/shreyanshmisra?trk=profile-badge">Shreyansh M.</a></div>
    </section>
  );
}
