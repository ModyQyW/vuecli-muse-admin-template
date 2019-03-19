<template>
  <div id="app">
    <mu-fade-transition mode="out-in">
      <router-view></router-view>
    </mu-fade-transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
