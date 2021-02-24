import HeadeStyle from "./HeaderStyle.module.sass"
import {MenuComponent} from "../Menu/MenuComponent";
export const HeaderComponent = () => {
    return <div className={HeadeStyle.menu}>
        <MenuComponent />
    </div>
}