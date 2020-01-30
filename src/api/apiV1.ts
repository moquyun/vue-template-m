import instance from '@/api/config.ts'
import Vue from 'Vue'

export default {
  install (Vue: any, option: any) {
    Vue.prototype.$ajax = {
      // 身份验证
      usersVerify: () => {
        return instance({
          url: '/qmp/users/verify',
          method: 'get'
        })
      },
      // 登录
      login: (data: any) => {
        return instance({
          url: '/users/login',
          method: 'post',
          data
        })
      },

      // 登出
      logout: () => {
        return instance({
          url: '/users/logout',
          method: 'get'
        })
      },

      // 登录页指标-用户公告
      notice: () => {
        return instance({
          url: '/v1.0/loginpage/notice',
          method: 'get'
        })
      },

      // 登录页指标-系统健康度统计
      health: () => {
        return instance({
          url: '/v1.0/loginpage/metric/health',
          method: 'get'
        })
      },

      // 登录页指标-年度漏测率统计
      bubblechart: () => {
        return instance({
          url: '/v1.0/loginpage/metric/leakrate/bubblechart',
          method: 'get'
        })
      },

      // 登录页指标-年度接口自动化覆盖率统计
      auto: () => {
        return instance({
          url: '/v1.0/loginpage/metric/auto',
          method: 'get'
        })
      },

      // 主页-获取部门架构
      department: (departmentid: any) => {
        return instance({
          url: `/v1.0/home/department/${departmentid}`,
          method: 'get'
        })
      },
      // 首页指标-缺陷值统计
      metricDefect: ({ departmentid, typeid, sortedtype }: any) => {
        return instance({
          url: `/v1.0/home/metric/defect/${departmentid}/${typeid}/${sortedtype}`,
          method: 'get'
        })
      },
      // 首页指标-漏测率统计
      metricLeakrate: ({ departmentid, typeid }: any) => {
        return instance({
          url: `/v1.0/home/metric/leakrate/${departmentid}/${typeid}`,
          method: 'get'
        })
      },
      // 主页指标-接口自动化覆盖统计Top5
      metricAutoTop: ({ departmentid, sortedtype2 }: any) => {
        return instance({
          url: `/v1.0/home/metric/auto/${departmentid}/${sortedtype2}`,
          method: 'get'
        })
      },
      // 主页指标-安全漏洞未修复量统计Top5
      metricSecurityTop: (departmentid: any) => {
        return instance({
          url: `/v1.0/home/metric/security/top/${departmentid}`,
          method: 'get'
        })
      },
      // 主页持续集成统计
      metricCiresult: ({ departmentid, typeid }: any) => {
        return instance({
          url: `/v1.0/home/metric/ciresult/${departmentid}/${typeid}`,
          method: 'get'
        })
      },
      // 4.16 主页持续集成成功TOP5
      metricCisuccess: ({ departmentid, typeid }: any) => {
        return instance({
          url: `/v1.0/home/metric/cisuccess/${departmentid}/${typeid}`,
          method: 'get'
        })
      },
      // 4.16 主页持续集成失败TOP5
      metricCifailure: ({ departmentid, typeid }: any) => {
        return instance({
          url: `/v1.0/home/metric/cifailure/${departmentid}/${typeid}`,
          method: 'get'
        })
      },

      // 用户权限配置模块-获取全部
      userauthsGet: () => {
        return instance({
          url: '/v1.0/sysconfig/userauths/',
          method: 'get'
        })
      },

      // 用户权限配置模块-新增用户
      userauthPost: (data: any) => {
        return instance({
          url: '/v1.0/sysconfig/userauth',
          method: 'post',
          data: data
        })
      },

      // 用户权限配置模块-查询用户
      userauthSearch: (name: any) => {
        return instance({
          url: `/v1.0/sysconfig/userauth/search/${name}`,
          method: 'get'
        })
      },

      // 用户权限配置模块-删除用户
      userauthDelete: ({ departmentid, id }: any) => {
        return instance({
          url: `/v1.0/sysconfig/userauth/${departmentid}/${id}`,
          method: 'delete'
        })
      },

      // 项目参数配置模块-界面字段获取
      projectsConfigfields: () => {
        return instance({
          url: '/v1.0/sysconfig/projects/configfields',
          method: 'get'
        })
      },

      // 项目参数配置模块-模糊查询项目
      projectSearch: (name: any) => {
        return instance({
          url: `/v1.0/sysconfig/project/search/${name || ''}`,
          method: 'get'
        })
      },

      // 项目参数配置模块-根据ID查询项目
      projectId: (id: any) => {
        return instance({
          url: `/v1.0/sysconfig/project/${id}`,
          method: 'get'
        })
      },

      // 项目参数配置模块-修改项目
      projectPut: (data: any) => {
        return instance({
          url: '/v1.0/sysconfig/project',
          method: 'put',
          data
        })
      },

      // 指标参数配置模块-界面字段获取
      metricsConfigfields: () => {
        return instance({
          url: '/v1.0/sysconfig/metrics/configfields',
          method: 'get'
        })
      },

      // 指标参数配置模块-模糊查询指标
      metricSearch: (name: any) => {
        return instance({
          url: `/v1.0/sysconfig/metric/search/${name || ''}`,
          method: 'get'
        })
      },

      // 指标参数配置模块-修改指标
      metricPut: (data: any) => {
        return instance({
          url: '/v1.0/sysconfig/metric',
          method: 'put',
          data
        })
      },

      // 指标参数配置模块-根据ID查询指标
      metricId: (id: any) => {
        return instance({
          url: `/v1.0/sysconfig/metric/${id}`,
          method: 'get'
        })
      }
    }
  }
}
