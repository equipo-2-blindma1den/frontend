<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Dialog from "./Dialog.vue"
const contentText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt exercitationem omnis deleniti dignissimos cum mollitia nemo quas. Error sint magni dicta repudiandae blanditiis culpa voluptate consectetur veniam nihil ipsa."
</script>

<template>
  <Card>
    <CardHeader>
      <img class="max-w-full h-auto object-cover aspect-video" src="https://github.com/shadcn.png" alt="avatar" />
      <CardTitle>Donaciones Huracán Milton</CardTitle>
      <CardDescription>Aporta tu grano de arena a la donación por las víctimas</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        {{ contentText.substring(0, 100) + "..." }}
      </p>
    </CardContent>
    <CardFooter>
      <Dialog
        image="https://github.com/shadcn.png"
        title="Donaciones Huracán Milton"
        description="Aporta tu grano de arena a la donación por las víctimas"
        contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt exercitationem omnis deleniti dignissimos cum mollitia nemo quas. Error sint magni dicta repudiandae blanditiis culpa voluptate consectetur veniam nihil ipsa."
      />
    </CardFooter>
  </Card>
</template>