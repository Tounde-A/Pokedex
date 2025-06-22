const baseUrl = import.meta.env.VITE_API_BASE_URL;
const reviewUrl = import.meta.env.VITE_API_REVIEW_URL;
export const pkmnImg = import.meta.env.VITE_API_PKMN_IMG;
export const svg = '.svg';

export async function viewAllPkmn() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function viewSinglePkmn(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function updateSinglePkmn(id, updateData) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function viewSingleReview(id) {
    try {
        const response = await fetch(`${reviewUrl}/?pokemonId=${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function addReviews(postData) {
    try {
        const response = await fetch(`${reviewUrl}/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}