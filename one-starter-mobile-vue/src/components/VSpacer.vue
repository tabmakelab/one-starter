<style lang="less">
  .vertical-spacer{
    width: 100%;
  }
</style>
<template>
  <div class="vertical-spacer" v-bind:style="'height:' + height + '; background-color:' + color ">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class VSpacer extends Vue {
  @Prop() private color!: string
  @Prop() private size!: 'xs'|'sm'|'md'|'lg'|'xl'
  height = '22px'
  mounted () {
      switch (this.size) {
      case 'xs':
          this.height = '12px'
          break
      case 'sm':
          this.height = '16px'
          break
      case 'lg':
          this.height = '26px'
          break
      case 'xl':
          this.height = '32px'
          break
      default:
          this.height = '22px'
      }
  }
}
</script>
