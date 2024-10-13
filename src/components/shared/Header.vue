<script setup>
import Layout from "./Layout.vue"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { CircleUserRound } from 'lucide-vue-next';

</script>

<template>
  <header class="py-2 bg-[#026060]">
    <Layout>
      <div class="flex items-center navcontainer">
        <NavigationMenu class="nav">
              <h1>Tu impacto comienza aquí</h1>
          <NavigationMenuList>
            <NavigationMenuItem>
              <RouterLink  class="flex cursor-pointer" to="/app/profile">
                <CircleUserRound class="text-[#f1f3e8]" style="width: 2.5rem; height: 3.5rem;" />
              </RouterLink>

            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Layout>
  </header>
</template>

<style>
  
  .nav h1{
    font-weight: 900;
    font-size: 1.8rem;
    color: #f1f3e8;
    margin: 0.5rem;
  }
  
  .nav{
    max-width: 100%; 
    justify-content: space-between;
  }
  
  .navcontainer{
    justify-content: space-between;
  }
  
</style>