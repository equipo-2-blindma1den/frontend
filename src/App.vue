<script setup>
import Header from "./components/Header.vue"
import Layout from "./components/Layout.vue"
import Card from "./components/Card.vue"
</script>

<template>
  <div class="min-h-screen w-full">
    <Header />
    <Layout>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
    <router-view></router-view>
  </div>