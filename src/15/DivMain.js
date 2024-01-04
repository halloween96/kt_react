import { useRecoilValue } from "recoil";
import { divn, divn2 } from "./DivAtoms"
import Div1 from "./Div1";
export default function Divmain() {
    const n = useRecoilValue(divn) ;
    const n2 = useRecoilValue(divn2) ;
    return (
        <div className="w-full flex justify-center items-center h-full bg-cyan-200">
            <div className="w-4/5 h-4/5 bg-cyan-300 flex flex-col items-center rounded-xl p-10">
                <div className="text-lg text-white">
                    Recoil Div Main n={n}, n2={n2}
                </div>
                <Div1 />
            </div>
        </div>
    )
} 