export default function Mybutton({caption, bcolor, handleOnclick}) {
    const bcolorlt ={
        'emerald' : 'bg-emerald-500',
        'red' : 'bg-red-500',
        'sky' : 'bg-sky-500'
    }
  return (
    <button onClick={handleOnclick}
        className={`flex justify-center items-center m-2 p-2 ${bcolorlt[bcolor]} text-white rounded-lg`}>
    {caption}
    </button>
  )
}
