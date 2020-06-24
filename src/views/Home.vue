<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Loading :show="showLoading" text="请稍后" />
    <button @click="showLoad">按钮</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Loading from '@/components/Loading/loading.vue'
@Component({
  name: 'Home',
  components: {
    HelloWorld,
    Loading
  }
})
export default class Home extends Vue {
  private showLoading = false
  private showLoad() {
    this.showLoading = true
  }
}
</script>
