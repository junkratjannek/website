"use client";

import { twMerge } from "tailwind-merge";
import TextStyles from "./utils/textstyle";
import { useRouter } from "next/navigation";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Image from "next/image";
import PortraitJannek from "@/assets/images/photoJannek.jpg";
import Footer from "./componentes/footer";
import Header from "./componentes/header";

export default function Home() {
  let buttonClicked = true;

  function handleClick() {
    console.log("Clicked");
    let buttonClicked = true;
  }

  return (
    <div>
    <Header />
    <div className="items center flex flex-col bg-cream-white pb-20 pl-10 pr-10 pt-20">
      <div className="flex flex-row items-center gap-x-20 rounded-lg bg-dark-blue p-5">
        <div className="flex flex-col gap-y-2 ">
          <p className={twMerge(TextStyles.H1, "h-full w-full items-center")}>
            Jannek <br></br>Kloettschen
          </p>
          <p>Software Development · Entrepreneurship · Sports · Travel</p>
        </div>

        <Image
          className="rounded-lg"
          alt=""
          height={375}
          width={260}
          src={PortraitJannek}
        />
      </div>
    </div>
    <Footer /> 
    </div> 
  );
}
