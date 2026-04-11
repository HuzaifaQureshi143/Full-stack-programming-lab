import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        Qureshi Store
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
