import SectionTitle from './SectionTitle';

function CourseEntry({ title, link, meta, bullets }) {
  return (
    <div className="mb-4 last:mb-0">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p
            className="font-bold text-[13px] text-[#323b4c] underline mb-1"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {title}
          </p>
        </a>
      ) : (
        <p
          className="font-bold text-[13px] text-[#323b4c] mb-1"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {title}
        </p>
      )}
      {meta && (
        <p className="text-[11.5px] text-[#4a5568] mb-[6px]">{meta}</p>
      )}
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

export default function Courses({ entries }) {
  return (
    <section>
      <SectionTitle>Courses and Certifications</SectionTitle>
      {entries.map((entry, i) => (
        <CourseEntry key={i} {...entry} />
      ))}
    </section>
  );
}