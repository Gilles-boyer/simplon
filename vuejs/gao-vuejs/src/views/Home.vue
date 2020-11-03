<template>
  <div >
      <p v-for="computer in listComputers" :key="computer.id">{{ computer.name }}</p>
  </div>
</template>

<script src="./js/home.js"></script>

