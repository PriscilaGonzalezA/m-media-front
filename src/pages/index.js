import localFont from "next/font/local";
import Image from "next/image";
import {Link, Typography} from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-40 gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Typography variant="h4" className={'align-middle sm:text-center'}>
            Bienvenidos a la sección de noticias de MegaMedia
          </Typography>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
              aria-hidden
              src="https://www.megamedia.cl/themes/custom/mega-portal-drupal-theme/img/logoMegamedia.svg"
              alt="Window icon"
              width={150}
              height={150}
          />
        </div>
        <div className="center gap-4 items-center flex-col sm:flex-row sm:text-center">
          <Link underline="hover" href={'/noticias'}>Haz click aquí para ver la lista de noticias</Link>
        </div>
      </main>
    </div>
  );
}
