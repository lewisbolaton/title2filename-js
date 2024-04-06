<template>
  <div class="applet">
    <div class="entries">
      <Entry v-for="(entry, index) in entries" :index="index"/>
      <button @click="addEntry()">add_field</button>
    </div>

    <button @click="conv()" v-if="!isConverted">convert</button>

    <div class="results" v-else="!isConverted">
      <div class="clipboard">
        <input readonly type="text">
        <button>copy</button>
      </div>
      <button @click="conv_new()">convert_new</button>
    </div>
  </div>
</template>

<script setup lang="js">

  /*
  export default {
    data () {
      return {
        isConverted: false,
        saa: 3
      }
    }
  }
  */

  const isConverted = useState('isConverted', () => false);
  
  const entries = useEntries();

  const addEntry = () => {
    if (entries.value.length >= 10) {
      alert('Maximum number of fields reached');
    } else {
      entries.value.push({title: '', filter: ''});
    console.log(entries.value);
    }
  }

  const conv = () => {
    isConverted.value = true;
  }

  const conv_new = () => {
    entries.value.forEach(e => {
      e.title = '';
      e.filter = '';
    });
    isConverted.value = false;
  }

</script>

<style>
.applet {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 10px;
}

.entries {
  background-color: green;
  
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 10px;
  
  padding: 10px;
}
</style>