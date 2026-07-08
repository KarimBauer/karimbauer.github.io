import links from "@/config/links";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col items-center gap-6 border-r border-slate-700 bg-slate-950 px-6 py-10 text-white shadow-sm md:flex">
      <img
        src={links.githubAvatar}
        alt="Profile picture of Karim Bauer"
        className="h-40 w-40 rounded-full border border-slate-700 object-cover shadow-sm"
      />

      <div className="text-center">
        <p className="text-base font-semibold text-white">Karim Bauer</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Java Backend / Full-stack Developer focused on enterprise software,
          process automation, and client-facing solutions.
        </p>
      </div>

      <div className="mt-8 w-full flex flex-col gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-slate-300"
              aria-hidden="true"
            >
              <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.205 11.36.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.76-1.334-1.76-1.09-.75.083-.74.083-.74 1.205.085 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.485 1.01.11-.79.42-1.31.76-1.61-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.47-2.38 1.24-3.22-.125-.31-.54-1.56.115-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.005-.405c1.02.005 2.045.14 3.005.405 2.29-1.55 3.295-1.23 3.295-1.23.655 1.69.24 2.94.12 3.25.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.6-.015 2.9-.015 3.3 0 .32.215.695.825.58C20.565 22.265 24 17.79 24 12.5 24 5.87 18.63.5 12 .5Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-slate-300"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm.02 7H2V21h3V10.5ZM8.5 10.5h2.84v1.42h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58V21h-3v-4.86c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58V21h-3V10.5Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
      </div>
    </aside>
  );
}
