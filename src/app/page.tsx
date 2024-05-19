"use client";

import { twMerge } from 'tailwind-merge'
import TextStyles from './utils/textstyle';
import { useRouter } from 'next/navigation';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Image from 'next/image';
import PortraitJannek from '@/images/photoJannek.jpg'

export default function Home() {

  let buttonClicked = true; 

  function handleClick () {
    console.log("Clicked")
    let buttonClicked = true; 
  }

  return (
    <div className="flex flex-col gap-y-20 pt-52 pl-10 pr-10 pb-20"> 
      <div className="flex flex-row ">
        <p className={twMerge(TextStyles.H1, "h-full w-full items-center")}>Jannek <br></br>Kloettschen
        </p>
        <Image className="rounded-lg" alt="" height={375} width={260} src={PortraitJannek}/> 
      </div>
    </div> 
  );
}