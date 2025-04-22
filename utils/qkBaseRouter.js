
export class QiankunRouter {
  constructor(base = '', router) {
    console.log(router,'QiankunRouter')
    this.router = router
    this.base = base
  }

  back() {
    this.router.back()
  }

  forward() {
    this.router.forward()
  }

  go(num) {
    this.router.go(num)
  }
  
  // 父应用处理activeRule
  push(params, isBrother = false) {
    if (typeof params === 'string') {
      if(isBrother) {
        this.router.push(params)
        return
      }else {
        this.router.push(this.base + params)
        return
      }
      // this.router.push(this.base + params)
    } else {
      if(isBrother) { 
        const { path } = params
        this.router.push({...params, path:  path })
      }else {
        const { path } = params
        this.router.push({...params, path: this.base + path })
      }
    }
  }
  pushToBrother(params) {
    if (typeof params ==='string') {
      this.router.push(params)
    } else {
      const { path } = params
      this.router.push({...params, path: path })
    }
  }
  replace(params, basestr) {
    if (typeof params === 'string') {
      this.router.replace(this.base + params)
      // this.router.replace(params)

    } else {
      const { path } = params
      this.router.replace({ ...params, path: this.base + path })
    }
  }
}

