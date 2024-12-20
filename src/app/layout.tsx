import "./globals.css";
import sansita from "./ui/font";
import styles from "./layout.module.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansita.className}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className={styles.contnav}>
            <img className="ml-2 mt-2" src="logo.png" alt="image" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Comprar</a>
              </li>
              <li>
                <a href="/nosotros">Nostros</a>
              </li>
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
