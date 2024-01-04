import Logomain from './01/Logomain';
import Clockmain from './02/Clockmain';
import Frontend from './03/Frontend';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
//import Frcst from './07/Frcst';
//import RefTest from './08/RefTest';
//import Traffic from './09/Traffic';
//import Gallery from './10/Gallery';
//import Festval from './TEST/Festval';
//import Rmain from './12/Rmain';
//import Frcst from './13/Frcst';
//import Ex01 from './90/Ex01';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import DivMain from './14/DivMain';
import DivrecoilMain from './15/DivrecoilMain';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col w- full max-w-screen-xl mx-auto h-screen bg-slate-50'>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">K-Digital 5기</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Logomain</Link>
              <Link to="/clock" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Clockmain</Link>
              <Link to="/front" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Frontend</Link>
              <Link to="/lotto" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Lotto</Link>
              <Link to="/box" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">BoxOffice</Link>
              <Link to="/dm" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Probs예제</Link>
              <Link to="/rm" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">recoil예제</Link>
            </div>
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">문형호</a>
            </div>
          </div>
        </nav>
        <main className='grow w-full overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Logomain />} />
            <Route path='/clock' element={<Clockmain />} />
            <Route path='/front' element={<Frontend />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/dm' element={<DivMain />} />
            <Route path='/rm' element={<DivrecoilMain />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
