<template>
  <div class="header">
    <NuxtLink to="/">text2filename-js</NuxtLink>
    <NuxtLink to="/">About</NuxtLink>
    <NuxtLink to="/">Guide</NuxtLink>
    <NuxtLink to="/">Source</NuxtLink>
  </div>
  <slot />
  <div class="footer">
    <span>© 2024 Lewis Bolaton</span>
    <span>Built with <NuxtLink to="/">NuxtJS</NuxtLink></span>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#__nuxt {
  height: calc(100% - 20px);
  padding: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: inline-flex;
  gap: 12px;
}

.footer {
  display: inline-flex;
  justify-content: space-between;
}
</style>
