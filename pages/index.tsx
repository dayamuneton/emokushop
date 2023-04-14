import ContactLinks from "@/components/contactLinks/contactLinks";
import StoreLinks from "@/components/storeLinks/storeLinks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <div className="h-full min-h-screen bg-gradient-to-b from-[#fed5d4] to-[#f0faa0] flex flex-col items-center">
         <Head>
            <title>Emokushop</title>
            <meta
               name="description"
               content="Explora una variedad de tiendas de Emokushop con un solo clic. Nuestra lista de enlaces te lleva directamente a tiendas locales de Emokushop en todo el mundo. Encuentra los productos que te encantan y descubre nuevas tiendas de Emokushop en una sola página conveniente"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <span className="relative flex aspect-square h-[6rem] min-h-[6rem] mt-6">
            <Image alt="Emokushop Logo" src="/EmokushopLogo.png" fill />
         </span>
         <div className="flex flex-col items-center gap-2 my-10 font-semibold text-center">
            <h1 className="text-2xl">
               <Link href="https://www.instagram.com/emokushop.us/">
                  @emokushop.us
               </Link>
            </h1>
            <p className="text-lg">Shop, play and keep emotionally updated</p>

            <ContactLinks />
         </div>
         <StoreLinks />
      </div>
   );
}
