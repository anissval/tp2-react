import "../heroes/Heroes.css"
import {useDispatch, useSelector} from "react-redux";
import {removeHero} from "../../actions";
import {Link} from "react-router-dom";

export const HeroesItem = (props) => {
    const heroList = useSelector(state => state.heroesList);
    const dispatch = useDispatch();

    const listItems = heroList.map((hero) => (
        <li key={`heroItem-${hero.id}`}>
            <Link to={{
                pathname: `/heroDetails/${hero.id}`
            }}>< span className="badge">{hero.id}</span> {hero.name}</Link>
            <button className="delete" title="delete hero" onClick={() => dispatch(removeHero(hero.id))} data-testid={`delete-button-${hero.id}`}>x</button>
        </li>
    ));
    return (
        <ul className="heroes">
            {listItems}
        </ul>
    );
}
