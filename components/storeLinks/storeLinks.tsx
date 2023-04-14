import React from "react";
import StoreLink from "./storeLink";

function StoreLinks() {
   return (
      <div className="flex flex-col items-center w-full gap-2 ">
         <StoreLink
            href="https://emokushop.rocketfy.co/"
            className="animate-wiggle"
         >
            <div className="flex flex-col items-center w-full ">
               <p className="text-lg ">Online Store Colombia</p>
               <p className="text-sm">
                  Encuentra lo más trendy y reclama tu REGALO
               </p>
            </div>
         </StoreLink>
         <StoreLink href="https://www.emokushop.com/">
            <div className="flex flex-col items-center w-full">
               <p className="text-lg ">Online Store USA</p>
               <p className="text-sm">HOT TOPICS - Shopping & Retail</p>
               <p className="text-sm">COMING SOON</p>
            </div>
         </StoreLink>
      </div>
   );
}

export default StoreLinks;
