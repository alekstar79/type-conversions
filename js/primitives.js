/** @see https://learn.javascript.ru/type-conversions */
// Type conversion

const style = 'text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 1.2em;'
const subtitle = 'text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 2em;'
const title = 'text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 2.6em;'
const link = 'text-decoration: underline; ont-family: monospace;'

;(function() {
  console.group('%cПреобразование типов', title)
  console.log('%chttps://learn.javascript.ru/type-conversions', link)

  console.log('\n%cСтроковое преобразование', subtitle)
  console.log('%chttps://learn.javascript.ru/type-conversions#strokovoe-preobrazovanie\n\n', link)

  let value = true
  console.log(`%clet value = true; typeof value => ${typeof value}`, style)           // boolean

  value = String(value)
  console.log(`%cvalue = String(value); typeof value => ${typeof value}`, style)      // string


  console.log('\n%cЧисленное преобразование', subtitle)
  console.log('%chttps://learn.javascript.ru/type-conversions#chislennoe-preobrazovanie\n\n', link)

  console.log(`%c"6" / "2" => ${'6' / '2'}`, style)                                   // 3

  let str = '123'
  console.log(`%clet str = "123"; typeof str => ${typeof str}`, style)                // string

  let num = Number(str)
  console.log(`%clet num = Number(str); typeof num => ${typeof num}`, style)          // number

  let age = Number('Любая строка вместо числа')
  console.log(`%clet age = Number("Любая строка вместо числа") => ${age}`, style)     // NaN

  console.log(`%c
Значение        Преобразуется в
undefined          ->  NaN
null               ->  0
true/false         ->  1/0
string          Пробельные символы (пробелы, знаки табуляции '\\t', знаки новой строки '\\n' и т. п.)
                по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе
                из непустой строки «считывается» число. При ошибке результат NaN.
\n`, style)

  console.log(`%cNumber("   123   ") => ${Number('   123   ')}`, style)         // 123
  console.log(`%cNumber("123z") => ${Number('123z')}`, style)                   // NaN
  console.log(`%cNumber(true) => ${Number(true)}`, style)                       // 1
  console.log(`%cNumber(false) => ${Number(false)}`, style)                     // 0


  console.log('\n%cЛогическое преобразование', subtitle)
  console.log('%chttps://learn.javascript.ru/type-conversions#logicheskoe-preobrazovanie\n\n', link)

  console.log(`%cBoolean(1) => ${Boolean(1)}`, style)                           // true
  console.log(`%cBoolean(0) => ${Boolean(0)}`, style)                           // false
  console.log(`%cBoolean("Привет!") => ${Boolean('Привет!')}`, style)           // true
  console.log(`%cBoolean("") => ${Boolean('')}`, style)                         // false
  console.log(`%cBoolean("0") => ${Boolean('0')}`, style)                       // true
  console.log(`%cBoolean(" ") => ${Boolean(' ')}\n\n`, style)                   // true

  console.groupEnd()
})()
