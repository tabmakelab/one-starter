<template>
  <div class="page">
    <van-nav-bar
      :fixed="true"
      @click-left="onClickLeft"
      title="Movie Detail"
      :left-text="''"
      right-text=""
      :left-arrow="true"
    />
  </div>
</template>
<style scoped>
</style>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Row, Col, Icon, Swipe, SwipeItem, Button, Cell, CellGroup, Field, Area, NavBar } from 'vant'
@Component({
    components: {
        [NavBar.name]: NavBar
    }
})
export default class MovieDetail extends Vue {
    onClickLeft () {
        this.$router.back()
    }
}
</script>
