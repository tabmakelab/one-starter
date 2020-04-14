<style lang="less">
  .app-swipe {
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 200px;
      text-align: center;
      background-color: #999;
    }
    .swipe-item-alpha{
      background: #222;
    }
    .swipe-item-beta{
      background: #333;
    }
    .swipe-item-gamma{
      background: #444;
    }
    .swipe-item-delta{
      background: #555;
    }
  }
</style>
<template>
  <div class="page" style="padding-top: 0px;">
    <!-- <van-nav-bar
      :fixed="true"
      title="Home"
      :left-text="''"
      right-text=""
      :left-arrow="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->

    <van-swipe class="app-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-bind:key="item.idx" v-for="item in swipeItems" :class="item.className"> {{item.text}} </van-swipe-item>
    </van-swipe>
    <Navi></Navi>
    <VSpacer :color="'#efefef'" :size="'xs'"></VSpacer>
    <van-panel title="One Starter Vue Mobile" desc="Mobile web application with native experience">
      <div style="padding: 1em; font-size: 14px;">Thanks to VUE and Vant UI framework, we can build a slim and beautiful web application.  </div>
    </van-panel>
    <VSpacer :color="'#efefef'" :size="'xs'"></VSpacer>
    <van-cell-group title="Action Movies">
      <van-cell title="First Blood" url="#/movie-detail?title=FirstBlood" is-link value="Sylvester Stallone" />
      <van-cell title="Die Hard" url="#/movie-detail?title=DieHard" is-link value="Bruce Willis" />
      <van-cell title="True Lies" url="#/movie-detail?title=TrueLies" is-link value="Arnold Schwarzenegger" />
      <van-cell title="The One" url="#/movie-detail?title=TheOne" is-link value="Jet Li" />
    </van-cell-group>
    <VSpacer :color="'#efefef'" :size="'xl'"></VSpacer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Row, Col, Icon, Swipe, SwipeItem, Button, Panel, Cell, CellGroup, Field, Area, NavBar } from 'vant'
import { Component } from 'vue-property-decorator'
import Navi from '@/components/Navi.vue'
import VSpacer from '@/components/VSpacer.vue'

@Component({
    components: {
        VSpacer,
        Navi,
        [Panel.name]: Panel,
        [Row.name]: Row,
        [Button.name]: Button,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Area.name]: Area,
        [NavBar.name]: NavBar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    }
})
export default class Home extends Vue {
  swipeItems = [{ idx: 0, className: 'swipe-item-alpha', text: 'Alpha' },
      { idx: 1, className: 'swipe-item-beta', text: 'Beta' },
      { idx: 2, className: 'swipe-item-gamma', text: 'Gamma' },
      { idx: 3, className: 'swipe-item-delta', text: 'Delta' }]

  onClickLeft () {
      console.log('onClickLeft')
  }

  onClickRight () {
      console.log('onClickRight')
  }
}
</script>
