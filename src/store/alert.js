import { reactive, readonly } from 'vue';

const state = reactive({
    message: '',
    title: '',
    isVisible: false,
    variant: 'default',
});

const showAlert = (message, title, variant = 'default') => {
    state.message = message;
    state.title = title;
    state.isVisible = true;
    state.variant = variant;
    
    console.log('llega aqui?');

    setTimeout(() => {
        state.isVisible = false;
        state.message = '';
    }, 5000);
};

export const useAlertStore = () => {
    return {
        state: readonly(state),
        showAlert,
    };
};