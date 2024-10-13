<script setup lang="js">
    import {
        NavigationMenu,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
    } from "@/components/ui/navigation-menu";
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card"
    import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from "@/components/ui/select"
    import { ChevronLeft } from 'lucide-vue-next';
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
    import { useSessionStore } from '@/store/session.js';

    let isRegister = ref(false);
    let isLoading = ref(false);
    const router = useRouter();
    const formSchema = toTypedSchema(z.object({
        name: z.string().optional(),
        name2: z.string().optional(),
        lastname: z.string().optional(),
        lastname2: z.string().optional(),
        sex: z.string().optional(),
    }))


    const { handleSubmit, resetForm } = useForm({
        validationSchema: formSchema,
    })

    const onSubmit = handleSubmit(async (values) => {
        const currentUser = {...useSessionStore().state, ...values};
        await SessionService.update(values);
    });

</script>

<template>
  <section class="bg-[#026060] h-auto min-h-screen w-[100%]">
    <NavigationMenu class="navigation w-[100%] max-w-[100%] justify-start">
        <h1 class="m-0 w-[100%] text-center text-[2rem] text-[#f1f3e8] font-thin"> 
            Completa tu información
        </h1>
        <NavigationMenuList>
            <NavigationMenuItem class="text-[#f1f3e8]">
                <RouterLink  class="flex cursor-pointer" to="/app/home" >
                    <p class="text-[#f1f3e8]"> Omitir </p>
                </RouterLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    
    <Card class="card max-w-[49rem] mx-auto w-[90%] h-[80%] bg-[#fff] p-5 h-auto">
        <h4 class="text-[#977b4b]"> Los siguientes datos no son obligatorios, pero nos ayudarán a brindarte un mejor servicio. </h4>
        
        <Form ref="formRef" class="flex flex-wrap flex-row gap-4 min-w-full">
            <FormField name="name" v-slot="{ componentField }">
                <FormItem class="formField sm:w-full">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                        <Input 
                            class="border-2 border-[#c1b8b1] focus:outline-none  focus:ring-[#c1b8b1] input"
                            v-bind="componentField" type="text" :disabled="isLoading"
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            </FormField>
            <FormField name="name2" v-slot="{ componentField }">
                <FormItem class="formField sm:w-full">
                    <FormLabel>Segundo nombre</FormLabel>
                    <FormControl>
                        <Input 
                            class="border-2 border-[#c1b8b1] focus:outline-none  focus:ring-[#c1b8b1] input"
                            v-bind="componentField" type="text" :disabled="isLoading"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            </FormField>
            <FormField name="lastname" v-slot="{ componentField }">
                <FormItem class="formField sm:w-full">
                    <FormLabel>Apellido paterno</FormLabel>
                    <FormControl>
                        <Input 
                            class="border-2 border-[#c1b8b1] focus:outline-none  focus:ring-[#c1b8b1] input"
                            v-bind="componentField" type="text" :disabled="isLoading"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            </FormField>
            <FormField name="lastname2" v-slot="{ componentField }">
                <FormItem class="formField sm:w-full">
                    <FormLabel>Apellido materno</FormLabel>
                    <FormControl>
                        <Input 
                            class="border-2 border-[#c1b8b1] focus:outline-none  focus:ring-[#c1b8b1] input"
                            v-bind="componentField" type="text" :disabled="isLoading"/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            </FormField>
            <FormField name="sex" v-slot="{ componentField }">
                <FormItem class="formField sm:w-full">
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                        <Select 
                            class="border-2 border-[#c1b8b1] focus:outline-none focus:ring-[#c1b8b1] input"
                            v-bind="componentField" :disabled="isLoading"
                        >
                                <SelectTrigger class="border-2 border-[#c1b8b1] focus:outline-none  focus:ring-[#c1b8b1] input">
                                    <SelectValue/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="hombre"> Hombre </SelectItem>
                                        <SelectItem value="mujer"> Mujer </SelectItem>
                                        <SelectItem value="na"> Prefiero no decirlo </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            </FormField>
            <Button class="m-auto w-[60%]" @click="onSubmit" :disabled="isLoading"> 
                <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
                Guardar
            </Button>
        </Form>
    </Card>
  </section>
  
  <Alert/>
  
</template>


<style>

    section{
        padding-bottom: 3rem;
    }
    
    form{
        row-gap: 1.5rem;
        margin-top: 1.5rem;
    }

    .navigation {
        width: 100vw;
        padding: 1.5rem 1rem;
    }
    
    .formField {
        width: 100%;
    }
    
    .input{
        outline: none !important;
        box-shadow: none !important;
    }

    .card{
        padding-bottom: 1.6rem;
    }

    @media (min-width: 768px) { 
        .formField {
            width: calc(50% - 1rem);
        }
    }
    
    .btn--primary{
        background: #977b4b;
    }

</style>