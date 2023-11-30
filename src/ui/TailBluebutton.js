export default function TailBluebutton({caption, onClick}) {
  return (
    <button className="inline-flex justify-center items-center p-5 m-1 h-10 rounded-md bg-blue-600 text-white hover:bg-blue-800"
        onClick={onClick}>
      {caption}
    </button>
  )
}
