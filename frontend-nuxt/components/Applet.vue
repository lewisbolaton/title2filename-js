<template>
  <div class="applet">
    <div class="entries">
      <span>Entry</span>
      <span>Entry</span>
      <span>Entry</span>
      <button>add_field</button>
    </div>

    <button>convert</button>

    <div class="results" v-if="isConverted">
      <div class="clipboard">
        <input readonly type="text">
        <button>copy</button>
      </div>
      <button>convert_new</button>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    data () {
      return { isConverted: false }
    }
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