const baseUrl = import.meta.env.VITE_API_BASE_URL;
const reviewUrl = import.meta.env.VITE_API_REVIEW_URL;
export const pkmnImg = import.meta.env.VITE_API_PKMN_IMG;
export const svg = '.svg';

export async function viewAllPkmn() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        error.message;
        return [];
    }
}

export async function viewSinglePkmn(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        error.message;
        return [];
    }
}

export async function updateSinglePkmn(id, pokemon) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(pokemon)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        error.message;
        return [];
    }
}

export async function viewSingleReview(id) {
    try {
        const response = await fetch(`${reviewUrl}/?pokemonId=${id}`);
        const data = response.json();
        return data;
    } catch (error) {
        error.message;
        return [];
    }
}

export async function addReviews(pokemon) {
    try {
        const response = await fetch(`${reviewUrl}/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(pokemon)
        });
        const data = response.json();
        return data;
    } catch (error) {
        error.message;
        return [];
    }
}