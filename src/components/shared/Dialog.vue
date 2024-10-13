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

defineProps({
  image: { type: String },
  title: { type: String },
  description: { type: String },
})

</script>

<template>
  <Dialog>
    <DialogTrigger class="mx-auto">
      <Button class="bg-[#080808]">Más información</Button>
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
      <DialogFooter>
        <div class="flex gap-2 justify-end">
          <DialogClose asChild>
            <Button variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
          <Button>
            Donar
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>