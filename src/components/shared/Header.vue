<script setup>
import Layout from "./Layout.vue"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
</script>

<template>
  <header class="py-8 bg-primary">
    <Layout>
      <div class="flex items-center justify-end">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>

              <RouterLink  class="flex cursor-pointer" to="/app/profile">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </RouterLink>

            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Layout>
  </header>
</template>