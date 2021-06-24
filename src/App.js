import {
    BrowserRouter, Link,
    Route, Switch
} from "react-router-dom";
import {Dashboard} from "./components/dashboard/Dashboard";
import {Heroes} from "./components/heroes/Heroes";
import {HeroDetails} from "./components/HeroDetails/HeroDetails";

export const App = (props) => {
    return (
        <BrowserRouter>

            <div>
                <h1>Tour of Heroes</h1>
                <ul className="header">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/heroes">Heroes</Link></li>
                </ul>
                <div className="content">
                    <Switch>
                        <Route exact path="/"><Dashboard/></Route>
                        <Route exact path="/dashboard"><Dashboard/></Route>
                        <Route path="/heroes"><Heroes/></Route>
                        <Route path="/heroDetails/:id"><HeroDetails/></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

