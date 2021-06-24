import {useSelector} from "react-redux";
import "./Dashboard.css";
import {Link} from "react-router-dom";
import {HeroSearch} from "../heroSearch/HeroSearch";

export const Dashboard = (props) => {
    const heroListItems = useSelector(state => state.heroesList);
    const listItems = heroListItems.map((hero) =>
        <div  key={`heroDashboard-${hero.id}`}>
            <Link to={{
                pathname: `/heroDetails/${hero.id}`
            }
            }>{hero.name}</Link>
        </div>
    );

    return (
        <div>
            <h2>Top Heroes</h2>
            <div>
                {listItems}
            </div>
            <HeroSearch></HeroSearch>
        </div>
    );
}
