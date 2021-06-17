import {ADD_HERO, REMOVE_HERO, UPDATE_HERO} from './actions'

// Reducer
export const heroesListManager = (state, action) => {
    if (state === undefined) {
        return {
            heroesList: [
                {id: 11, name: 'Dr Nice'},
                {id: 12, name: 'Narco'},
                {id: 13, name: 'Bombasto'},
                {id: 14, name: 'Celeritas'},
                {id: 15, name: 'Magneta'}
            ]
        };
    }

    let heroesList = state.heroesList;
    let newId = 15;
    switch (action.type) {
        case ADD_HERO:
            newId = newId + 1;
            const heroToAdd = {id: newId, name: action.value};
            const newHeroList= [...heroesList, heroToAdd];
            return {
                ...state,
                heroesList: newHeroList
            }
        case UPDATE_HERO:
            const heroDeletedFromList = state.heroesList.filter(hero => hero.id !== action.id);
            const heroId = action.id;
            const heroNewName = action.newName;
            const hero = {id: heroId, name: heroNewName};
            const heroListUpdated = [...heroDeletedFromList, hero];
            return {
                ...state,
                heroesList: heroListUpdated
            }
        case REMOVE_HERO:
            const filteredHeroList = state.heroesList.filter(hero => hero.id !== action.value);
            return {
                ...state,
                heroesList: filteredHeroList
            }
        default:
            return state;
    }
}
