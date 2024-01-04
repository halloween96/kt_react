import Div2 from "./Div2"
export default function Div1({n, setN}) {
    return (
        <div className="w-4/5 h-4/5 bg-cyan-500 flex flex-col justify-center items-center rounded-xl p-10">
            <div className="text-lg text-white">
                Div1
            </div>
            <Div2 n={n} setN={setN}/>
        </div>
    )
}
