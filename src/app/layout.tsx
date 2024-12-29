import "./globals.css";
import sansita from "./ui/font";
import styles from "./layout.module.css";
import clsx from "clsx";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(sansita.className, "background")}>
        <nav className="container mx-auto">
          <div className={clsx(styles.contnav, "flex justify-between mt-3")}>
            <img src="logo.png" alt="image" />
            <ul className="flex items-center">
              <li className="mx-4">
                <a className={styles.linkA} href="/">
                  Home
                </a>
              </li>
              <li className="mx-4">
                <a className={styles.linkA} href="/comprar">
                  Comprar
                </a>
              </li>
              <li className="ml-4">
                <a className={styles.linkA} href="/nosotros">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
