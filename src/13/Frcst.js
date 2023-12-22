import { useEffect, useState } from "react";
import Tailbutton_w from "../ui/Tailbutton_w";
import Tailh1 from "../ui/Tailh1";
import TailSelect_w from "../ui/TailSelect_w";
import getcode from "./getcode.json";
import getxy from "./getxy.json";
export default function Frcst() {

    const sido = getxy.map(item => item["1단계"]);
    const handleSelsido = ((e)=> {
        console.log(e.target.value)
    });

    return (
        <div className="container mx-auto h-screen">
            <div className='flex flex-col items-center h-full w-full'>
                <div className="w-4/5 m-8 ">
                    <Tailh1 title="단기예보 선택" />
                </div>
                <form className="mt-10 mb-10 w-full inline-flex justify-center">
                    <input type="date" className="w-2/5 px-5 py-2 m-2 bg-orange-200 rounded-md" />
                    <TailSelect_w opItem={sido} handleChange={handleSelsido}/>
                </form>
                <div className="w-full flex justify-center">
                    <Tailbutton_w caption='초단기예보' bcolor='sky' />
                    <Tailbutton_w caption='단기예보' bcolor='orange' />
                </div>
            </div>
        </div>
    )
}