import Link from "next/link";
import React from "react";

function ContactLink({
   href,
   children,
}: {
   href: string;
   children: React.ReactNode;
}) {
   return (
      <Link href={href} className="hover:scale-[1.03]">
         {children}
      </Link>
   );
}

export default ContactLink;
