<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item to="/about" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Tabbar'
})
export default class Tabbar extends Vue {
  private active: number = 0
}
</script>
<style lang="less" scoped>
</style>