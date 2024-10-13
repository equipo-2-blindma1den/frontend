<script setup>
  import Header from "@/components/shared/Header.vue"
  import Layout from "@/components/shared/Layout.vue"
  import Card from "@/components/shared/Card.vue"
</script>

<template>
  <div class="min-h-screen w-full">
    <Header />
    <Layout class="bg-[#f1f3e8]">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  </div>
</template>