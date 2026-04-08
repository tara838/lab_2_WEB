import SectionTitle from './SectionTitle';

function ProjectEntry({ title, bullets }) {
  return (
    <div className="mb-4 last:mb-0">
      <p
        className="font-bold text-[13px] text-[#1a1a2e] mb-[6px]"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-[5px] pl-1">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[12.5px] leading-[1.55] pl-[14px] relative"
          >
            <span className="absolute left-0 top-[3px] text-[#323b4c] text-[10px]">•</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects({ entries }) {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      {entries.map((entry, i) => (
        <ProjectEntry key={i} {...entry} />
      ))}
    </section>
  );
}