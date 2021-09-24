import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import MainPage from "./components/MainPage/mainPage";

const App:React.FC = () => {
    return(
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Redirect to={"/"}/>
            </Switch>
    )
}
export default App;