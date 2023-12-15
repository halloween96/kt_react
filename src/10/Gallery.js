import { MdOutlineTour } from "react-icons/md";
import { MdTour } from "react-icons/md";
import Tailh1 from "../ui/Tailh1"
import TailButton from "../ui/Tailbutton"
import { useEffect, useState, useRef } from "react";
import TailCard from "../ui/TailCard";
export default function Gallery() {
    let apikey = process.env.REACT_APP_APIKEY;
    //fetch 데이터 저장
    const [tdata, setTdata] = useState();
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
    }, [tdata])
    return (
        <div className='container mx-auto h-screen'>
            <div className='flex flex-col justify-top items-center w-full h-full my-8'>
                <div className="inline-flex items-center justify-between w-2/5 shadow-md ps-10 pe-10 p-2">
                    <MdOutlineTour className="text-4xl" />
                    <Tailh1 title={"한국 관광공사 사진 정보"} />
                    <MdTour className="text-4xl" />
                </div>
                <form className="shadow-md mt-4 w-1/2 flex justify-around">
                    <input type="text" ref={kwInput} className="w-3/5 h-8 ps-3 m-3 border-b-2 border-sky-400 outline-none" placeholder="검색어" required></input>
                    <div>
                        <TailButton caption='검색' bcolor='sky' handleClick={(e) => handleGetData(e)} />
                        <TailButton caption='취소' bcolor='sky' handleClick={(e) => handleResetData(e)} />
                    </div>
                </form>
                <div>
                    <TailCard
                        imgSrc={"https://tong.visitkorea.or.kr/cms2/website/61/2952361.jpg"}
                        title={"광안리해수욕장"}
                        subtitle={"부산광역시 수영구 광안동"}
                        tags={"광안리해수욕장, 부산광역시 수영구, 광안리해변, 바닷가, 바다, 부산 광안대교, 다이아몬드 브릿지, 별바다부산, 부산야간관광"} />
                </div>
            </div>
        </div>
    )
}
