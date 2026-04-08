import SectionTitle from './SectionTitle';

export default function Education({ entries }) {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col gap-4">
        {entries.map((entry, i) => (
          <div key={i} className="flex justify-between items-start gap-3">
            <div>
              <p
                className="font-bold text-[13.5px] text-[#1a1a2e]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {entry.school}
              </p>
              <p className="text-[12.5px] mt-[3px] pl-[14px]">
                {entry.degree}
              </p>
            </div>
            <span className="text-[12px] whitespace-nowrap flex-shrink-0 pt-[2px]">
              {entry.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}