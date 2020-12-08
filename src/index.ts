export interface ILoader<P, D> {
  (page: number, params?: P): Promise<D>
}
export default class PagingCore<PARAMS, DATA> {
  constructor(
    config: {
      useCache?: boolean
      initParams?: PARAMS
    } = {}
  ) {
    this.useCache = config.useCache
    if (!config.initParams) return
    try {
      this.initParams = JSON.parse(JSON.stringify(config.initParams))
      this.params = JSON.parse(JSON.stringify(config.initParams))
    } catch (error) {
      console.warn(
        `[PagingCore warn]: 'InitParams' copy error! Check your 'InitParams' is a Object type!`
      )
    }
  }
  private useCache: boolean | void
  private cacheData: Array<DATA | void> = []
  private params: PARAMS | undefined
  private initParams: PARAMS | undefined
  private pageNumber: number = 1
  private loader: ILoader<PARAMS, DATA> = async () => {
    console.warn(
      '[PagingCore warn]:Not registered the Loader, use this.registered(fn) method!'
    )
    return ([] as unknown) as DATA
  }
  registered(fn: ILoader<PARAMS, DATA>) {
    this.loader = fn
  }
  async load(): Promise<[DATA | void, Error | void]> {
    let data, err
    try {
      data = await this.loader(this.pageNumber, this.params)
    } catch (error) {
      err = error
    }
    if (this.useCache) {
      this.cacheData[this.pageNumber] = data
    }
    return [data, err]
  }
  setPage(number: number) {
    this.pageNumber = number
  }
  setParam(key: keyof PARAMS, value: PARAMS[keyof PARAMS]) {
    if (!this.params) {
      this.params = ({
        [key]: value,
      } as unknown) as PARAMS
    } else {
      this.params[key] = value
    }
  }
  next() {
    this.pageNumber += 1
  }
  last() {
    this.pageNumber -= 1
  }
  setParams(params: PARAMS) {
    this.params = params
  }
  reset() {
    if (this.initParams) this.setParams(this.initParams)
    else {
      this.params = undefined
    }
  }
  getPageData(page: number): DATA | void {
    return this.cacheData[page]
  }
}
