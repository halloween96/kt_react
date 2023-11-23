import Logoimg from "./Logoimg";
import Logop from "./Logop";
import Logoa from "./Logoa";
function Logoheader(){
    return(
        <header className="App-header">
        <Logoimg />
        <Logop msg ={"부산대학교"}/>
        <Logop msg ={"k-digital 5기"}/>
        <Logop msg ={"문형호"}/>
        <Logoa />
      </header>
    );
}
export default Logoheader;