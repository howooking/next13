import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

const header = (
  <header className="bg-slate-800 p-8 rounded-md my-6">
    <div className="text-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
        className="mx-auto"
      />
      <Link href={"/"}>
        <h1 className="text-slate-100 text-2xl font-bold mt-4">Howoo's Blog</h1>
      </Link>
      <p className="text-slate-300 font-bold">👍Welcome to my Tech blog😁</p>
    </div>
  </header>
);

const footer = (
  <footer className="border-t border-slate-400 text-center mt-6 py-6">
    <div>
      <h3 className="text-slate-400">Developed by Howoo</h3>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-2xl p-2">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
