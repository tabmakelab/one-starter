<template>
    <div class="page">
      <van-nav-bar
        title="About"
        :left-text="''"
        right-text=""
        :fixed="true"
        :left-arrow="false"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Row, Col, Icon, Button, Cell, CellGroup, Field, Area, NavBar } from 'vant'
import { Component } from 'vue-property-decorator'

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
          [NavBar.name]: NavBar
      }
  })
export default class About extends Vue {
    onClickLeft () {
        console.log('onClickLeft')
    }

    onClickRight () {
        console.log('onClickRight')
    }
}
</script>
