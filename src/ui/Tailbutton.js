export default function Tailbutton({caption, handleClick}) {
  return (
    <button className="inline-flex justify-center items-center px-5 py-2 m-2 rounded-md bg-sky-700 text-white hover:bg-sky-200 hover:text-sky-700" 
    onClick={handleClick}
    >
      {caption}
    </button>
  )
}
