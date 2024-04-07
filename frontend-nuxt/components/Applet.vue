<template>
  <div class="applet">
    <div class="entries">
      <Entry v-for="(entry, index) in entries" :index="index"/>
      <button @click="addEntry">add_field</button>
    </div>

    <button @click="convert" v-if="isHidden">convert</button>

    <div class="results" v-else="isHidden">
      <div class="clipboard">
        <input readonly type="text" v-model="output">
        <button>copy</button>
      </div>
      <button @click="convertNew">convert_new</button>
    </div>
  </div>
</template>

<script setup lang="js">
  const isHidden = useState('isHidden', () => true);
  const entries = useEntries();
  var output = '';

  const addEntry = () => {
    if (entries.value.length >= 10) {
      alert('Maximum number of fields reached');
    } else {
      entries.value.push({title: '', filter: ''});
    }
  }

  const convert = () => {
    // Process input here
    isHidden.value = false;

    //console.log(title2filename('_', ...entries.value.map((e) => [e.title, e.filter])));

    output = title2filename('_', ...entries.value.map((e) => [e.title, e.filter]));
  }

  const convertNew = () => {
    entries.value.forEach(e => {
      e.title = '';
      e.filter = '';
    });
    isHidden.value = true;
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