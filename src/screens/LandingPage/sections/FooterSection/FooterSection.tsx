import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Footer navigation links organized by column
const footerLinks = [
  {
    title: "Rooms",
    links: ["Rooms", "Facilities", "Offers", "Wedding"],
  },
  {
    title: "About",
    links: ["About", "Blog", "Careers", "Location"],
  },
  {
    title: "Social",
    links: ["Inatagram", "Twitter", "YouTube", "TikTok"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#191818] py-20 max-[680px]:py-10">
      <div className="container mx-auto px-6 max-w-[1216px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Address */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3.5">
              <img className="w-[60px] h-10 max-[480px]:w-[30px]"  alt="Logo" src="/logo-2.svg" />
              <div className="[font-family:'Bw_Gradual_DEMO-Medium',Helvetica] font-medium text-white text-2xl">
                Zerra
              </div>
            </div>
            <p className="font-normal text-[#7a7a7a] text-lg leading-[27px] max-w-[231px] [font-family:'Manrope',Helvetica] max-[480px]:text-[16px]">
              2020 Massachusetts Ave NW, Washington, DC 20036
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col gap-8 max-[480px]:gap-2 ">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="[font-family:'Manrope',Helvetica] font-medium text-white text-base hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div className="flex flex-col gap-[50px]">
            <h3 className="[font-family:'Manrope',Helvetica] font-medium text-white text-2xl max-[480px]:text-[20px] max-[800px]:w-[250px]">
              Subscribe Our Newsletter
            </h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between w-full">
                <Input
                  placeholder="Email Address"
                  className="border-none bg-transparent text-[#7a7a7a] [font-family:'Manrope',Helvetica] font-medium text-base focus-visible:ring-0 p-0 h-auto max-[480px]:text-[16px]"
                />
                <button className="flex items-center justify-center">
                  <ArrowUpRightIcon className="w-[30px] h-[30px] text-white" />
                </button>
              </div>
              <Separator className="bg-[#7a7a7a] h-px w-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10">
          <Separator className="bg-[#7a7a7a] h-px w-full opacity-50 mb-10" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="[font-family:'Manrope',Helvetica] font-normal text-[#7a7a7a] text-lg max-[480px]:text-[16px]">
              @2023 Zerra. All rights reserved
            </div>
            <div className="flex gap-8 mt-4 md:mt-0 max-[360px]:flex-col max-[360px]:gap-2">
              <a
                href="#"
                className="[font-family:'Manrope',Helvetica] font-normal text-[#7a7a7a] text-lg hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
              >
                Terms &amp; Condditions
              </a>
              <a
                href="#"
                className="[font-family:'Manrope',Helvetica] font-normal text-[#7a7a7a] text-lg hover:text-gray-300 transition-colors max-[480px]:text-[16px]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
