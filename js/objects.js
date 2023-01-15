/** @see https://learn.javascript.ru/object-toprimitive */
// Converting objects to primitives

console.group('%cПреобразование объектов в примитивы', title)
console.log('%chttps://learn.javascript.ru/object-toprimitive', link)

console.log('\n%cХинты', subtitle)
console.log('%chttps://learn.javascript.ru/object-toprimitive#hinty\n', link)

console.log(`%c
Существует три варианта преобразования типов, которые происходят в различных ситуациях.
Они называются «хинтами», как описано в спецификации:

"string"

  Для преобразования объекта к строке, когда мы выполняем операцию над объектом,
  которая ожидает строку, например alert:
`, style)

let obj = { id: 42 }

let user = {
  name: 'John',
  money: 1000
}

console.log(`%c
let obj = { id: 42 }

let user = {
  name: 'John',
  money: 1000
}
\n`, style)

// hint: "string"
console.log('%chint: "string"', style)
console.log(`%calert(user) => ${String(user)}`, style)          // [object Object]

user[obj] = 123

// hint: "string"
console.log('\n%chint: "string"', style)
console.log('%cиспользуем объект в качестве ключа', style)
console.log('%cuser[obj] = 123', style)
console.log(`%cconsole.log(user) =>`, style, user)                    // { name: 'John', money: 1000, '[object Object]': 123 }

// hint: "number"
;(function() {
  let num = Number(user)
  console.log('\n%chint: "number"', style)
  console.log('%clet num = Number(user)', style)
  console.log(`%cconsole.log(num) =>`, style, num)                    // NaN
})()

// hint: "number"
;(function() {
  let num = +user
  console.log('\n%chint: "number"', style)
  console.log('%clet num = +user', style)
  console.log(`%cconsole.log(num) =>`, style, num)                    // NaN
})()

// hint: "default"
;(function() {
  let total = user + obj
  console.log('\n%chint: "default"', style)
  console.log('%clet total = user + obj', style)
  console.log(`%cconsole.log(total) =>`, style, total)                // [object Object][object Object]
})()

// hint: "default"
console.log('\n%chint: "default"', style)
console.log(`%cconsole.log(user == 1) =>`, style, user == 1)          // false


console.log('\n%cSymbol.toPrimitive', subtitle)
console.log('%chttps://learn.javascript.ru/object-toprimitive#symbol-toprimitive', link)

user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    return hint == 'string' ? `{name: '${this.name}'}` : this.money
  }
}

console.log(`%c
user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    return hint == 'string' ? \`{name: '\${this.name}'}\` : this.money
  }
}
\n`, style)

// hint: "string"
console.log('\n%chint: "string"', style)
console.log(`%calert(user) => ${String(user)}`, style)        // {name: "John"}

// hint: "number"
console.log('\n%chint: "number"', style)
console.log(`%calert(+user) => ${Number(user)}`, style)       // 1000


console.log('\n%ctoString/valueOf', subtitle)
console.log('%chttps://learn.javascript.ru/object-toprimitive#tostring-valueof', link)

user = {
  name: 'John',
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: '${this.name}'}`
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money
  }
}

console.log(`%c
user = {
  name: 'John',
  money: 1000,

  // для хинта равного "string"
  toString() {
    return \`{name: '\${this.name}'}\`
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money
  }
}
\n`, style)

console.log(`%calert(user) // toString => ${String(user)}`, style)        // {name: "John"}
console.log(`%calert(+user) // valueOf => ${Number(user)}`, style)        // 1000


console.log('\n%cДальнейшие преобразования', subtitle)
console.log('%chttps://learn.javascript.ru/object-toprimitive#dalneyshie-preobrazovaniya', link)

console.log(`%c
Многие операторы и функции выполняют преобразования типов, например,
умножение * преобразует операнды в числа.

Если мы передаём объект в качестве аргумента, то в вычислениях будут две стадии:

  1. Объект преобразуется в примитив (с использованием правил, описанных выше).
  2. Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше.

Например:
`, style)

obj = {
  toString() {
    return '2'
  }
}

console.log(`%c
obj = {
  toString() {
    return '2'
  }
}
`, style)

console.log(`\n
%calert(obj * 2) => 4\n
  1. Умножение obj * 2 сначала преобразует объект в примитив (это строка "2")
  2. Затем "2" * 2 становится 2 * 2 (строка преобразуется в число)
`, style)

console.log('\n%cБинарный плюс в подобной ситуации соединил бы строки:', style)
console.log('\n%calert(obj + 2) => 22\n', style)

console.groupEnd()
