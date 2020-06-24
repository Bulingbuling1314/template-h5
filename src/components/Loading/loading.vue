<template>
  <div class="mask" v-show="show">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Loading'
})
export default class Loading extends Vue {
  @Prop({ default: false }) private show!: boolean
  @Prop({ default: '加载中...' }) private text!: string
}
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  .loading{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
    span{
      display: inline-block;
      width: 10px;
      border-radius: 4px;
      background: lightgreen;
      animation: load 1s ease infinite;
      &:nth-child(2){
        animation-delay:0.2s;
      }
      &:nth-child(3){
        animation-delay:0.4s;
      }
      &:nth-child(4){
        animation-delay:0.6s;
      }
      &:nth-child(5){
        animation-delay:0.8s;
      }
    }
    p {
      color: #fff;
      font-size: 14px;
      text-align: center;
      margin-top: 10px;
    }
    @keyframes load {
      0% {
        height: 10px;
        background: lightgreen;
      }
      50% {
        height: 30px;
        margin: -10px 0;
        background: lightblue;
      }
      100% {
        height: 10px;
        background: pink;
      }
    }
  }
}
</style>