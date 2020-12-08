import PagingCore, { ILoader } from '../index'
interface IData {
  list: Array<string>
  number: number
  params?: Partial<{ name: string }>
}
const loader: ILoader<Partial<{ name: string }>, IData> = async (
  number,
  params
) => {
  return {
    list: ['1', '2', '3'],
    number,
    params,
  }
}
describe(`PagingCore`, () => {
  beforeEach(() => {})
  it(`[NEW]:normal`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: { name: 'jinc' },
    })
    expect(err).toBe(undefined)
  })
  it(`[NEW]:empty config`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>()
    paging.registered(loader)
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: undefined,
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:setParam`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.setParam('name', 'jinci')
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: { name: 'jinci' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:setPage`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.setPage(3)
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 3,
      params: { name: 'jinc' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:setParams`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.setParams({
      name: 'jinci',
    })
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: { name: 'jinci' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:next`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.next()
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 2,
      params: { name: 'jinc' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:last`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.next()
    paging.last()
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: { name: 'jinc' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:reset`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    paging.setParam('name', 'jinci')
    paging.reset()
    let [data, err]: [IData | void, Error | void] = await paging.load()
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 1,
      params: { name: 'jinc' },
    })
    expect(err).toBe(undefined)
  })
  it(`[API]:getPageData`, async () => {
    const paging = new PagingCore<Partial<{ name: string }>, IData>({
      useCache: true,
      initParams: {
        name: 'jinc',
      },
    })
    paging.registered(loader)
    await paging.load()
    paging.next()
    await paging.load()
    paging.next()
    await paging.load()
    let data: IData | void = paging.getPageData(3)
    expect(data).toEqual({
      list: ['1', '2', '3'],
      number: 3,
      params: { name: 'jinc' },
    })
  })
})
