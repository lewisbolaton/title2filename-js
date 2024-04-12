<template>
  <div class="applet">
    <div class="entries">
      <Entry v-for="(entry, index) in entries" :index="index"/>
      <button @click="addEntry">
        Add field<span class="material-symbols-outlined">add_box</span>
      </button>
    </div>

    <button @click="convert" v-if="isHidden">
      Convert<span class="material-symbols-outlined">double_arrow</span> 
    </button>

    <div class="results" v-else="isHidden">
      <div class="clipboard">
        <input readonly type="text" v-model="resultString" ref="result">
        <button @click="copyResult">
          <span class="material-symbols-outlined">content_copy</span>
        </button>
      </div>
      <button @click="convertNew">
        Convert new<span class="material-symbols-outlined">refresh</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="js">
  import {ref} from 'vue';

  const isHidden = useState('isHidden', () => true);
  const entries = useEntries();
  var resultString = '';
  var result = ref('null');

  const addEntry = () => {
    if (entries.value.length >= 10) {
      alert('Maximum number of fields reached');
    } else {
      entries.value.push({title: '', filter: ''});
    }
  }

  const convert = () => {
    // Process input here
    let nonEmpty = entries.value.filter((i) => i.title.length > 0);
    if (nonEmpty.length > 0) {
      isHidden.value = false;
      resultString = title2filename('_', ...nonEmpty.map((e) => [e.title, e.filter]));
    } else {
      alert('No input found');
    }
  }

  const copyResult = () => {
    result.value.select();
    navigator.clipboard.writeText(resultString);
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

button {
  display: inline-flex;
  align-items: center;
}

div.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

div.clipboard {
  display: flex;
  align-items: stretch;
}
</style>