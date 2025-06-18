import { PKMN_TYPES } from "../../config/constantes"

export const getTypeColor = (type) => {
    const found = PKMN_TYPES.find(t => t.name === type.toLowerCase());
    return found ? found.backgroundColor : '#000';
}