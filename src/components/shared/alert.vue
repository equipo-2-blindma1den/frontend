<script setup lang="js">
    import { onMounted } from 'vue';
    import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
    import { ref } from 'vue';
    import { computed } from 'vue';
    import { useAlertStore } from '@/store/alert';

    const { state } = useAlertStore();
    const isVisible = computed(() => state.isVisible);
    const message = computed(() => state.message);
    const variant = computed(() => state.variant);
    const title = computed(() => state.title);

</script>

<template>
    <Alert 
        v-if="isVisible" 
        class="alert absolute bottom-8 z-20 w-9/12 max-w-[25rem] mx-auto left-1/2 transform -translate-x-1/2"
       :variant="variant"
    >
    <AlertTitle>{{title}}</AlertTitle>
    <AlertDescription>{{message}}</AlertDescription>
    </Alert>
</template>

<style>


    .alert{
        position: fixed;
    }

    h5{
        margin: 0 !important;
    }
</style>