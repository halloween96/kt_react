export default function TailCard({ imgSrc, title, subtitle, tags }) {
  
  return (
    <div className="border-4 border-sky-300  mt-10 rounded-md shadow-lg">
      <div className="p-2 w-auto">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="text-3xl text-sky-600 font-extrabold m-3">
        {title}
      </div>
      <div className="m-3 text-sky-400 font-bold">
        {subtitle}
      </div>
      <div className="m-2">
        {tags.split(', ').map((tag, index) => (
          <span key={index} className="inline-block bg-sky-300 rounded-full px-1.5 py-0.5 text-white text-sm font-medium mr-1 mb-1 ms-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
