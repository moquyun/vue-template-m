<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  created () {}
})

export default class home extends Vue {
  // data
  public value: any = ''

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
}
</script>

<style lang="scss" scoped>
// @import '@/assets/lib/reset.scss';
// .home {}
</style>
