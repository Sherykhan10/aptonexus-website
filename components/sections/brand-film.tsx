import { site } from "@/content/site";
import { VideoPlayer } from "@/components/media/video-player";
export function BrandFilm() {
  return (
    <section className="brand-film section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow lime">THE APTONEXUS FILM</p>
            <h2>
              A little imagination.
              <br />A different perspective.
            </h2>
          </div>
          <p>See AptoNexus in motion.</p>
        </div>
        <VideoPlayer
          src={site.brand.film.mp4}
          poster={site.brand.film.poster}
          title="the brand film"
          description="AptoNexus brand artwork: a white animated robot gestures on a black and lime stage, followed by the AptoNexus logo. This is a brand film, not a physical robot product."
        />
      </div>
    </section>
  );
}
