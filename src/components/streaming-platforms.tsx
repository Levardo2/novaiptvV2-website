export function StreamingPlatforms() {
  const platforms = [
    { name: "Netflix", color: "#E50914" },
    { name: "HBO", color: "#000000" },
    { name: "Prime Video", color: "#00A8E1" },
    { name: "Disney+", color: "#113CCF" },
    { name: "Hulu", color: "#1CE783" },
    { name: "ESPN+", color: "#000000" },
    { name: "Paramount+", color: "#0064FF" },
    { name: "Peacock", color: "#000000" },
  ];

  return (
    <section className="py-12 bg-[var(--color-surface)]/20 border-y border-white/5">
      <div className="container-custom">
        <p className="text-center text-sm text-[var(--color-muted)] mb-8 uppercase tracking-wider">
          Access content from popular platforms
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 rounded-lg bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <span className="text-sm font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--color-muted)] mt-6 opacity-60">
          * Channel availability varies by region and plan. All content provided under proper licensing agreements.
        </p>
      </div>
    </section>
  );
}
