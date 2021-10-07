import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import MainPage from "./components/MainPage/mainPage";
import OrderPage from "./components/OrderPage/orderPage";

const App:React.FC = () => {
    return(
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Route path={"/order"} component={OrderPage}/>
                <Redirect to={"/"}/>
            </Switch>
    )
}
export default App;