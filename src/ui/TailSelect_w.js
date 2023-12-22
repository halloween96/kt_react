export default function TailSelect({opItem, handleChange}) {
    const ops = opItem.map((item, idx) =>
        <option key={`op${idx}`} value={item}>{item}</option>
    );
  return (
    <select 
        onChange={handleChange}
        className="w-2/5 px-5 py-2 m-2 bg-sky-200 rounded-md" >
        <option value='' >=== 지역 선택 ===</option>
        {ops}
    </select>
  )
}
