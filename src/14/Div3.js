import Tailbutton from "../ui/Tailbutton"
export default function Div3({n, setN}) {
    const handleUp = () =>{
        setN(n+1);
    }
    const handleDown = () =>{
        setN(n-1);
    }
  return (
    <div className="w-4/5 h-4/5 bg-cyan-700 flex flex-col justify-center items-center rounded-xl p-10">
            <div className="text-lg text-white">
                Div3
            </div>
            <div>
                <Tailbutton caption="증가" bcolor="sky" handleClick={handleUp} />
                <Tailbutton caption="감소" bcolor="orange" handleClick={handleDown} />
            </div>
        </div>
  )
}

