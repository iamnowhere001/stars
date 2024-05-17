/**
 * 解析URL查询字符串并返回一个对象
 * @param {string} url - 包含查询字符串的URL
 * @return {Object} 解析后的查询参数对象。如果参数重复，则以数组形式存储。
 */
function parseUrl(url) {
  // 从URL中分割出查询字符串部分
  const urlArr = url.split('?')[1]
  // 将查询字符串分割为参数数组
  const paramsArr = urlArr.split('&')
  const result = {}

  // 遍历参数数组，构建结果对象
  paramsArr.forEach((item) => {
    // 将参数分割为键和值
    const [key, value] = item.split('=')
    // 对值进行URL解码
    const decodeValue = decodeURIComponent(value)
    // 判断键是否已存在，如果存在则添加值，如果值是数组则追加值，否则转换为数组并添加值
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(decodeValue)
      } else {
        result[key] = [result[key], decodeValue]
      }
    } else {
      // 如果键不存在，直接设置值
      result[key] = decodeValue
    }
  })

  return result
}

// const url = 'https://www.juejin.cn?user=gs&user=gt&id=1&name=%E5%BC%A0%E4%B8%89'
// console.log(parseUrl(url))

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const result = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key])
    }
  }

  return result
}

const obj = {
  name: 'Tom',
  age: 18,
  friends: ['Jerry', 'Bob'],
  pet: {
    type: 'cat',
    name: 'Kitty'
  }
}

// console.log(deepCopy(obj))

function deepClone(value, map = new WeakMap()) {
  // 处理循环引用
  if (map.has(value)) {
    return map.get(value)
  }

  // 处理基本数据类型
  if (typeof value !== 'object' || value === null) {
    return value
  }

  // 处理Date对象
  if (value instanceof Date) {
    return new Date(value)
  }

  // 处理正则表达式对象
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags)
  }

  // 处理Map和Set
  if (value instanceof Map) {
    map.set(value, value)
    return new Map(value)
  }

  if (value instanceof Set) {
    map.set(value, value)
    return new Set(value)
  }

  // 处理数组和对象
  const cloneValue = Array.isArray(value) ? [] : {}
  map.set(value, cloneValue)

  for (const key in value) {
    // 不拷贝原型链上的属性
    if (!value.hasOwnProperty(key)) {
      continue
    }
    // 递归拷贝每个属性值
    cloneValue[key] = deepClone(value[key], map)
  }

  // 处理对象的Symbol属性
  const symbolKeys = Object.getOwnPropertySymbols(value)
  for (const sKey of symbolKeys) {
    cloneValue[sKey] = deepClone(value[sKey], map)
  }

  return cloneValue
}

// 使用示例
const original = {
  number: 1,
  string: 'string',
  boolean: true,
  null: null,
  undefined: undefined,
  date: new Date(),
  regexp: /regexp/gi,
  array: [1, 2, 3],
  object: { key: 'value' },
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  func: function () {
    console.log('function')
  },
  // 自引用
  self: null
}

original.self = original

const cloned = deepClone(original)
console.log(cloned)
