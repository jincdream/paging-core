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

\+ **new PagingCore**(`initParams?`: PARAMS): [PagingCore](_index_.pagingcore.md)

*Defined in [index.ts:4](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`initParams?` | PARAMS |

**Returns:** [PagingCore](_index_.pagingcore.md)

## Properties

### cacheData

• `Private` **cacheData**: Array\<DATA \| void> = []

*Defined in [index.ts:16](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L16)*

___

### initParams

• `Private` **initParams**: PARAMS \| undefined

*Defined in [index.ts:18](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L18)*

___

### pageNumber

• `Private` **pageNumber**: number = 1

*Defined in [index.ts:19](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L19)*

___

### params

• `Private` **params**: PARAMS \| undefined

*Defined in [index.ts:17](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L17)*

## Methods

### getPageData

▸ **getPageData**(`page`: number): DATA \| void

*Defined in [index.ts:66](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | number |

**Returns:** DATA \| void

___

### last

▸ **last**(): void

*Defined in [index.ts:54](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L54)*

**Returns:** void

___

### load

▸ **load**(): Promise\<[DATA \| void, Error \| void]>

*Defined in [index.ts:29](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L29)*

**Returns:** Promise\<[DATA \| void, Error \| void]>

___

### loader

▸ `Private`**loader**(): Promise\<DATA>

*Defined in [index.ts:20](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L20)*

**Returns:** Promise\<DATA>

___

### next

▸ **next**(): void

*Defined in [index.ts:51](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L51)*

**Returns:** void

___

### registered

▸ **registered**(`fn`: [ILoader](../interfaces/_index_.iloader.md)\<PARAMS, DATA>): void

*Defined in [index.ts:26](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [ILoader](../interfaces/_index_.iloader.md)\<PARAMS, DATA> |

**Returns:** void

___

### reset

▸ **reset**(): void

*Defined in [index.ts:60](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L60)*

**Returns:** void

___

### setPage

▸ **setPage**(`number`: number): void

*Defined in [index.ts:39](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`number` | number |

**Returns:** void

___

### setParam

▸ **setParam**(`key`: keyof PARAMS, `value`: PARAMS[keyof PARAMS]): void

*Defined in [index.ts:42](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | keyof PARAMS |
`value` | PARAMS[keyof PARAMS] |

**Returns:** void

___

### setParams

▸ **setParams**(`params`: PARAMS): void

*Defined in [index.ts:57](https://github.com/jincdream/paging-core/blob/a3de0d6/src/index.ts#L57)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | PARAMS |

**Returns:** void
