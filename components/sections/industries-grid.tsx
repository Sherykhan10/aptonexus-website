import { industries } from "@/content/industries";
import { Icon } from "@/components/ui/icon";

export function IndustriesGrid() {
  return (
    <section className="industries-section section" id="industries">
      <div className="container">
        <div className="flowforge-industries-header">
          <h2>Built for every industry.</h2>
        </div>
        <div className="flowforge-industry-tiles-grid">
          {industries.map((ind) => (
            <div key={ind.title} className="flowforge-industry-tile">
              <span className="industry-tile-icon">
                <Icon name={ind.icon} />
              </span>
              <span className="industry-tile-title">{ind.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
