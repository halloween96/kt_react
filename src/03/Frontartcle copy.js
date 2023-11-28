function Frontartcle({title, href, msg}) {
  return (
    <article>
      <div id="divhtml">
        <h2>{title}</h2>
        <div>
          <img src={href} alt={title} />
        </div>
        <p>
          {msg}</p>
      </div>
    </article>
  )
}
export default Frontartcle;