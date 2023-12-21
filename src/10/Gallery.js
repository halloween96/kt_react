import { MdOutlineTour } from "react-icons/md";
import { MdTour } from "react-icons/md";
import Tailh1 from "../ui/Tailh1"
import TailButton from "../ui/Tailbutton"
import { useEffect, useState, useRef } from "react";
import TailCard from "../ui/TailCard";
export default function Gallery() {
    let apikey = process.env.REACT_APP_APIKEY;
    //fetch 데이터 저장
    const [tdata, setTdata] = useState([]);
    //화면에 재 랜더링
    const [tags, setTags] = useState([]); 
    //키워드 입력
    const kwInput = useRef();
    const handleGetData = async (e) => {
        e.preventDefault();


        //키워드 인코딩
        let enkw = encodeURI(kwInput.current.value);
        if (enkw === "") return;

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
        url = `${url}serviceKey=${apikey}`
        url = `${url}&numOfRows=10`
        url = `${url}&pageNo=1`
        url = `${url}&MobileOS=ETC`
        url = `${url}&MobileApp=AppTest`
        url = `${url}&arrange=A`
        url = `${url}&keyword=${enkw}`
        url = `${url}&_type=json`

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.response.body.items.item);
    }
    const handleResetData = (e) => {
        e.preventDefault();
        kwInput.current.value = '';
    }

    //tdata변경
    useEffect(() => {
        console.log("tdata=", tdata);
        let tm = tdata.map((item, idx) =>
                    <TailCard imgSrc={item.galWebImageUrl.replace('http', 'https')}
                    key={`card${idx}`}
                    title={item.galTitle}
                    subtitle={item.galPhotographyLocation}
                    tags={item.galSearchKeyword} />
        );
        setTags(tm);
        console.log(tm)
    }, [tdata])
    return (
        <div className='container mx-auto h-screen'>
            <div className='flex flex-col items-center w-full h-full my-8'>
                <div className="inline-flex items-center justify-between w-2/5 shadow-md ps-10 pe-10 p-2">
                    <MdOutlineTour className="text-4xl" />
                    <Tailh1 title={"한국 관광공사 사진 정보"} />
                    <MdTour className="text-4xl" />
                </div>
                <form className="shadow-md mt-4 w-1/2 flex justify-around">
                    <input type="text" ref={kwInput} className="w-3/5 h-8 ps-3 m-3 border-b-2 border-sky-400 outline-none" placeholder="검색어" required />
                    <div>
                        <TailButton caption='검색' bcolor='sky' handleClick={(e) => handleGetData(e)} />
                        <TailButton caption='취소' bcolor='sky' handleClick={(e) => handleResetData(e)} />
                    </div>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
                    {tags}
                </div>
            </div>
        </div>
    )
}
