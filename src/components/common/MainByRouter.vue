<template>
  <section class="main-by-router">
    <transition name="fade-transform"
                mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"
                     class="tab-router-content"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component({
  props: [],
  components: {},
  computed: {},
  watch: {},
  mounted () {},
  created () {}
})

export default class mainByRouter extends Vue {
  //
  get menuTabs () {
    // return this.$store.getters.menuTabs
    return []
  }

  get cachedViews () {
    const tabs: any = this.menuTabs
    return tabs.map((item: any) => {
      if (!(item.meta && item.meta.noCache) && item.isRouter) {
        return item.name
      }
    })
  }

  get currentTab () {
    // return this.$store.getters.currentTab
    return 2
  }

  get key () {
    return this.$route.path
  }
}
</script>

<style lang="scss">
@import '@/assets/lib/reset.scss';
.main-by-router {
  @include rect(100%, 100%);
}
</style>
