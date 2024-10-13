<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';

let isRegister = ref(false);
const formSchema = toTypedSchema(z.object({
    username: z.string({required_error: "Campo obligatorio"})
        .email({ message: 'Ingresa un correo válido' }),
    password: z.string({required_error: "Campo obligatorio"})
        .min(8, {message: 'Min. 8 caracteres'}),
}))
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    console.log(values)
})

const toggleRegister = () => {
    isRegister.value = !isRegister.value;
    resetForm();
};

</script>

<template>
  <section class="background z-10">
    <div class="header">
        <h1 class="text-4xl font-extrabold"> Voluntariados </h1>
        <h3 class="text-sm text-center"> Tu tiempo, tu impacto. Haz el bien, elige dónde: conecta y transforma.</h3>
    </div>
    <Form ref="formRef">
        <FormField name="username" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="text" />
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
        <FormField name="password" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="password" />
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
        <FormField name="city" v-if="isRegister" v-slot="{ componentField }">
            <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                    <Input v-bind="componentField" type="text" />
                </FormControl>
                <FormMessage/>
            </FormItem>
        </FormField>
    </Form>
    
    <div class="actions">
        <Button class="btn--primary" @click="onSubmit">
            {{ isRegister ? 'Registrarme' : 'Ingresar' }}
        </Button>
        <Button variant="link" class="btn--secondary" @click="toggleRegister"> 
            {{ isRegister ? '¿Ya tienes cuenta? Ingresa' : '¿Aún no tienes cuenta? Regístrate.' }}
        </Button>
    </div>
  </section>
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
        background: linear-gradient(to bottom, #0000008f, #000000);
        height: 100%;
        left: 0;
        width: 100%;
        z-index: -1;
    }
    
    h1{
        color: #c1b8b1;
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
        background: #977b4b;
        color: #F0EFE6;
        
    }
    
    .btn--secondary{
        color: #F0EFE6;
    }
    
    .actions{
        gap: 1rem;
    }
</style>
