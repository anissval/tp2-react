import {useSelector} from "react-redux";
import "./Dashboard.css";

export const Dashboard = (props) => {
    const heroListItems = useSelector(state => state.heroesList);
    const listItems = heroListItems.map((hero) =>
        <div>
            <a>
              {hero.name}
            </a>
        </div>
    );

    return (
        <div>
            <h2>Top Heroes</h2>
            <div>
                {listItems}
            </div>
        </div>
    );
}
