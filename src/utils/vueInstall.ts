// import baseCard from "@/components/baseCard.vue"; //有边框卡片
// import baseCardNoBorder from "@/components/baseCardNoBorder.vue"; //无边框卡片
// import baseCardTitle from "@/components/baseCardTitle.vue"; //卡片标题
// import baseTips from "@/components/baseTips.vue"; //提示信息
// import layoutHeader from "@/components/layoutHeader.vue"; //头部
// import layoutFooter from "@/components/layoutFooter.vue"; //脚部
// import svgVague from "@/components/svgVague.vue"; //模糊svg
// import baseTooltipLogout from "@/components/baseTooltipLogout.vue"; //退出登录弹框

// import { Message } from "element-ui";
// import Router from '@/router.ts'

export default {
  install (Vue: any, option: any) {
    Vue.prototype.$func = {
      // 计算是几位数，返回最大整数位
      _returnMaxInteger (val: any) {
        const value = Math.ceil(val)
        if (val > 0) {
          const length = value.toString().length
          let firstData =
            length !== 2 || parseInt(value.toString().substring(1, 2)) > 5
              ? parseInt(value.toString().substring(0, 1)) + 1
              : parseInt(value.toString().substring(0, 1)) + 0.5
          for (let index = 0; index < length - 1; index++) {
            firstData = 10 * firstData
          }
          return firstData
        }

        if (val <= 0) return undefined
      },
      //  返回数组value值
      _returnArrValue ({ arr, name }: any) {
        return (arr.find((value: any) => value.name === name) || {}).value
      }
    }

    // Vue.component("baseCard", baseCard); //有边框卡片
    // Vue.component("baseCardNoBorder", baseCardNoBorder); //没有边框卡片
    // Vue.component("baseCardTitle", baseCardTitle); //卡片标题
    // Vue.component("baseTooltipLogout", baseTooltipLogout); //退出登录弹框
    // Vue.component("baseTips", baseTips); //提示信息
    // Vue.component("layoutHeader", layoutHeader); //头部
    // Vue.component("layoutFooter", layoutFooter); //脚部
    // Vue.component("svgVague", svgVague); //模糊svg

    //  返回数据是否true
    const _returnDataIsTrue = ({ value }: any) => {
      if (!value) return false
      if (
        value &&
        (JSON.stringify(value) === '[]' || JSON.stringify(value) === '{}')
      ) { return false }
      return true
    }
    //  添加没有数据div
    const _addNoDataDiv = ({ el, arg }: any) => {
      const element = document.createElement('div')
      const height = window.getComputedStyle(el).height || ''
      element.style.height = height
      element.style.position = 'relative'

      if (arg) { element.innerHTML = `<div class="no-data-div" style="height: ${arg}px"></div>` } else if (parseInt(height.toString()) >= 210) { element.innerHTML = `<div class="no-data-div"></div>` } else if (parseInt(height.toString()) < 210) {
        element.innerHTML = `<div class="no-data-div" style="height: ${height}"></div>`
      }
      el.parentNode.insertBefore(element, el)
      el.style.display = 'none'
    }

    // 展示隐藏 没有数据div
    const _showHideEl = ({ isShow, el }: any) => {
      if (isShow) {
        el.style.display = 'block'
        if (
          el.previousElementSibling &&
          el.previousElementSibling.childNodes[0] &&
          el.previousElementSibling.childNodes[0]
            .getAttribute('class')
            .includes('no-data-div')
        ) { el.previousElementSibling.style.display = 'none' }
      }
      if (!isShow) {
        el.style.display = 'none'
        if (
          el.previousElementSibling &&
          el.previousElementSibling.childNodes[0] &&
          el.previousElementSibling.childNodes[0]
            .getAttribute('class')
            .includes('no-data-div')
        ) { el.previousElementSibling.style.display = 'block' }
      }
    }
    // 没有数据指令
    Vue.directive('no-data', {
      inserted (el: any, binding: any) {
        _addNoDataDiv({ el, arg: binding.arg })
      },
      update (el: any, binding: any) {
        const isShow = _returnDataIsTrue({ value: binding.value })
        _showHideEl({ isShow, el })
      }
    })
    // 自动聚焦
    Vue.directive('focus', {
      inserted (el: any) {
        el.focus()
      }
    })
  }
}
