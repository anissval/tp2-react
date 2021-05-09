import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import {Dashboard} from "./dashboard/Dashboard";
import {Heroes} from "./heroes/Heroes";

export const App = (props) => {
    return (
        <HashRouter>
            <div>
                <h1>Tour of Heroes</h1>
                <ul className="header">
                    <li><NavLink to="/dashboard/Dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/Heroes">Heroes</NavLink></li>
                </ul>
                <div className="content">
                    <div className="content">
                        <Route path="/dashboard/Dashboard" component={Dashboard}/>
                        <Route path="/dashboard/Heroes" component={Heroes}/>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

