import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// import "./Navbar.css";
import styles from "./Navbar.module.scss";

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">NextAuth</a>
      </h1>
      {/* <ul className={styles.mainNav && styles.loaded}> */}
      <ul
        className={
          styles.mainNav &&
          (!session && status == "loading" ? styles.loading : styles.loaded)
        }
      >
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
        {status !== "loading" && !session && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  // signIn();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
