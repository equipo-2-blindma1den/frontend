<script setup lang="js">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Alert from '@/components/shared/alert.vue';
import { ref } from 'vue';
import { SessionService } from '@/services/session';
import { Loader2 } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

let isRegister = ref(false);
let isLoading = ref(false);
const router = useRouter();
const formSchema = toTypedSchema(z.object({
    username: z.string({required_error: "Campo obligatorio"})
        .email({ message: 'Ingresa un correo válido' }),
    password: z.string({required_error: "Campo obligatorio"})
        .min(8, {message: 'Min. 8 caracteres'}),
}))
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true; // Mostrar el spinner
    try {
        if(isRegister.value) await SessionService.register(values);
        else await SessionService.login(values);
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
    } finally {
        router.push('/app');
        isLoading.value = false; // Ocultar el spinner
    }
    // SessionService.login(values);
});

const toggleRegister = () => {
    isRegister.value = !isRegister.value;
    resetForm();
};

</script>

<template>
  <section class="background z-10">
    <div class="header">
        <h1 class="text-4xl font-black"> Voluntariados </h1>
        <h3 class="text-sm text-center"> Tu tiempo, tu impacto. Haz el bien, elige dónde: conecta y transforma.</h3>
    </div>
    <Form ref="formRef">
        <FormField name="username" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="text" :disabled="isLoading"/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
        <FormField name="password" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="password" :disabled="isLoading"/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
        <FormField name="city" v-if="isRegister" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="text" :disabled="isLoading"/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
    </Form>
    
    <div class="actions">
        <Button class="btn--primary" @click="onSubmit" :disabled="isLoading">
            <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            {{ isRegister ? 'Registrarme' : 'Ingresar' }}
        </Button>
        <Button variant="link" class="btn--secondary" @click="toggleRegister" :disabled="isLoading"> 
            {{ isRegister ? '¿Ya tienes cuenta? Ingresa' : '¿Aún no tienes cuenta? Regístrate.' }}
        </Button>
    </div>
  </section>
  
  <Alert/>
  
</template>


<style>

    .background, .header, .actions, Form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .background{
        background-image: url('@/assets/welcome.jpg');
        height: 100vh;
        background-position: bottom;
        position: relative;
        color: #F0EFE6;
        padding-inline: 2rem;
        padding-top: 7rem;
        gap: 2rem;
    }
    
    .background::after{
        content: '';
        position: absolute;
        top: 0;
        backdrop-filter: blur(2px);
        background: linear-gradient(to bottom, #000000ab 0, rgb(0 0 0) 80%, rgb(0 0 0) 100%);
        height: 100%;
        left: 0;
        width: 100%;
        z-index: -1;
    }
    
    h1{
        color: #977b4b;
    }
    
    h3{
        margin: 0 !important; 
    }
    
    Form{
        width: 90%;
        max-width: 25rem;
        gap: 1rem;
        align-items: stretch;
    }
    
    .btn--primary, .btn--primary:hover{
        background: #026060;
        color: #F0EFE6;
        
    }
    
    .btn--secondary{
        color: #F0EFE6;
    }
    
    .actions{
        gap: 1rem;
    }
</style>
