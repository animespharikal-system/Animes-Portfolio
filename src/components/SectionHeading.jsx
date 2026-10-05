export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
