export const ADD_HERO = 'ADD_HERO'
export const REMOVE_HERO = 'REMOVE_HERO'

export function addHero(value) {
    return {
        type: ADD_HERO,
        value // it will add key `value` with argument value.
    };
}

export function removeHero(value) {
    return {
        type: REMOVE_HERO,
        value // it will add key `value` with argument value.
    };
}
