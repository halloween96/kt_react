export default function TailCard({imgSrc, title, subtitle, tags}) {
  return (
    <div className="border border-sky-300 w-1/3 mt-10 rounded-md">
      <div className="p-2"> 
        <img src={imgSrc} alt={title} />
      </div>
      <div className="text-3xl text-sky-600 font-extrabold m-3 drop-shadow-lg">
        {title}
      </div>
      <div className="m-3 text-sky-400 font-bold">
        {subtitle}
      </div>
      <div className="text-xs bg-sky-300 rounded-lg m-3 p-1 text-white">
        {tags}
      </div>
    </div>
  )
}
