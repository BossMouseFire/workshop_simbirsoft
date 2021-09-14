import React from "react"
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage/mainPage";

const App:React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Redirect to={"/"}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;