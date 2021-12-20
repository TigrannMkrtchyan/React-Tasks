import "./Charge.css"

const Charge = ({ header, storage, support, amount, color }) => {

    return (
        <div className="chargeDiv">
            <div className="chargeDivComponentsTop" style={{ backgroundColor: color }} >{header}</div>
            <div className="chargeDivComponents">Web Design</div>
            <div className="chargeDivComponents">Photograpy</div>
            <div className="chargeDivComponents">{storage} Storage</div>
            <div className="chargeDivComponents">{support}Support</div>
            <div className="chargeDivComponents"><p>{amount}Dollar</p><p>per month</p></div>
            <div className="chargeDivComponentsbottom"><button className="chargeDivComponentsTopbutton"> Sign up </button></div>
        </div>
    )
}

export default Charge
