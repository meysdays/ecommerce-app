const Mailing = () => {
  return (
    <div className="mail">
      <p className="list">MAILING LIST</p>
      <input
        type="text"
        placeholder="EMAIL ADDRESS"
        style={{ width: '400px', height: '30px', marginTop: '11px' }}
      />
      <div className="cen">
        <input type="radio" name="Subscribe" />
        <label htmlFor="">Subscribe</label>
        <input type="radio" name="Subscribe" />
        <label htmlFor="">Unsubscribe</label>
      </div>
    </div>
  )
}
export default Mailing
