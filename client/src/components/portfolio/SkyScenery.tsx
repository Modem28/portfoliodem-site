import type { SkyPhase } from "@/lib/portfolio-utils";

export default function SkyScenery({ phase }: { phase: SkyPhase }) {
  return (
    <div className={`sky-scenery sky-${phase}`} aria-hidden="true">
      <div className="sky-glow" />
      <div className="celestial sun" />
      <div className="celestial moon" />
      <div className="cloud cloud-one"><i /><i /><i /></div>
      <div className="cloud cloud-two"><i /><i /><i /></div>
      <div className="cloud cloud-three"><i /><i /><i /></div>
      <div className="cloud cloud-four"><i /><i /><i /></div>
      <div className="cloud cloud-five"><i /><i /><i /></div>
      <div className="stars">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            className={`star star-${index % 3}`}
            style={{
              left: `${(index * 31 + 7) % 100}%`,
              top: `${(index * 19 + 5) % 95}%`,
              animationDelay: `${index % 7}s, ${index % 5}s`,
            }}
          />
        ))}
      </div>
      <div className="shooting-stars">
        <span className="shooting-star shooting-star-one" />
        <span className="shooting-star shooting-star-two" />
      </div>
    </div>
  );
}
