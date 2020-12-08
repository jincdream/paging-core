**[paging-core](../README.md)**

> [Globals](../globals.md) / ["index"](../modules/_index_.md) / PagingCore

# Class: PagingCore\<PARAMS, DATA>

## Type parameters

Name |
------ |
`PARAMS` |
`DATA` |

## Hierarchy

* **PagingCore**

## Index

### Constructors

* [constructor](_index_.pagingcore.md#constructor)

### Properties

* [cacheData](_index_.pagingcore.md#cachedata)
* [initParams](_index_.pagingcore.md#initparams)
* [pageNumber](_index_.pagingcore.md#pagenumber)
* [params](_index_.pagingcore.md#params)
* [useCache](_index_.pagingcore.md#usecache)

### Methods

* [getPageData](_index_.pagingcore.md#getpagedata)
* [last](_index_.pagingcore.md#last)
* [load](_index_.pagingcore.md#load)
* [loader](_index_.pagingcore.md#loader)
* [next](_index_.pagingcore.md#next)
* [registered](_index_.pagingcore.md#registered)
* [reset](_index_.pagingcore.md#reset)
* [setPage](_index_.pagingcore.md#setpage)
* [setParam](_index_.pagingcore.md#setparam)
* [setParams](_index_.pagingcore.md#setparams)

## Constructors

### constructor

\+ **new PagingCore**(`config?`: { initParams?: PARAMS ; useCache?: undefined \| false \| true  }): [PagingCore](_index_.pagingcore.md)

*Defined in [index.ts:4](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | { initParams?: PARAMS ; useCache?: undefined \| false \| true  } | {} |

**Returns:** [PagingCore](_index_.pagingcore.md)

## Properties

### cacheData

• `Private` **cacheData**: Array\<DATA \| void> = []

*Defined in [index.ts:23](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L23)*

___

### initParams

• `Private` **initParams**: PARAMS \| undefined

*Defined in [index.ts:25](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L25)*

___

### pageNumber

• `Private` **pageNumber**: number = 1

*Defined in [index.ts:26](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L26)*

___

### params

• `Private` **params**: PARAMS \| undefined

*Defined in [index.ts:24](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L24)*

___

### useCache

• `Private` **useCache**: boolean \| void

*Defined in [index.ts:22](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L22)*

## Methods

### getPageData

▸ **getPageData**(`page`: number): DATA \| void

*Defined in [index.ts:75](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L75)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | number |

**Returns:** DATA \| void

___

### last

▸ **last**(): void

*Defined in [index.ts:63](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L63)*

**Returns:** void

___

### load

▸ **load**(): Promise\<[DATA \| void, Error \| void]>

*Defined in [index.ts:36](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L36)*

**Returns:** Promise\<[DATA \| void, Error \| void]>

___

### loader

▸ `Private`**loader**(): Promise\<DATA>

*Defined in [index.ts:27](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L27)*

**Returns:** Promise\<DATA>

___

### next

▸ **next**(): void

*Defined in [index.ts:60](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L60)*

**Returns:** void

___

### registered

▸ **registered**(`fn`: [ILoader](../interfaces/_index_.iloader.md)\<PARAMS, DATA>): void

*Defined in [index.ts:33](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L33)*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [ILoader](../interfaces/_index_.iloader.md)\<PARAMS, DATA> |

**Returns:** void

___

### reset

▸ **reset**(): void

*Defined in [index.ts:69](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L69)*

**Returns:** void

___

### setPage

▸ **setPage**(`number`: number): void

*Defined in [index.ts:48](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L48)*

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** void

___

### setParam

▸ **setParam**(`key`: keyof PARAMS, `value`: PARAMS[keyof PARAMS]): void

*Defined in [index.ts:51](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L51)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof PARAMS |
`value` | PARAMS[keyof PARAMS] |

**Returns:** void

___

### setParams

▸ **setParams**(`params`: PARAMS): void

*Defined in [index.ts:66](https://github.com/jincdream/paging-core/blob/0a17133/src/index.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | PARAMS |

**Returns:** void
