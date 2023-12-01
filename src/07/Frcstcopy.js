import { useEffect, useState } from 'react';
import Tailh1 from '../ui/Tailh1';
import data from './dataFrcst.json';
import TailBluebutton from '../ui/TailBluebutton';
export default function Frcstcopy() {
  const [dtTags, setDtTags] = useState();
  const [dtcnTags, setDtcnTags] = useState();

  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
  
  let dtcn = {}
  for(let i=0 ; i < dtKey.length ; i++){
    dtcn[data[dtKey[i]]] = data[cnKey[i]]
  }
  console.log(dtcn);
  
  const handleClick = (dt) =>{
    console.log(dt, dtcn[dt])
    setDtcnTags(dtcn[dt]);
  }
  useEffect(()=>{
    setDtTags(
      dtKey.map((k, idx)=>
      <TailBluebutton key={`dt${idx}`} caption = {data[k]} onClick={()=> handleClick(data[k])}/>
      )
    );
  },[]);
  return (
    <div className='container mx-auto h-screen'>
      <div className='flex justify-center items-center h-1/6 bg-slate-200'>
        <Tailh1 title={"초미세먼지 주간예보"} />
      </div>
      <div className='grow flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center p-5'>
        {dtTags}
        </div>
        <div className='flex justify-center items-center p-5'>
        {dtcnTags}
        </div>
      </div>
    </div>
  )
}
