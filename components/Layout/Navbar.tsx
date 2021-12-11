import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/client";
// import "./Navbar.css";
import styles from "./Navbar.module.scss";

function Navbar() {
  // const [session, loading] = useSession();
  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">NextAuth</a>
      </h1>
      <ul className={styles.mainNav && styles.loaded}>
        {/* <ul className={`styles.main-nav ${!session && loading ? "loading" : "loaded"}`}> */}
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
