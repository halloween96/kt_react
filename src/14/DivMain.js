import { useEffect, useState } from "react"
import Div1 from "./Div1";
export default function Divmain() {
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);
    useEffect(() => {
        setN2(n*2);
    }, [n])
    return (
        <div className="w-full flex justify-center items-center h-full bg-cyan-200">
            <div className="w-4/5 h-4/5 bg-cyan-300 flex flex-col items-center rounded-xl p-10">
                <div className="text-lg text-white">
                    Div Main n={n}, n2={n2}
                </div>
                <Div1 n={n} setN={setN}/>
            </div>
        </div>
    )
}