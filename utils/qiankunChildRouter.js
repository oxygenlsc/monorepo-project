import {useRouter} from 'vue-router'

class Router {
  constructor() {
    // 非qiankun模式下，直接走子应用自身的路由
    this.router = useRouter()
    // qiankun模式下，如果是子应用处理activeRule可以使用preRouter
    this.preRouter = ''
  }

  setRouter(router) {
    // qiankun模式下，将父应用路由传递过来并接收
    this.router = router
  }
  
  // 这里也可以做其他处理，比如处理activeRule
  setPreRouter(preString) {
    this.preRouter = preString
  }
  // 子应用处理activeRule
  push(params, isBrother, preRouter = '') {
    if (typeof params === 'string') {
      console.log(this.router,'this.push')
      this.router.push((preRouter || this.preRouter) + params, isBrother)
    } else {
      const { path } = params
      this.router.push({ ...params, path: (preRouter || this.preRouter) + path }, isBrother)
    }
  }
  pushToBrother(params) {
    if (typeof params === 'string') {
      console.log(this.router,'this.push')
      this.router.pushToBorther(params)
    } else {
      const { path } = params
      this.router.pushToBorther({ ...params, path: path })
    }
  }
  replace(params, preRouter = '') {
    if (typeof params === 'string') {
      this.router.replace((preRouter || this.preRouter) + params)
    } else {
      const { path } = params
      this.router.replace({ ...params, path: (preRouter || this.preRouter) + path })
    }
  }
}

export const qiankunRouter = new Router()
