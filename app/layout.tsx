import "../styles/globals.css";

const header = (
  <header>
    <div>
      <h1>Howoo's Blog</h1>
      <p>👍Welcome to my Tech blog😁</p>
      <br />
    </div>
  </header>
);

const footer = (
  <footer>
    <div>
      <br />
      <h3>Developed by Howoo</h3>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
