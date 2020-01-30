<template>
  <div class="like">
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
    <ul>
      <li>11</li>
      <li>+</li>
      <li>33</li>
      <li>-</li>
      <li>44</li>
      <li>=</li>
      <li>55</li>
    </ul>
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
export default class like extends Vue {
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
@import '@/assets/lib/reset.scss';
.like {
  @include rect(100%, 100%);
  @include background-color(#18191f);
  ul {
    @include flexbox();
    @include padding(10px 5px);
    // text
    color: #00f3ff;
    text-shadow: 0 0 15px #00f3ff;
    li {
      position: relative;
      display: block;
      //
      @include rect(50px, 50px);
      @include background-color(#18191f);
      line-height: 50px;
      text-align: center;
      @include margin(0 5px);
      @include border-radius(15px);
      // @include box-shadow(
      //   -2px -2px 3px rgba(255, 255, 255, .05),3px 3px 3px rgba(0, 0, 0, .2)
      // );
      box-shadow: -2px -2px 3px rgba(255, 255, 255, .05),
                          3px 3px 3px rgba(0, 0, 0, .2);
      font-size: 24px;
      font-weight: 800;
    }
  }
  // ul:nth-child(2) {
  //   color: #f00;
  //   text-shadow: 0 0 15px #f00;
  // }
  ul:nth-child(2n+1) {
    color: #0f0;
    text-shadow: 0 0 15px #0f0;
  }
}
</style>
