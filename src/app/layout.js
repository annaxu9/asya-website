import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex flex-row gap-5">
          <h1>Hi Asya: This is the nav bar I made in the layout.js page</h1>
          <Link href="/">Page 1</Link>
          <Link href="/page2">Page 2</Link>
          <Link href="/page3">Page 3</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
