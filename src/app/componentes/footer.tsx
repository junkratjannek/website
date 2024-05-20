"use client";

import router, { useRouter } from "next/navigation";

export default function Footer(){

    const router = useRouter() 

    return (
        <div> 
            <button type="button" onClick={() => router.push("/imprint")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">Imprint</button> 
            <button type="button" onClick={() => router.push("/privacypolicy")} className="bg-gray-700 text-blue-500 w-20 rounded-lg pt-1 pb-1 pl-3 pr-3">Privacy Polciy</button> 
        </div>
    )
}