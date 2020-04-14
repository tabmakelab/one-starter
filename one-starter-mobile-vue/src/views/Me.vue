<template>
    <div class="page">
        <van-nav-bar
            :fixed="true"
            title="Me"
            :left-text="''"
            right-text=""
            :left-arrow="false"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-cell-group style="padding-top: 32px;">
            <van-cell :center="true" label-width="120px" is-link>
            <span slot="icon" style="display: inline-block; width: 72px">
                <van-icon size="64px" name="user-circle-o" color="#ccc"/>
            </span>
            <div slot="title">
                <label style="color: #222; font-size: 16px; display: block;">Jack Smith</label>
                <span style="color: #999">12435647354231</span>
            </div>
            </van-cell>
            <VSpacer :color="'#efefef'" :size="'xs'"></VSpacer>
            <van-cell title="Alpha">
            <span slot="right-icon">
                <van-icon name="hotel-o" size="18px" color/>
            </span>
            </van-cell>
            <van-cell title="Beta">
            <span slot="right-icon">
                <van-icon name="qr" size="18px"/>
            </span>
            </van-cell>
            <van-cell title="Gamma">
            <span slot="right-icon">
                <van-icon name="underway-o" size="18px"/>
            </span>
            </van-cell>
            <VSpacer :color="'#efefef'" :size="'xs'"></VSpacer>
            <van-cell @click="signOut" title="SIGN OUT" style="text-align: center; color: #dd0000" label-width="100%" :center="true"/>
        </van-cell-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Row, Col, Icon, Button, Cell, CellGroup, Field, Area, NavBar } from 'vant'
import { Component } from 'vue-property-decorator'
import VSpacer from '@/components/VSpacer.vue'
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
          [NavBar.name]: NavBar,
          VSpacer
      }
  })
export default class Me extends Vue {
    onClickLeft () {
        console.log('onClickLeft')
    }

    onClickRight () {
        console.log('onClickRight')
    }

    signOut () {
        localStorage.removeItem('_ONE_START_TOKEN_')
        this.$router.push({ name: 'Login' })
    }
}
</script>
