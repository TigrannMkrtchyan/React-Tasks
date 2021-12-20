import "./ProgresBar.css"

const ProgresBar = ({ width, text }) => {
  

  return (
    <div>
      <p>{text}</p>
      <br></br>
      <div className="progressbar">
        <div style={{ width: width + "%" }}><p style={{ color: "white" }}>{width}%</p> </div>
      </div>

    </div>
  )
}

export default ProgresBar
