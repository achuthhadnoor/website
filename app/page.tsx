import Link from "next/link";

export default function Home() {
  const Apps = [
    {
      id: "01",
      name: "Fast-forward [A time-lapse screen recording app] - 25$",
    },
    {
      id: "02",
      name: "Learnvim [Learn vim in browser with guided tutorials] - 35$",
    },
    {
      id: "03",
      name: "MenubarGPT [ GPT in menubar] - 6$",
    },
    {
      id: "04",
      name: "Annotate [Zoom like annotations for macOs and windows] - 4.99$",
    },
    {
      id: "05",
      name: "Gap [Group your menubar icons] - free",
    },
    {
      id: "06",
      name: "Mindful [Minimalist time-tacking app to Get Things Done] - 2.99$ per month",
    },
    {
      id: "07",
      name: "Snapped[A screenshot & mockup generator]",
    },
    {
      id: "08",
      name: "Session/Mindful [Minimalist time-tacking app to Get Things Done] - 2.99$ per month",
    },
    {
      id: "09",
      name: "Tunnel [Share your local development with a simple URL] - 2.99$ per month",
    },
    {
      id: "10",
      name: "Batry [Battery indicator for mac OS and windows with notifications]",
    },
    {
      id: "11",
      name: "hide [Hide sensitive parts of the screen/images/files]",
    },
    {
      id: "12",
      name: "Gify [Create GIF’s from video or images]",
    },
    {
      id: "13",
      name: "Cam [Preview yourself before you do a zoom call]",
    },
    {
      id: "14",
      name: "One [One task at a time in menubar]",
    },
    {
      id: "15",
      name: "MenuCal [calendar in menubar]",
    },
    {
      id: "16",
      name: "PDF chat[open ai] - pdf pals (drop any text file on menubar icon to chat)",
    },
  ];
  return (
    <main className="min-h-screen py-10 p-4 md:p-24 text-neutral-600 max-w-5xl mx-auto">
      <header className="my-10">
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
        <h1 className="text-2xl font-bold">Achuth Hadnoor</h1>
        {/* <h2 className="text-lg">Designer and Engineer</h2> */}
        <p className="my-5">
          I am a designer and engineer and I have 5 years of experience in
          building digital products.{" "}
        </p>
      </section>
      <section>
        <h3 className="text-xl text-neutral-950">Apps</h3>
        <ul className="flex flex-col my-4 gap-2">
          {Apps.map((app) => (
            <Link href="#" key={`app.id`}>
              <li className="group flex gap-2 hover:text-neutral-950 p-2">
                <b>{app.id}</b>
                <span>{app.name} </span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
