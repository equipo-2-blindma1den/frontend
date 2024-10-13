<script setup>
import { onMounted, ref } from "vue"
import Header from "../components/Header.vue"
import Layout from "../components/Layout.vue"
import Card from "../components/Card.vue"
import { EventsService } from "../services/events.js"

const events = ref([])

onMounted(async () => {
  await EventsService.getAllEvents().then(data => {
    events.value = data
  })
})
</script>

<template>
  <Header />
  <Layout>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5">
      <Card
        v-for="event in events.data"
        :key="event.id"
        :event="event"
      />
    </div>
  </Layout>
</template>