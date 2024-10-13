<script setup>
import Header from "./components/Header.vue"
import Layout from "./components/Layout.vue"
import Card from "./components/Card.vue"
import events from "./mocks/events.json"
</script>

<template>
  <div class="min-h-screen w-full">
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
    <router-view></router-view>
  </div>
</template>