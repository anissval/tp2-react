import {ADD_HERO, REMOVE_HERO} from './actions'

// Reducer
export const heroesListManager = (state, action) => {
    if (state === undefined) {
        return {  heroesList:  [
                { id: 11, name: 'Dr Nice'},
                { id: 12, name: 'Narco'},
                { id: 13, name: 'Bombasto'},
                { id: 14, name: 'Celeritas'},
                { id: 15, name: 'Magneta' }
            ]};
    }

    let heroesList = state.heroesList;

    switch (action.type) {
        case ADD_HERO:
            heroesList.push({id : heroesList.length+1,name : action.value});
            return {heroesList: state.heroesList}
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
