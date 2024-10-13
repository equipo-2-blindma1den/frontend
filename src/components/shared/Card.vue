<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Dialog from "../shared/Dialog.vue"
const contentText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt exercitationem omnis deleniti dignissimos cum mollitia nemo quas. Error sint magni dicta repudiandae blanditiis culpa voluptate consectetur veniam nihil ipsa."
</script>

<template>
  <Card class="card">
    <CardHeader class="header">
      <img class="max-w-full h-auto object-cover aspect-video" src="https://github.com/shadcn.png" alt="avatar" />
      <CardTitle class="title" >Donaciones Huracán Milton</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-muted-foreground">
        {{ contentText.substring(0, 100) + "..." }}
      </p>
    </CardContent>
    <CardFooter>
      <Dialog
        image="https://github.com/shadcn.png"
        title="Donaciones Huracán Milton"
        description="Aporta tu grano de arena a la donación por las víctimas"
      />
    </CardFooter>
  </Card>
</template>

<style>
  .card{
      border-radius: 2rem !important;
      overflow: hidden;
  }
  
  .header{
    position: relative;
    padding: 0;
  }
  
  .header::before{
        content: '';
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(rgb(255 255 255 / 50%) 10%, rgb(255 255 255)); */
    /* mix-blend-mode: multiply; */
    pointer-events: none;
    background: linear-gradient(to bottom, #ffffff00 0, rgb(235 235 235) 70%, rgb(255 255 255) 100%);
    z-index: 1;
  }
  
  .title{
        color: #026060;
    padding-inline: 1.5rem;
    z-index: 10;
    font-weight: bold;
    font-size: 1.8rem;
  }
  
</style>