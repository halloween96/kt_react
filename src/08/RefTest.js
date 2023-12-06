import { useState, useRef } from "react";
import Tailbutton from "../ui/Tailbutton"
import Tailh1 from "../ui/Tailh1";
import TailInputnum from "../ui/TailInputnum";
export default function RefTest() {
    let cnt = 0;
    const [stCnt, setStCnt] = useState(0);
    const rfCnt = useRef(0);
    const rfNum1 = useRef();
    const rfNum2 = useRef();
    const rfNum3 = useRef();
    const handleCntUp = () => {
        cnt = cnt + 1;
        console.log("cnt = ", cnt);
    }
    const handleStCntUp = () => {
        setStCnt(stCnt + 1);
        console.log("stCnt = ", stCnt);
    }
    const handlerfCntUp = () => {
        rfCnt.current = rfCnt.current + 1;
        console.log("rfCnt = ", rfCnt.current);
    }
    const handleSum = () => {
        let n1 = parseInt(rfNum1.current.value);
        let n2 = parseInt(rfNum2.current.value);
        rfNum3.current.value = n1 + n2;
    }
    return (
        <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto">
            <div className="flex justify-center items-center h-20">
                <Tailh1 title={"useRef Hook"} />
            </div>
            <div className="flex justify-center items-center h-20">
                <div>cnt = {cnt}</div>
                <div><Tailbutton caption={'증가'} handleClick={handleCntUp} /></div>
            </div>
            <div className="flex justify-center items-center h-20">
                <div>stCnt = {stCnt}</div>
                <div><Tailbutton caption={'증가'} handleClick={handleStCntUp} /></div>
            </div>
            <div className="flex justify-center items-center h-20">
                <div>rfCnt = {rfCnt.current}</div>
                <div><Tailbutton caption={'증가'} handleClick={handlerfCntUp} /></div>
            </div>
            <div className="flex justify-center items-center h-20">
                <div>
                    <TailInputnum id={'num1'} name={'num1'} rf={rfNum1} />
                </div>
                <div>
                    +
                </div>
                <div>
                    <TailInputnum id={'num2'} name={'num2'} rf={rfNum2} />
                </div>
                <div>
                    <Tailbutton caption={'='} handleClick={handleSum} />
                </div>
                <div>
                    <TailInputnum id={'num3'} name={'num3'} rf={rfNum3} isOnly={true} />
                </div>
            </div>
        </div>
    )
}
