import Frontartcle from "./Frontartcle";
function Frontend() {
    return (
        <>
            <Frontartcle 
            title="HTML" 
            href="./images/html.png" 
            msg="HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용" />
            <Frontartcle 
            title="CSS" 
            href="./images/css.png" 
            msg="Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어" />
            <Frontartcle 
            title="JS" 
            href="./images/js.png" 
            msg="웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원" />
            <Frontartcle 
            title="React" 
            href="./images/react.png"
            msg="사용자 인터페이스를 만들기 위한 JavaScript 라이브러리" />
        </>
    );
}
export default Frontend;