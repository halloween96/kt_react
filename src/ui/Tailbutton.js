export default function Tailbutton({caption, bcolor, handleClick}) {
  const tailColor = {
    sky : "hover:bg-sky-200 hover:text-sky-700 bg-sky-700",
    orange : "hover:bg-orange-200 hover:text-orange-700 bg-orange-700",
    lime : "hover:bg-lime-200 hover:text-lime-700 bg-lime-700"
  }
  return (
    <button className={`inline-flex justify-center items-center
                      px-5 py-2 m-2 rounded-md
                      ${tailColor[bcolor]}
                      text-white`}
    onClick={handleClick}
    >
      {caption}
    </button>
  )
}
