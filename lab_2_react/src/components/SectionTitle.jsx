export default function SectionTitle({ children }) {
  return (
    <h2
      className="font-extrabold text-[12px] tracking-[0.2em] uppercase text-[#323b4c] mb-[10px] pb-[6px] border-b border-[#c4ccd8]"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {children}
    </h2>
  );
}