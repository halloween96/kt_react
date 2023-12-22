export default function Tailbutton({caption, bcolor, handleClick}) {
  const tailColor = {
    sky : "hover:bg-sky-200 hover:text-sky-400 bg-sky-400",
    orange : "hover:bg-orange-200 hover:text-orange-700 bg-orange-700",
    lime : "hover:bg-lime-200 hover:text-lime-700 bg-lime-700"
  }
  return (
    <button className={`inline-flex justify-center items-center
                      px-5 py-2 m-2 rounded-md w-2/5
                      ${tailColor[bcolor]}
                      text-white`}
    onClick={handleClick}
    >
      {caption}
    </button>
  )
}
