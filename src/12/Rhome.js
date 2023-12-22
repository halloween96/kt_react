import Tailbutton from "../ui/Tailbutton"
import { Link, useNavigate } from "react-router-dom"
export default function Rhome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">Home</div>
      <div className="flex">
        <div className="mx-10">Page1 이동1</div>
        <ul>
          <li><Link to='/page1/사과'>사과🍎</Link></li>
          <li><Link to='/page1/바나나'>바나나🍌</Link></li>
          <li><Link to='/page1/당근'>당근🥕</Link></li>
        </ul>
      </div>
      <div className="flex">
        <div className="mx-10">Page1 이동2</div>
        <div className="flex flex-col">
          <Tailbutton caption={'사과'} bcolor={'sky'} handleClick={()=> navigate('/page1/사과')} />
          <Tailbutton caption={'바나나'} bcolor={'sky'} handleClick={()=> navigate('/page1/바나나')} />
          <Tailbutton caption={'당근'} bcolor={'sky'} handleClick={()=> navigate('/page1/당근')} />
        </div>
      </div>
      <div className="flex">
        <div className="mx-10">Page2 이동1</div>
        <div className="flex flex-col">
          <Tailbutton caption={'사과'} bcolor={'lime'} handleClick={()=> navigate('/page2?item1=사과&item2=바나나')} />
          <Tailbutton caption={'바나나'} bcolor={'lime'} handleClick={()=> navigate('/page2?item1=바나나&item2=당근')} />
          <Tailbutton caption={'당근'} bcolor={'lime'} handleClick={()=> navigate('/page2?item1=당근&item2=사과')} />
        </div>
      </div>
    </div>
  )
}
