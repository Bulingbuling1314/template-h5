<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <Loading :show="showLoading" text="请稍后" />
    <van-button size="large" type="primary" @click="showLoad" ref="btn">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
import Loading from '@/components/Loading/loading.vue'
@Component({
  name: 'Home',
  components: {
    Loading
  }
})
export default class Home extends Vue {
  @Ref('btn')
  private btn!: HTMLElement
  private showLoading = false
  private showLoad() {
    this.showLoading = true
    setTimeout(() => {
      this.showLoading = false
    }, 2000)
  }
  private mounted() {
    console.log(this.btn.clientWidth)
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>