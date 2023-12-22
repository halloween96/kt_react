import { Link } from "react-router-dom"
export default function Rnav() {
  return (
    <div className="flex justify-center items-center h-10 bg-slate-200">
        <ul className="flex  space-x-5">
            <li className="hover:bg-sky-500 hover:text-sky-50 p-2"><Link to='/'>Home</Link></li>
            <li className="hover:bg-sky-500 hover:text-sky-50 p-2"><Link to='/page1'>page1</Link></li>
            <li className="hover:bg-sky-500 hover:text-sky-50 p-2"><Link to='/page2'>page2</Link></li>
        </ul>
    </div>
  )
}
