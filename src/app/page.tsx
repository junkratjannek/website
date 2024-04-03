"use client" 

import { twMerge } from 'tailwind-merge'
import TextStyles from './utils/textstyle';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter(); 
  return (
    <div className="flex flex-col gap-y-20 pt-52 pl-10 pr-10 pb-20"> 
    <div className={twMerge(TextStyles.H1, "h-full w-full items-center")}>Jannek Kloettschen</div>
    <div className="text-white">My name is Jannek Kloettschen.</div> 
    <div className="flex flex-row gap-x-5"> 
    <button type="button" onClick={() => router.push("/about")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">About</button> 
    <button type="button" onClick={() => router.push("/projects")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">Projects</button>
    <button type="button" onClick={() => router.push("/Business")} className="bg-gray-700 text-blue-500 w-32 rounded-lg pt-1 pb-1 pl-3 pr-3">Business</button>  
    <button type="button" onClick={() => router.push("/travel")} className="bg-gray-700 text-blue-500 w-32 rounded-lg pt-1 pb-1 pl-3 pr-3">Travel</button>  
    </div>
    </div> 
  );
}
