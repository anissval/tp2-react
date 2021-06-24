import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateHero} from "../../actions";
import {useParams, useHistory} from "react-router-dom";

export const HeroDetails = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const heroList = useSelector(state => state.heroesList);
    const heroFilter = heroList.filter((hero) => hero.id == id);
    const hero = heroFilter[0];
    const [newHeroName, setNewHeroName] = useState(hero.name);

    const onHandleChange = (e) => {
        e.preventDefault();
        setNewHeroName(e.target.value);
    }
    const onSave = (e) => {
        setNewHeroName(e.target[0].value)
        e.preventDefault();
        dispatch(updateHero(hero.id, newHeroName));
        history.push('/');
    }

    return (
        <>
            <h2> {hero.name} Details</h2>
            <form onSubmit={onSave}>
                <div><span>id: </span>{hero.id}</div>
                <div>
                    <label>Hero name: </label>
                    <input type={'text'} value={newHeroName} onChange={onHandleChange} data-testid={`update-input-${hero.id}`}/>
                </div>
                <button type={'button'} onClick={() => {
                    history.goBack()
                }}>go back
                </button>
                <button type={"submit"}>save</button>
            </form>
        </>
    )
}
