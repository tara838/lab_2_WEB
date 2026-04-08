export default function Header({ name, subtitle, photoSrc }) {
  return (
    <div className="relative bg-[#323b4c] h-[125px] w-full flex-shrink-0">
      {/* Photo */}
      <div
        className="absolute z-10 rounded-full overflow-hidden border-4 border-white bg-[#b0b8c0] shadow-[0_4px_20px_rgba(0,0,0,0.28)]"
        style={{
          width: 180,
          height: 180,
          left: 120,
          transform: 'translateX(-50%)',
          bottom: -90,
        }}
      >
        {photoSrc ? (
          <img
            src={photoSrc}
            alt="profile"
            className="w-full h-full object-cover block"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[54px] text-white/40">
            👤
          </div>
        )}
      </div>

      {/* Name & Title */}
      <div
        className="absolute right-9 top-1/2 -translate-y-1/2"
        style={{ left: 240 + 32 }}
      >
        <h1
          className="font-extrabold text-[34px] tracking-[0.05em] uppercase text-white leading-[1.1] mb-[7px]"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {name}
        </h1>
        <p
          className="font-normal text-[12.5px] tracking-[0.15em] text-white/60 uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}