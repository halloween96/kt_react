import Tailbutton from "../ui/Tailbutton";
export default function TrafficNav({title, carr, sel, setSel}) {
    const handleBTClick = (item) => {
        setSel(item)
    }
    const tags = carr.map((item, idx)=>
    <Tailbutton caption={item} key={`bt${idx}`} bcolor={item === sel ? 'orange' : 'sky'} handleClick={() => handleBTClick(item)} />
    );
  return (
    <div className="flex w-full bg-slate-100 p-1 my-2 rounded-lg">
      <div className="flex justify-center items-center text-xl w-1/6">
        {title}
      </div>
      <div className="flex justify-end items-center w-5/6">
        {tags}
      </div>
    </div>
  )
}
