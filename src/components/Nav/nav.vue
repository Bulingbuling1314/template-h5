<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Nav'
})
export default class Nav extends Vue {}
</script>
<style lang="less" scoped>
</style>