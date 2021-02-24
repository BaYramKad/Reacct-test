import AboutMeStyle from "./AboutMeStyle.module.sass"
import Jason from "../../img/JasonWood.png"
import FristScreenStyle from "../FirsScreen/FirstScreenStyle.module.sass";
import arrowBlack from "../../img/arrow-black.png";

const AboutMeContainer = () => {

    return <div>
        <div className={AboutMeStyle.menu_about_me}>
            <ul>
                <li>home</li>
                <li>about me</li>
                <li>portfolio</li>
                <li>contact</li>
            </ul>
        </div>
        <div className={AboutMeStyle.info}>
            <div>
                <img className={AboutMeStyle.img_me} src={Jason} alt="Jason"/>
            </div>
            <div className={AboutMeStyle.info_about_me}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                    <br/>
                    <br/>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.</p>
                    <br/>
                    <p className={AboutMeStyle.info_my_name}>Jason Wood</p>
                </p>
            </div>
        </div>
        <div className={AboutMeStyle.arrow_img}>
            <p>keep scrolling, there is still more to come.</p>
            <img className={FristScreenStyle.arrow} src={arrowBlack} alt="arrow"/>
        </div>
    </div>
}

export default AboutMeContainer