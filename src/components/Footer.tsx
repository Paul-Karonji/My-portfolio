import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-shell flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="mono-tag text-[11px] text-muted">
          {profile.name} · {profile.location} · {profile.timezone}
        </p>
        <div className="flex flex-wrap items-center gap-5 sm:ml-auto">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mono-tag text-[11px] text-muted transition-colors hover:text-text"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono-tag text-[11px] text-muted transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="mono-tag text-[11px] text-muted transition-colors hover:text-text"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
