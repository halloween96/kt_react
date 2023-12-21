import { useEffect, useState } from "react";
import Tailh1 from "../ui/Tailh1";
import TailCard from "../ui/TailCard";
import TailSelect from "../ui/TailSelect";
export default function Festval() {

    const [tdata, setTdata] = useState([]);

    const [tags, setTags] = useState([]);

    const [gugun, setgugun] = useState([]);

    const [seldata, setseldata] = useState([]);

    const getData = async () => {
        let apikey = process.env.REACT_APP_APIKEY;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
        url = `${url}serviceKey=${apikey}`
        url = `${url}&pageNo=1`
        url = `${url}&numOfRows=40`
        url = `${url}&resultType=json`

        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data)
        setTdata(data.getFestivalKr.item)
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        let tm = tdata.filter(item => item.GUGUN_NM === e.target.value);
        setseldata(tm);
        console.log(tm)
    }
    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        let tm = tdata.map((item) => item.GUGUN_NM);
        tm = [... new Set(tm)].sort();
        setgugun(tm);
    }, [tdata]);
    useEffect(() => {
        let tm = seldata.map((item, idx) => 
        <TailCard imgSrc={item.MAIN_IMG_NORMAL}
        key={`card${idx}`}
        title={item.TITLE}
        subtitle={item.SUBTITLE}
        tags={item.USAGE_DAY_WEEK_AND_TIME} />
        )
        setTags(tm);
        console.log(tm)
    }, [seldata])
    return (
        <div className="container mx-auto h-screen">
            <div className="flex flex-col items-center w-full my-8">
                <div className="shadow-md ps-10 pe-10 p-2 rounded-lg border-2 border-sky-400">
                    <Tailh1 title={"부산축제정보"} />
                </div>
                <form className="shadow-md mt-4 w-1/3 flex justify-around">
                  <TailSelect opItem={gugun} handleChange={handleChange} />  
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-c3 gap-4 w-4/5">
                    {tags}
                </div>
            </div>

        </div>
    )
}
