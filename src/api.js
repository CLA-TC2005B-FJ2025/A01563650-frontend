const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev'; // Asegúrate de tener REACT_APP_API_BASE_URL en tu .env

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la solicitud');
    }
    return response.json();
};

export const getAllPersonajes = async () => {
    const response = await fetch('https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev/personajes');
    return handleResponse(response);
};

export const getPersonajeById = async (id) => {
    const response = await fetch(`https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev/personajes/${id}`);
    return handleResponse(response);
};

export const createPersonaje = async (personaje) => {
    const response = await fetch('https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev/personajes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personaje),
    });
    return handleResponse(response);
};

export const updatePersonaje = async (id, personaje) => {
    const response = await fetch(`https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev/personajes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personaje),
    });
    return handleResponse(response);
};

export const deletePersonaje = async (id) => {
    const response = await fetch(`https://organic-fortnight-pjjwj9r9r97w369r7-5000.app.github.dev/personajes/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al eliminar el personaje');
    }
    return { message: 'Personaje eliminado exitosamente' };
};
