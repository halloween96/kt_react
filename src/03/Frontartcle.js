import style from "./Frontend.module.css";
function Frontartcle(probs) {
  return (
    <article className={style.divArtcle}>
      <div id="divhtml">
        <h2>{probs.title}</h2>
        <div className={style.divimg}>
          <img src={probs.href} alt={probs.title} />
        </div>
        <p>
          {probs.msg}</p>
      </div>
    </article>
  )
}
export default Frontartcle;