import { useRecoilValue } from "recoil"
import Div2 from "./Div2"
import { divn3 } from "./DivAtoms"
export default function Div1() {
    const n3 = useRecoilValue(divn3);
    return (
        <div className="w-4/5 h-4/5 bg-cyan-500 flex flex-col justify-center items-center rounded-xl p-10">
            <div className="text-lg text-white">
                Div1 n3={n3}
            </div>
            <Div2 />
        </div>
    )
}
