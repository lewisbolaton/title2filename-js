<template>
  <div class="entry">
    <input type="text" v-model="entries[index].title">
    <input type="text" class="filter" v-model="entries[index].filter">
    <button @click="removeEntry(index)">remove</button>
  </div>
</template>

<style>
.entry {
  display: flex;
  gap: 5px;
}

input.filter {
  width: 2em;
}
</style>

<script setup lang="js">
  defineProps(['index']);
  const entries = useEntries();

  const removeEntry = index => {
    if (entries.value.length < 2) {
      alert('Need at least one field');
    } else {
      entries.value.splice(index, 1);
    }
  }
</script>