import React from "react";
import StoreLink from "./storeLink";

function StoreLinks() {
   return (
      <div className="flex flex-col items-center w-full gap-2 text-center">
         <StoreLink
            href="https://emokushop.rocketfy.co/"
            className="animate-wiggle"
         >
            <div className="flex flex-col items-center w-full ">
               <p className="text-lg ">Online Store Colombia</p>
               <span className="flex flex-wrap justify-center gap-1 text-sm">
                  <p>Encuentra lo más trendy y</p>
                  <p>reclama tu REGALO</p>
               </span>
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
