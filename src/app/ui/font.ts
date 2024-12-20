//importar una fuente llamasa Sansita en google fonts para nextjs

import { Sansita } from "next/font/google";

const sansita = Sansita({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default sansita;
