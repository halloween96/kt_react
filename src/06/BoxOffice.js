import React, { useEffect, useState } from 'react'
import Tailh1 from '../ui/Tailh1';
import { RiMovie2Line } from "react-icons/ri";
export default function BoxOffice() {
  const [trs, setTrs] = useState();
  const [boxlist, setBoslist] = useState([]);

  useEffect(() => {
    //환경변수값 가져오기
    let apikey = process.env.REACT_APP_BOXOFFICE;
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    url = url + `key=${apikey}`
    url = url + `&targetDt=20231129`;


    fetch(url)
      .then(resp => resp.json())
      .then(data => setBoslist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }, []);
  //boxlist 변경시 실행
  useEffect(() => {
    (boxlist === undefined)
      ? setTrs(<tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>)
      : setTrs(boxlist.map((item) =>
        <tr key={item.movieCd} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="px-6 py-4">
            <span className='inline-flex justify-center items-center w-5 h-5 bg-slate-500 text-white rounded-md'>{item.rank}</span> {item.movieNm}
          </td>
          <td className="px-6 py-4 text-right">
            {parseInt(item.salesAcc).toLocaleString('ko-KR')}원
          </td>
          <td className="px-6 py-4 text-right">
            {parseInt(item.audiCnt).toLocaleString('ko-KR')}명
          </td>
          <td className="px-6 py-4">
            {
              (parseInt(item.rankInten) > 0)
                ? <span className='text-red-600'>▲{item.rankInten}</span>
                : (parseInt(item.rankInten) < 0)
                  ? <span className='text-sky-600'>▼{Math.abs(item.rankInten)}</span>
                  : "-"
            }
          </td>
        </tr>
      ))
  }, [boxlist]);
  return (
    <div className='container mx-auto h-screen'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex m-8'>
          <RiMovie2Line className='text-5xl text-cyan-400' />
          <Tailh1 title="박스오피스" />
        </div>
        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  영화명
                </th>
                <th scope="col" className="px-6 py-3">
                  매출액
                </th>
                <th scope="col" className="px-6 py-3">
                  관객수
                </th>
                <th scope="col" className="px-6 py-3">
                  증감율
                </th>
              </tr>
            </thead>
            <tbody>
              {trs}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
