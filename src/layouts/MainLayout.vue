<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>6804101355</q-toolbar-title>
        <q-btn flat no-caps label="Form" to="/" />
        <q-btn flat no-caps label="Second Page" to="/second" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout'
})
</script>
