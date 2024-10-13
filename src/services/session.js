import { useAlertStore } from '@/store/alert.js';
import { useSessionStore } from '@/store/session.js';
import { GlobalVars } from '@/globalVars.js';

const alertStore = useAlertStore();
const sessionStore = useSessionStore();

const login = async ({username, password}) => {
    try {
        const response = await fetch(`${GlobalVars.API_URL}login?user=${username}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        const data = await response?.json(); 
        if (!response.ok  || !data.success) {
            const message = data?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }
        
        console.log('Respuesta del servidor:', data);
        if(data.data) sessionStore.save(data.data);
        localStorage.setItem("v_userId", `${data.data.id_usuario}`);
    } catch (error) {
        console.log(error);
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

const register = async ({username, password, city}) => {
    try {
        const response = await fetch(`${GlobalVars.API_URL}signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario: username, password, ciudad: city})
        });

        const data = await response?.json(); 
        if (!response.ok  || !data.success) {
            const message = data?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }

        console.log('Respuesta del servidor:', data);
        sessionStore.save({ ...data.data, usuario: username, password, ciudad: city});
    } catch (error) {
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

const update = async ({name, name2, lastname, lastname2, sex, username, city}) => {
    try {
        const saveData = {
            "id_usuario": sessionStore.state.idUser,
            "nombre": name,
            "segundo_nombre": name2,
            "ciudad": city,
            "apellido_p":lastname,
            "apellido_m":lastname2,
            "usuario":username,
            "password":sessionStore.state.password,
            "sexo_genero":sex
        }
        const response = await fetch(`${GlobalVars.API_URL}updateUsuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(saveData)
        });

        const data = await response?.json(); 
        if (!response.ok  || !data.success) {
            const message = data?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }
        
        console.log('Respuesta del servidor:', data);
        sessionStore.save(saveData);
        alertStore.showAlert('Tu información se actualizó correctamente.', '¡Genial!', 'default');
    } catch (error) {
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}

const getUser = async (userId) => {
    console.log('getUser', userId);
    if(!userId) return;
    try {
        const response = await fetch(`${GlobalVars.API_URL}getUsuarioById?id_usuario=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        const data = await response?.json(); 
        if (!response.ok  || !data.success) {
            const message = data?.message || 'Hubo un error con el servidor, intenta más tarde.'
            alertStore.showAlert(message, 'Error', 'destructive');
            throw new Error('Error al enviar los datos');
        }
        
        console.log('Respuesta del servidor:', data);
        if(data.data) sessionStore.save({...data.data[0], id_usuario: userId});
        localStorage.setItem("v_userId", `${userId}`);
    } catch (error) {
        console.log(error);
        const message = error?.message || 'Hubo un error con el servidor, intenta más tarde.'
        alertStore.showAlert(message, 'Error', 'destructive');
        throw new Error('Error al enviar los datos');
    }
}


export const SessionService = {
    login,
    register,
    update,
    getUser
}