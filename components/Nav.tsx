import Link from "next/link";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap">
        <Link href="/" className="mark">
          International Geography Club Coalition
        </Link>
        <ul className="links">
          <li>
            <Link href="/conference">Conference</Link>
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
