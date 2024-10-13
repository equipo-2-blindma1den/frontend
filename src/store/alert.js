import { reactive, readonly } from 'vue';

const state = reactive({
    message: '',
    title: '',
    isVisible: false,
    variant: 'default',
});

const showAlert = (message, title, variant = 'default') => {
    if (state.isVisible) return; 
    state.message = message;
    state.title = title;
    state.isVisible = true;
    state.variant = variant;
    setTimeout(() => {
        state.isVisible = false;
        state.title = '';
        state.message = '';
    }, 5000);
};

export const useAlertStore = () => {
    return {
        state: readonly(state),
        showAlert,
    };
};