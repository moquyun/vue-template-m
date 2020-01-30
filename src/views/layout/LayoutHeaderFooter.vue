<template>
  <van-row class="layout">
    <van-col span="24" class="layout-header">
      <van-nav-bar
        :title="this.$route.meta.title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-col>
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
import { MainContent, TabBar } from '@/components/common' // MainHeader, LeftSidebar, MainContent

@Component({
  components: {
    MainContent,
    TabBar
  },
  computed: {
    currentTab () {
      // return this.$store.getters.currentTab
      return 1
    }
  }
})

export default class layout extends Vue {
  public value: string = ''

  mounted () {
    console.log(this.$route)
  }

  onClickLeft () {
    this.$router.go(-1)
    // console.log()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/lib/reset.scss';
.layout {
  display: flex;
  flex-direction: column;
  .layout-header {}
  .layout-main {
    @include overflow();
    @include rect(100%, 100%);
    flex: 1;
  }
  .layout-footer {
    // position: absolute;
    // bottom: 0;
  }
}
</style>
