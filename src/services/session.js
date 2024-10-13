import { useAlertStore } from '@/store/alert.js';
import { GlobalVars } from '@/globalVars.js';

const alertStore = useAlertStore();

const login = async ({username, password}) => {
    try {
        const response = await fetch(`${GlobalVars.API_URL}login?user=${username}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            const message = response?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }

        // emit('loginSuccess', data);
        const data = await response.json(); // Parsear la respuesta JSON
        console.log('Respuesta del servidor:', data);
    } catch (error) {
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

const register = async ({username, password, city}) => {
    username =  'jc_perez';
    password = 'password123';
    try {
        const response = await fetch(`${GlobalVars.API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario: username, password})
        });

        if (!response.ok) {
            const message = response?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }

        // emit('loginSuccess', data);
        const data = await response.json(); // Parsear la respuesta JSON
        console.log('Respuesta del servidor:', data);
    } catch (error) {
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

export const SessionService = {
    login,
    register
}