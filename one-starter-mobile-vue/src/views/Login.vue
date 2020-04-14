<style lang="less" scoped>
.plain-page /deep/ .welcome-back{
    height: 220px;
    background: #999;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    // margin: 5px;
    border-radius: 2px;
}

.plain-page /deep/ .up-wrapper {
    display: flex; flex-direction: row; width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 32px;
    align-content: center;
    justify-items: center;
    label {
        width: 80px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>

<template>
    <div class="plain-page">
      <div class="welcome-back">
        Welcome Back!
        <div class="up-wrapper">
        <label><van-icon name="user-o" />: jack </label>
        <label><van-icon name="other-pay" />: 12345</label>
        </div>
      </div>
    <van-form @submit="onSubmit" label-width="120px">
    <van-field
        v-model="username"
        name="username"
        placeholder="Username"
        :rules="[{ required: true, message: 'Please input your username.' }]"
    >
    <span slot="left-icon" style="display: inline-block; width: 26px">
        <van-icon name="user-o" />
    </span>
    </van-field>
    <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="Password"
        :rules="[{ required: true, message: 'Please input your password.' }]"
    >
    <span slot="left-icon" style="display: inline-block; width: 26px">
        <van-icon name="other-pay" />
    </span>
    </van-field>
    <div style="margin: 16px;">
        <van-button round block color="#222" native-type="submit">
        Sign In
        </van-button>
    </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Row, Col, Icon, Card, Button, Cell, CellGroup, Field, Area, NavBar, Form, Notify } from 'vant'
import { Component } from 'vue-property-decorator'
@Component({
    components: {
        [Row.name]: Row,
        [Button.name]: Button,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Card.name]: Card,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Area.name]: Area,
        [NavBar.name]: NavBar,
        [Form.name]: Form
    }
})
export default class About extends Vue {
    username = ''
    password = ''
    onClickLeft () {
        console.log('onClickLeft')
    }

    onClickRight () {
        console.log('onClickRight')
    }

    onSubmit (e: { username: string; password: string }) {
        console.log('Submit Data:', e)
        if (e.username !== 'jack' && e.password !== '12345') {
            this.$notify({ message: 'Invalid username or password.', type: 'warning' })
            return false
        } else {
            localStorage.setItem('_ONE_START_TOKEN_', '8HsausdaMkasdiywewexzqwe5')
            this.$router.push('/')
        }
    }
}
</script>
