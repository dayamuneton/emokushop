import React from "react";
import ContactLink from "./contactLink";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function ContactLinks({ fontSize = "1.7rem" }: { fontSize?: string }) {
   return (
      <div className="flex gap-4">
         <ContactLink href="mailto:info@dayamuneton.com">
            <EmailOutlinedIcon
               sx={{
                  fontSize: fontSize,
               }}
            />
         </ContactLink>
         <ContactLink href="https://www.instagram.com/emokushop.us/">
            <InstagramIcon
               sx={{
                  fontSize: fontSize,
               }}
            />
         </ContactLink>
         <ContactLink href="https://www.facebook.com/profile.php?id=100091430442001&mibextid=LQQJ4d">
            <FacebookIcon
               sx={{
                  fontSize: fontSize,
               }}
            />
         </ContactLink>
      </div>
   );
}

export default ContactLinks;
