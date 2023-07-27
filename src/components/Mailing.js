const Mailing = () => {
  return (
    <div className="mail">
      <p className="list">MAILING LIST</p>
      <input type="text" placeholder="EMAIL ADDRESS" />
      <div>
        <input type="radio" name="Subscribe" />
        <label htmlFor="">Subscribe</label>
      </div>
    </div>
  )
}
export default Mailing
