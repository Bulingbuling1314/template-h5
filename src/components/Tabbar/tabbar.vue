<template>
  <van-tabbar v-model="active">
    <van-tabbar-item badge="3">
      <span>自定义</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Tabbar'
})
export default class Tabbar extends Vue {
  @Prop({ default: 0 })
  private active: number = 0
  private icon: object = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
  }
}
</script>
<style lang="less" scoped>
</style>