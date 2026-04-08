import SectionTitle from './SectionTitle';

export default function Profile({ text }) {
  return (
    <section>
      <SectionTitle>Profile</SectionTitle>
      <p className="text-[13px] leading-[1.7] text-justify">
        {text}
      </p>
    </section>
  );
}