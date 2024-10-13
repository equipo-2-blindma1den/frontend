import { useAlertStore } from '@/store/alert.js';

const alertStore = useAlertStore();

const getAllEvents = async () => {
    try {
        const response = await fetch('http://192.81.214.249:3000/api/getAllEventos', {
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
        return data
    } catch (error) {
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

export const EventsService = {
    getAllEvents
}