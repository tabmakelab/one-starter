<style scoped lang="less">

</style>
<template>
  <div class="navi">
    <van-grid>
      <van-grid-item  text="Diamond">
        <van-icon slot="icon" size="28px" name="diamond-o" :color="'#444'"></van-icon>
      </van-grid-item>
      <van-grid-item  text="Music">
        <van-icon slot="icon" size="28px" name="music-o" :color="'#444'"></van-icon>
      </van-grid-item>
      <van-grid-item  text="Coupon">
        <van-icon slot="icon" size="28px" name="coupon-o" :color="'#444'"></van-icon>
      </van-grid-item>
      <van-grid-item  text="Service">
        <van-icon slot="icon" size="28px" name="service-o" :color="'#444'"></van-icon>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Grid, GridItem, Icon } from 'vant'
@Component({
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Icon.name]: Icon
    }
})
export default class Navi extends Vue {
}
</script>
