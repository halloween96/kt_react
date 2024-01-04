import Div3 from "./Div3";
export default function Div2({n, setN}) {
  return (
    <div className="w-4/5 h-4/5 bg-cyan-600 flex flex-col justify-center items-center rounded-xl p-10">
            <div className="text-lg text-white">
                Div2
            </div>
            <Div3 n={n} setN={setN}/>
        </div>
  )
}
