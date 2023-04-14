import Image from "next/image";
import Link from "next/link";
import React from "react";

function StoreLink({
   href,
   children,
   className,
}: {
   href: string;
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <Link
         href={href}
         className={`relative flex items-center bg-[#d0fef7] py-2 w-[90vw] max-w-2xl  px-4 rounded-full border-2 border-black hover:scale-[1.01] ${className}`}
      >
         <span className="relative aspect-square flex w-[3.5rem]">
            <Image src="/EmokushopLogo.png" alt="Emokushop logo" fill />
         </span>
         <div className="flex justify-center w-full">{children}</div>
      </Link>
   );
}

export default StoreLink;
