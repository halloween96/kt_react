import Logoimg from "../01/Logoimg";
import { useState } from "react";
function Clockmain(){
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
    setInterval(()=>{
        setCtime(new Date().toLocaleTimeString());
    }, 1000);
    //let ctime = new Date().toLocaleTimeString();
    return(
        <main className="App-header">
            <Logoimg />
            <div>현재시간 :{ctime}</div>
        </main>
    );
}
export default Clockmain;