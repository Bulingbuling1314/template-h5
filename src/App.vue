<template>
  <div id="app">
    <transition :name="animationName">
      <router-view />
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import Tabbar from '@/components/Tabbar/tabbar.vue'
@Component({
  name: 'About',
  components: {
    Tabbar
  }
})
export default class Home extends Vue {
  private animationName!: string
  @Watch('$route')
  private routeChange(newRoute: any, oldRoute: any) {
    if (newRoute.meta.index > oldRoute.meta.index) {
      this.animationName = 'slide-left'
    } else {
      this.animationName = 'slide-right'
    }
  }
}
</script>
<style lang="less">
#app {
  padding-bottom: 50px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute; //这里的定位使用relative可以解决切换时页面残影
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
