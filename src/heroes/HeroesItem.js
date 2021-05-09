import "./Heroes.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {removeHero} from "../actions";

export const HeroesItem = (props) => {
    const [idHero, setHeroId] = useState("")
    const heroList = useSelector(state => state.heroesList);
    const dispatch = useDispatch();
    const deleteHero = (id) => {
        props.delete(id);
    }
    const listItems = heroList.map((hero) => (
        <div>
            <li key={hero.id}>
                <a>
                    <span className="badge">{hero.id}</span> {hero.name}
                </a>
                <button className="delete" title="delete hero" onClick={() => dispatch(removeHero(hero.id))}>x</button>
            </li>
        </div>
    ));
    return (
        <ul class="heroes">
            {listItems}
        </ul>
    );
}
