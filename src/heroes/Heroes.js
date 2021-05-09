import React, {useState} from "react";
import "./Heroes.css";
import {useDispatch} from "react-redux";
import {HeroesItem} from "./HeroesItem";
import {addHero} from "../actions";

export const Heroes = (props) => {

    const dispatch = useDispatch();
    const  [heroName, setHeroName] = useState("");

    function handleOnChange(e) {
        e.preventDefault();
        setHeroName(e.target.value);
    }

    function onSubmitForm () {
        dispatch(addHero(heroName));
        setHeroName("")
    }
        return (
            <div className="todoListMain">
                <div className="header">
                    <label id="new-hero">Hero name: </label>
                    <form onSubmit={onSubmitForm}>
                        <input placeholder="enter hero" value={heroName} onChange={handleOnChange}>
                        </input>
                        <button className="add-button" type={"submit"}>add</button>
                    </form>
                </div>
                <HeroesItem/>
            </div>
        );
}
