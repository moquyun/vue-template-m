<template>
  <van-row class="layout">
    <van-col span="24" class="layout-main">
      <main-content></main-content>
    </van-col>
    <van-col span="24" class="layout-footer">
      <TabBar />
    </van-col>
  </van-row>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { MainContent, TabBar } from '@/components/common'

@Component({
  components: {
    MainContent,
    TabBar
  }
})
export default class layout extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/assets/lib/reset.scss';
.layout {
  @include flexbox();
  @include flex-direction(column);
  .layout-main {
    @include overflow();
    @include rect(100%, 100%);
    @include flex(1, column);
  }
}
</style>
