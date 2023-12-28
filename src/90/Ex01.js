import Mybutton from "./Mybutton";
import { useState, useEffect, useRef } from "react";
export default function Ex01() {
    const arr = ['안녕', '반말 하니?', '눈깔을 왜 그렇게 떠']
    const arr1 = ['츠어여?', '아니아니', '저 마음에 안들져']
    const arrcolor = ['emerald', 'red', 'sky']
    
    const [tagmsg, settagmsg] = useState(arr1[0]);
    const inRef = useRef();
    
    const tagarr = arr.map((item, idx)=> 
         <Mybutton key={`mb${idx}`} caption={item} handleOnclick={()=>handleCLick(arr1[idx])} bcolor={arrcolor[idx]}/>
    );
    const handleCLick = (msg) =>{
        inRef.current.value === '' ? settagmsg(msg)
        :settagmsg(`${inRef.current.value}${msg}`);
        
    }

    useEffect(()=>{
        console.log("tagmsg", tagmsg)
    } ,[tagmsg]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="bg-indigo-600 text-white h-10 flex justify-center items-center text-2xl m-5 p-5">리액트</h1>
            <div className="flex justify-center items-end w-full">
                <form className="flex justify-center items-center mx-5">
                    <input type="text" ref={inRef}>
                    </input>
                </form>
                {tagarr}
            </div>
            <div className="h-20 flex justify-center items-center text-2xl m-5 p-5">
                {tagmsg}
            </div>
        </div>
    );
}