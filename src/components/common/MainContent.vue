<template>
  <section class="main-content">
    <template>
      <main-by-router></main-by-router>
    </template>
  </section>
</template>

<script lang="ts">
// <template v-if="currentTab.isRouter">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { MainByRouter } from '@/components/common' // MainByIframe, MainByRouter

@Component({
  components: {
    MainByRouter
  },
  computed: {}
})

export default class MainContent extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/assets/lib/reset.scss';
.main-content {}
</style>
