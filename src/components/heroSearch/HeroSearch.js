import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


export const HeroSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const heroListItems = useSelector(state => state.heroesList);
    const [heroes, setHeroes] = useState(heroListItems);
    const [heroesForSearch] = useState(heroListItems);

    const heroesFilter = (hero, query) => {
        return (hero.name && hero.name.toLowerCase().startsWith(query.toLowerCase()));
    };

    const filterHeroes = (query) => {
        if (query) {
            const possibleHero = heroesForSearch.filter((hero) => heroesFilter(hero, query));
            setHeroes(possibleHero);
        } else {
            setHeroes(heroes);
        }
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        if (inputValue) filterHeroes(inputValue);
    };

    return (
        <>
            <label htmlFor="search">
                Hero Search:
                <input
                    id="search"
                    name="search"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Hero name"
                />
            </label>
            <ul>
                {
                    heroes.map((hero) => (
                        <li key={`heroSearch-${hero.id}`}>
                            <Link to={`/hero-detail/${hero.id}`}>{hero.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
