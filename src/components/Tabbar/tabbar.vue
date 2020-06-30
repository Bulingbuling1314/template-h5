<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="Home" @click="$router.replace('/')" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item name="About" @click="$router.replace('/about')" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'Tabbar'
})
export default class Tabbar extends Vue {
  private active: any = 'Home'
  private created() {
    setTimeout(() => {
      this.active = this.$route.name
    }, 100)
  }
}
</script>
<style lang="less" scoped>
</style>