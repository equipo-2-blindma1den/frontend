<script setup>
import { onMounted, ref } from "vue"
import Header from "@/components/shared/Header.vue"
import Layout from "@/components/shared/Layout.vue"
import Card from "@/components/shared/Card.vue"
import { Button } from '@/components/ui/button';
import { EventsService } from "../services/events.js"

const events = ref([])
const activeButton = ref({
  'Todos': true,
  'Donaciones': false,
  'Voluntariados': false
})

onMounted(async () => {
  await EventsService.getAllEvents().then(data => {
    console.log(data);
    events.value = data
  })
})
</script>

<template>
  <Header />
  <Layout>
    <div class="flex gap-2 pt-5">
      <Button
        v-for="(button, index) in activeButton"
        :key="index"
        :variant="button ? '' : 'secondary'"
        @click="activeButton[index] = !activeButton[index]"
      >
        {{ index }}
      </Button>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5">
      <Card
        v-for="event in events.data"
        :key="event.id"
        :event="event"
      />
    </div>
  </Layout> 
</template>