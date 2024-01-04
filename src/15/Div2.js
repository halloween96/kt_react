import { useRecoilValue } from "recoil";
import Div3 from "./Div3";
import { divn4 } from "./DivAtoms";
export default function Div2() {
  const n4 = useRecoilValue(divn4);
  return (
    <div className="w-4/5 h-4/5 bg-cyan-600 flex flex-col justify-center items-center rounded-xl p-10">
            <div className="text-lg text-white">
                Div2 n4={n4}
            </div>
            <Div3 />
        </div>
  )
}
