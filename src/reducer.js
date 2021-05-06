// Reducer
function heroesListManager(state, action) {
    if (state === undefined) {
        return {  heroesList:  [
                { id: 11, name: 'Dr Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' },
                { id: 20, name: 'defEnReducer' }
            ]};
    }

    var heroesList = state.heroesList;

    switch (action.type) {
        case "add":
            heroesList.push({id : 33,name : 'matteo'});
            return {heroesList: state.heroesList}
        case "remove":
            heroesList.pop(heroesList.id)
            return {heroesList: state.heroesList};
        default:
            return state;
    }
}

export default heroesListManager;
