<script setup>
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Calendar from "@/components/icons/Calendar.vue"
import Map from "@/components/icons/Map.vue"
import Target from "@/components/icons/Target.vue"

defineProps({
  image: { type: String },
  title: { type: String },
  description: { type: String },
  contentText: { type: String },
})

</script>

<template>
  <Dialog>
    <DialogTrigger class="w-full">
      <Button class="w-full">Más información</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
          <img
            class="max-w-full h-auto object-cover aspect-video"
            :src="image"
            alt="avatar"
          />
          <DialogTitle>{{ title }}</DialogTitle>
          <DialogDescription>{{ description }}</DialogDescription>
      </DialogHeader>

      <p>{{ contentText }}</p>

      <div class="flex items-center gap-2">
        <Calendar />
        <span>20 de octubre</span>
      </div>
      <div class="flex items-center gap-2">
        <Map />
        <span>San Juan, Puerto Rico</span>
      </div>
      <div class="flex items-center gap-2">
        <Target />
        <span>Meta: 1000 $</span> 
      </div>

      <DialogFooter>
        <div class="flex gap-2 justify-end">
          <DialogClose asChild>
            <Button variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button>
            Me interesa
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>