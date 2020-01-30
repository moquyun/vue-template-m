<template>
  <div class="home">
    <div class="header">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class home extends Vue {
  // data
  public value: any = ''
  public list: any = []
  public loading: any = false
  public finished: any = false
  public refreshing: any = false

  // Method
  testMethod (query: any) {
    if (query !== '') {
      // this.$ajax
      //   .userauthSearch(query)
      //   .then((data: any) => {
      //     this.options = data
      //     this.loading = false
      //   })
      //   .catch(() => (this.loading = false))
    } else {
      // this.options = []
    }
  }
  // Props
  @Prop({
    type: Object,
    default () {
      return {}
    }
  })
  selectValue: any;

  // Watch
  @Watch('value', { deep: true }) // 监听选中值变化
  watchValue (val: any, oldVal: any) {
    const selectValue: any = {}
    this.$emit('update:selectValue', selectValue)
  }

  // Computed
  get valueComp () {
    return this.value
  }
  set valueComp (val: any) {
    this.$emit('update:value', val)
  }

  onLoad () {
    setTimeout(() => {
      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      }

      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1)
      }
      this.loading = false

      if (this.list.length >= 40) {
        this.finished = true
      }
    }, 1000)
  }

  onRefresh () {
    // 清空列表数据
    this.finished = false

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    this.loading = true
    this.onLoad()
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/lib/reset.scss';
// .home {}
</style>
