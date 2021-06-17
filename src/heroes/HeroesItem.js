import "./Heroes.css"
import {useDispatch, useSelector} from "react-redux";
import {removeHero} from "../actions";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const HeroesItem = (props) => {
    const heroList = useSelector(state => state.heroesList);
    const dispatch = useDispatch();

    const deleteHero = (id) => {
        props.delete(id);
    }
    const listItems = heroList.map((hero) => (
        <li key={hero.id}>
            <Link to={{
                pathname: `/heroes/HeroDetails/${hero.id}`
            }}>< span className="badge">{hero.id}</span> {hero.name}</Link>
            <button className="delete" title="delete hero" onClick={() => dispatch(removeHero(hero.id))}>x</button>
        </li>
    ));
    return (
        <ul className="heroes">
            {listItems}
        </ul>
    );
}
