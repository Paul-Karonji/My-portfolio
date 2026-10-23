import { archive, languageColors } from "@/data/archive";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Archive() {
  return (
    <section id="archive" className="section rule-top">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <Reveal>
          <SectionHead
            index="05"
            label="The archive"
            title={
              <>
                30 repositories,{" "}
                <span className="gradient-wash">16 months, no filler.</span>
              </>
            }
            lede="Everything on the account, public and private. Public links open the source; private entries are listed without one — the names are enough to show the range."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          {archive.map((repo, index) => (
            <Reveal key={repo.name} delay={Math.min(index, 8) * 40}>
              <div className="group flex items-start gap-3 border-b border-hairline py-3.5">
                <span
                  className="lang-dot mt-[7px]"
                  style={{
                    backgroundColor: languageColors[repo.language] ?? "#55555f",
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    {repo.url ? (
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate font-mono text-[13px] text-text transition-colors hover:text-lav"
                      >
                        {repo.name}
                      </a>
                    ) : (
                      <span className="truncate font-mono text-[13px] text-dim">
                        {repo.name}
                      </span>
                    )}
                    {repo.private && (
                      <span className="mono-tag text-[9.5px] text-muted">
                        private
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[12.5px] leading-snug text-muted">
                    {repo.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
