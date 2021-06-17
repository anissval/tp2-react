import {
    BrowserRouter, Link,
    Route
} from "react-router-dom";
import {Dashboard} from "./dashboard/Dashboard";
import {Heroes} from "./heroes/Heroes";
import {HeroDetails} from "./heroes/HeroDetails";

export const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <h1>Tour of Heroes</h1>
                <ul className="header">
                    <li><Link to="/dashboard/Dashboard">Dashboard</Link></li>
                    <li><Link to="/heroes/Heroes">Heroes</Link></li>
                </ul>
                <div className="content">
                    <div className="content">
                        <switch>
                            <Route exact path="/" component={Dashboard}></Route>
                            <Route exact path="/dashboard/Dashboard" component={Dashboard}></Route>
                            <Route path="/heroes/Heroes" component={Heroes}></Route>
                            <Route path="/heroes/HeroDetails/:id" component={HeroDetails}></Route>
                        </switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

