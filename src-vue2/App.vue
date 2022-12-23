<template>
  
  <div id="q-app">
    <router-view />
  </div>

</template>
<script>

import { LoadingBar } from 'quasar';

LoadingBar.setDefaults({
  color: 'primary',
  size: '10px',
  position: 'bottom'
})

LoadingBar.start()

export default {
  name: 'App',
  created(){}
}

</script>
