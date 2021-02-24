import FristScreenStyle from "./FirstScreenStyle.module.sass"
import background from "../../img/Background.png"
import arrowImg from "../../img/arrow.png"

export const FirstScreenComponent = () => {
    const styleBackGround = {
        backgroundImage: 'url(' + background + ')',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
    return <div className={FristScreenStyle.screen} style={styleBackGround}>
        <div className={FristScreenStyle.arrow_img}>
            <p>scroll down to see more</p>
            <img className={FristScreenStyle.arrow} src={arrowImg} alt="arrow"/>
        </div>
    </div>
}