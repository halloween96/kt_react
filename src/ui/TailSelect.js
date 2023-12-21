export default function TailSelect({opItem, handleChange}) {
    const ops = opItem.map((item, idx) =>
        <option key={`op${idx}`} value={item}>{item}</option>
    );
  return (
    <select 
        onChange={handleChange}
        className="w-full p-1" >
        <option value='' >=== 지역 선택 ===</option>
        {ops}
    </select>
  )
}
