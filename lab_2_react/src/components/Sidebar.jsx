function SidebarSection({ title, children }) {
  return (
    <div className="w-full mb-[50px] last:mb-0">
      <h2
        className="font-extrabold text-[11px] tracking-[0.18em] uppercase text-[#1a1a2e] mb-[10px] pb-[6px] border-b border-black/[0.18]"
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[12px] leading-[1.45] pl-[13px] relative"
        >
          <span className="absolute left-0 top-[1px] text-[#323b4c] text-[11px]">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar({ contacts, hardSkills, softSkills, languages }) {
  return (
    <aside
      className="bg-[#e4e4e4] text-[#1a1a2e] flex flex-col items-start pb-10 pl-[22px] pr-5"
      style={{
        width: 240,
        minWidth: 240,
        paddingTop: 90 + 26,
      }}
    >
      {/* Contacts */}
      <SidebarSection title="Contacts">
        <ul className="flex flex-col gap-[9px]">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] leading-[1.4]">
              <span className="text-[13px] mt-[1px] flex-shrink-0 opacity-70">{c.icon}</span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </SidebarSection>

      {/* Hard Skills */}
      <SidebarSection title="Hard Skills">
        <BulletList items={hardSkills} />
      </SidebarSection>

      {/* Soft Skills */}
      <SidebarSection title="Soft Skills">
        <BulletList items={softSkills} />
      </SidebarSection>

      {/* Languages */}
      <SidebarSection title="Languages">
        <ul className="flex flex-col gap-[7px]">
          {languages.map((lang, i) => (
            <li
              key={i}
              className="text-[12px] pl-[13px] relative"
            >
              <span className="absolute left-0 top-[1px] text-[#323b4c] text-[11px]">•</span>
              {lang}
            </li>
          ))}
        </ul>
      </SidebarSection>
    </aside>
  );
}