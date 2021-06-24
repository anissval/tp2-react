import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {HeroesItem} from "../HeroesItem/HeroesItem";
import {addHero} from "../../actions";
import {useHistory} from "react-router-dom";
import "./Heroes.css";

export const Heroes = (props) => {

    const dispatch = useDispatch();
    const  [heroName, setHeroName] = useState("");
    const history = useHistory();
    function handleOnChange(e) {
        e.preventDefault();
        setHeroName(e.target.value);
    }

    function onSubmitForm () {
        dispatch(addHero(heroName));
        setHeroName("")
        history.push('/');
    }
        return (
            <div className="todoListMain">
                <div className="header">
                    <label id="new-hero">Hero name: </label>
                    <form onSubmit={onSubmitForm}>
                        <input placeholder="enter hero" value={heroName} onChange={handleOnChange} data-testid="add-input">
                        </input>
                        <button className="add-button" type={"submit"} data-testid="add-button">add</button>
                    </form>
                </div>
                <HeroesItem/>
            </div>
        );
}
