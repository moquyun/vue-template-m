<template>
  <div id="app"
       @click="dealBodyClick">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

// interface obj {
//   a: string;
//   b: number;
// }
// @Component({
//   props: [],
//   components: {},
//   computed: {},
//   watch: {},
//   mounted () {},
//   created () {}
// })
// export default class a extends Vue {
//   // data
//   a:number = 1
//   b:string = '2'
//   c:boolean = true
//   d:obj = {
//     a: 'qi',
//     b: '77'
//   }
//   // methods
//   funA () {}
//   funB () {}
// }

// @Component({
//   components: {
//     aCard, //卡片
//     aUserRightsItem, //用户权限功能项
//     aPanel, //面板
//     search, //搜索框
//     radioGroup, //单选框组合
//     checkboxGroup //多选框组合
//   }
// })

@Component
export default class App extends Vue {
  public options: any = [];
  public value: any = '';
  public loading = false;

  remoteMethod (query: any) {
    if (query !== '') {
      // this.$ajax
      //   .userauthSearch(query)
      //   .then((data: any) => {
      //     this.options = data
      //     this.loading = false
      //   })
      //   .catch(() => (this.loading = false))
    } else {
      this.options = []
    }
  }

  @Prop({
    type: Object,
    default () {
      return {}
    }
  })
  selectValue: any;
  @Watch('selectValue', { deep: true }) // 监听选中值对象变化
  watchSelectValue (val: any, old: any) {
    this.value = val.id
  }

  @Watch('value', { deep: true }) // 监听选中值变化
  watchValue (val: any, oldVal: any) {
    const selectValue: any =
      (this.options.filter((value: any) => val === value.id) || [])[0] || {}
    this.$emit('update:selectValue', selectValue)
  }

  dealBodyClick () {
    //
  }
}
</script>
<style lang="scss">
@import '@/assets/lib/reset.scss';
html, body, #app, .layout {
  @include rect(100%, 100%);
}
</style>
