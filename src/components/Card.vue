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

const props = defineProps({
  event: { type: Object, required: true }
})

const { 
  titulo: title,
  descripcion: description,
  imagen: image
} = props.event

const imageSrc = image || "https://github.com/shadcn.png"
const contentText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sunt exercitationem omnis deleniti dignissimos cum mollitia nemo quas. Error sint magni dicta repudiandae blanditiis culpa voluptate consectetur veniam nihil ipsa."
</script>

<template>
  <Card>
    <CardHeader>
      <img class="max-w-full h-auto object-cover aspect-video" :src="imageSrc" alt="avatar" />
      <CardTitle>{{title}}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        {{ contentText.substring(0, 100) + "..." }}
      </p>
    </CardContent>
    <CardFooter>
      <Dialog
        :event="props.event"
        :contentText="contentText"
      />
    </CardFooter>
  </Card>
</template>