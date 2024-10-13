import { reactive, readonly } from 'vue';

const state = reactive({
    name: '',
    name2: '',
    lastname: '',
    lastname2: '',
    sex: '',
    city: '',
    username: '',
    password: '',
    idUser: 0
});

const save = ({id_usuario, nombre, segundo_nombre, ciudad, apellido_p, apellid_m, usuario, password, sexo_genero}) => {
    console.log({id_usuario, nombre, segundo_nombre, ciudad, apellido_p, apellid_m, usuario, password, sexo_genero});
    state.name = nombre;
    state.idUser = id_usuario;
    state.name2 = segundo_nombre;
    state.lastname = apellido_p;
    state.lastname2 = apellid_m;
    state.sex = sexo_genero;
    state.city = ciudad;
    state.username = usuario;
    state.password = password;
    console.log(state);
};

export const useSessionStore = () => {
    return {
        state: readonly(state),
        save,
    };
};