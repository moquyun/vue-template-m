<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

interface obj {
  a: string;
  b: number;
}
@Component({
  props: [],
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  created () {}
})
// export default class home extends Vue {
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
export default class inputMe extends Vue {
  public options: any = [];
  public value: any = '';
  public loading = false;

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
      this.options = []
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
}
</script>

<style lang="scss">
@import '@/assets/lib/reset.scss';
// .home {}
</style>
