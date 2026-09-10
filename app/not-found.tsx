import Link from "next/link";
import { Icon } from "@/components/ui/icon";
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <p className="eyebrow">404 / CONNECTION NOT FOUND</p>
      <h1>
        This path ends here.
        <br />
        Your next idea doesn’t.
      </h1>
      <p className="lead">
        The page may have moved, or the project is no longer available.
      </p>
      <div className="actions">
        <Link href="/" className="button primary">
          Back to home
          <Icon />
        </Link>
        <Link href="/work" className="text-link">
          Explore the work
          <Icon name="diagonal" />
        </Link>
      </div>
    </main>
  );
}
