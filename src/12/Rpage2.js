import { useSearchParams } from "react-router-dom"
export default function Rpage2() {
  const [sParams] = useSearchParams();
  const itemList = {'사과':'🍎', '바나나':'🍌', '당근':'🥕'}
  //console.log(sParams.get('item1'));
  //console.log(sParams.get('item2'));
  const item1 = sParams.get('item1');
  const item2 = sParams.get('item2');
  return (
    <div>
        page2: {item1 && itemList[item1]}{item2 && itemList[item2]}    
    </div>
  )
}
