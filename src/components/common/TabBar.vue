<template>
  <van-tabbar
    v-model="active"
    active-color="#07c160"
    inactive-color="#000"
    @change="onChange"
  >
    <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item name="videos" icon="video">电影</van-tabbar-item>
    <van-tabbar-item name="like" icon="like">喜欢</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TabBar extends Vue {
  public active: any = 'home'

  onChange (index: any) {
    this.$router.push(index)
    // console.log('onChange', )
  }

  created () {
    //
  }

  mounted () {
    this.active = this.$route.name
  }
}
</script>
