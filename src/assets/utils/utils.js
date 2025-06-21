import { PKMN_TYPES } from "../../config/constantes"

export const getTypeColor = (type) => {
    const found = PKMN_TYPES.find(t => t.name === type.toLowerCase());
    return found ? found.backgroundColor : '#000';
}

export const getBarColor = (value) => {
    if (value < 33) {
        return '#ff4230';
    } else if (value < 66) {
        return '#ffd054';
    } else {
        return '#71c993';
    }
}