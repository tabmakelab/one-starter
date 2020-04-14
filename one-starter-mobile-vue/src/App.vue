<template>
  <div id="app">
    <router-view/>
    <van-tabbar     active-color="#996600"
      inactive-color="#000" v-model="activeTab" v-show="!hideTab" :safe-area-inset-bottom="true" :fixed="true">
       <van-tabbar-item to="/" >
        <van-icon slot="icon" v-show="activeTabPath!='/'" name="wap-home-o" active="false"></van-icon>
        <van-icon slot="icon" v-show="activeTabPath=='/'" name="wap-home" active="true"></van-icon>
        Home</van-tabbar-item>
      <van-tabbar-item to="/about" icon="info-o">
        <van-icon slot="icon" v-show="activeTabPath!='/about'" name="credit-pay" active="false"></van-icon>
        <van-icon slot="icon" v-show="activeTabPath=='/about'" name="card" active="true"></van-icon>
        About</van-tabbar-item>
      <van-tabbar-item to='/settings' icon="setting-o">
        <van-icon slot="icon" v-show="activeTabPath!='/settings'" name="comment-o" active="false"></van-icon>
        <van-icon slot="icon" v-show="activeTabPath=='/settings'" name="comment" active="true"></van-icon>
        Settings</van-tabbar-item>
      <van-tabbar-item to='/me' icon="user-o">
        <van-icon slot="icon" v-show="activeTabPath!='/me'" name="manager-o" active="false"></van-icon>
        <van-icon slot="icon" v-show="activeTabPath=='/me'" name="manager" active="true"></van-icon>
        Me
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #2c3e50;
}
.page{
  background: #efefef;
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-top: 50px;
  padding-bottom: 50px;
}

.plain-page{
  background: #efefef;
  width: 100%;
  min-height: calc(100vh);
}

.nonav-page{
  background: #efefef;
  width: 100%;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script lang="ts">
import VueResource from 'vue-resource'
import { Component, Watch } from 'vue-property-decorator'
import Vue from 'vue'
import { Row, Col, Icon, Button, Cell, Tabbar, TabbarItem, CellGroup, Field, Area, Notify } from 'vant'
Vue.use(VueResource)
Vue.use(Notify)
@Component({
    components: {
        [Row.name]: Row,
        [Button.name]: Button,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Area.name]: Area,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
})
export default class App extends Vue {
  activeTab = 0
  activeTabPath = '/'
  hideTab = false
  switchTab (path: string) {
      if (this.$router.currentRoute.path !== path) {
          console.log('push')
          this.$router.push({ path: path })
      }
  }

  @Watch('$route')
  onChildChanged (val: any, oldVal: any) {
      console.log('NEW ROUTE:', val)
      console.log('OLD ROUTE:', oldVal)
      this.activeTabPath = val.path
      if (val.meta.hideTab === true) {
          this.hideTab = true
      } else {
          this.hideTab = false
      }
      switch (val.name) {
      case 'About':
          this.activeTab = 1
          break
      case 'Settings':
          this.activeTab = 2
          break
      case 'Me':
          this.activeTab = 3
          break
      default:
          this.activeTab = 0
      }
  }
}
</script>
