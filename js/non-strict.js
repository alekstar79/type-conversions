/** @see https://262.ecma-international.org/5.1/#sec-11.9 */
// Non-strict equality table

/*
* Интерпретатор приведёт примитивные значения к логическим, если мы используем && или ||.
* К строке, если мы используем +, когда один из операндов — строка.
* К числу, если:
*
*   мы используем операторы сравнения <, <=, >, >=;
*   используем арифметические операции -, + (за исключением пункта 2), /, *.
*   используем унарный плюс: +'2' === 2;
*   используем оператор нестрогого сравнения ==
*/

const set = [
  { key: 'true', val1: true, val2: true },
  { key: 'false', val1: false, val2: false },
  { key: '1', val1: 1, val2: 1 },
  { key: '0', val1: 0, val2: 0 },
  { key: '-1', val1: -1, val2: -1 },
  { key: '"true"', val1: 'true', val2: 'true' },
  { key: '"false"', val1: 'false', val2: 'false' },
  { key: '"1"', val1: '1', val2: '1' },
  { key: '"0"', val1: '0', val2: '0' },
  { key: '"-1"', val1: '-1', val2: '-1' },
  { key: '""', val1: '', val2: '' },
  { key: 'null', val1: null, val2: null },
  { key: 'undefined', val1: undefined, val2: undefined },
  { key: 'Infinity', val1: Infinity, val2: Infinity },
  { key: '-Infinity', val1: -Infinity, val2: -Infinity },
  { key: '[]', val1: [], val2: [] },
  { key: '{}', val1: {}, val2: {} },
  { key: '[[]]', val1: [[]], val2: [[]] },
  { key: '[0]', val1: [0], val2: [0] },
  { key: '[1]', val1: [1], val2: [1] },
  { key: 'NaN', val1: NaN, val2: NaN },
  { key: 'lb', val1: '\n' }
]

console.log('\n')

typeof process === 'undefined'
  ? (function(set) {
    console.group(`%cТаблица нестрогого равенства`, title)
    console.log('%chttps://262.ecma-international.org/5.1/#sec-11.9\n\n', link)
    loop((row, col) => console.log(`%c${row.key} == ${col.key}: ${row.val1 == col.val2}`, style), set)

  })(set)
  : (function(set) {
    console.group('Таблица нестрогого равенства')
    console.log('https://262.ecma-international.org/5.1/#sec-11.9\n')
    loop((row, col) => console.log(`${row.key} == ${col.key}: ${row.val1 == col.val2}`), set)

  })(set)

function loop(callback, set)
{
  for (const row of set) {
    if (row.key === 'lb') break

    for (const col of set) {
      if (col.key === 'lb') {
        console.log(col.val1)
        break
      }

      callback(row, col)
    }
  }
}

console.groupEnd()

// console.log('true == true:', true == true)                          // true
// console.log('true == false:', true == false)                        // false
// console.log('true == 1:', true == 1)                                // true
// console.log('true == 0:', true == 0)                                // false
// console.log('true == -1:', true == -1)                              // false
// console.log('true == "true":', true == 'true')                      // false
// console.log('true == "false":', true == 'false')                    // false
// console.log('true == "1":', true == '1')                            // true
// console.log('true == "0":', true == '0')                            // false
// console.log('true == "-1":', true == '-1')                          // false
// console.log('true == "":', true == '')                              // false
// console.log('true == null:', true == null)                          // false
// console.log('true == undefined:', true == undefined)                // false
// console.log('true == Infinity:', true == Infinity)                  // false
// console.log('true == -Infinity:', true == -Infinity)                // false
// console.log('true == []:', true == [])                              // false
// console.log('true == {}:', true == {})                              // false
// console.log('true == [[]]:', true == [[]])                          // false
// console.log('true == [0]:', true == [0])                            // false
// console.log('true == [1]:', true == [1])                            // true
// console.log('true == NaN:', true == NaN)                            // false


// console.log('false == true:', false == true)                        // false
// console.log('false == false:', false == false)                      // true
// console.log('false == 1:', false == 1)                              // false
// console.log('false == 0:', false == 0)                              // true
// console.log('false == -1:', false == -1)                            // false
// console.log('false == "true":', false == 'true')                    // false
// console.log('false == "false":', false == 'false')                  // false
// console.log('false == "1":', false == '1')                          // false
// console.log('false == "0":', false == '0')                          // true
// console.log('false == "-1":', false == '-1')                        // false
// console.log('false == "":', false == '')                            // true
// console.log('false == null:', false == null)                        // false
// console.log('false == undefined:', false == undefined)              // false
// console.log('false == Infinity:', false == Infinity)                // false
// console.log('false == -Infinity:', false == -Infinity)              // false
// console.log('false == []:', false == [])                            // true
// console.log('false == {}:', false == {})                            // false
// console.log('false == [[]]:', false == [[]])                        // true
// console.log('false == [0]:', false == [0])                          // true
// console.log('false == [1]:', false == [1])                          // false
// console.log('false == NaN:', false == NaN)                          // false


// console.log('1 == true:', 1 == true)                                // true
// console.log('1 == false:', 1 == false)                              // false
// console.log('1 == 1:', 1 == 1)                                      // true
// console.log('1 == 0:', 1 == 0)                                      // false
// console.log('1 == -1:', 1 == -1)                                    // false
// console.log('1 == "true":', 1 == 'true')                            // false
// console.log('1 == "false":', 1 == 'false')                          // false
// console.log('1 == "1":', 1 == '1')                                  // true
// console.log('1 == "0":', 1 == '0')                                  // false
// console.log('1 == "-1":', 1 == '-1')                                // false
// console.log('1 == "":', 1 == '')                                    // false
// console.log('1 == null:', 1 == null)                                // false
// console.log('1 == undefined:', 1 == undefined)                      // false
// console.log('1 == Infinity:', 1 == Infinity)                        // false
// console.log('1 == -Infinity:', 1 == -Infinity)                      // false
// console.log('1 == []:', 1 == [])                                    // false
// console.log('1 == {}:', 1 == {})                                    // false
// console.log('1 == [[]]:', 1 == [[]])                                // false
// console.log('1 == [0]:', 1 == [0])                                  // false
// console.log('1 == [1]:', 1 == [1])                                  // true
// console.log('1 == NaN:', 1 == NaN)                                  // false


// console.log('0 == true:', 0 == true)                                // false
// console.log('0 == false:', 0 == false)                              // true
// console.log('0 == 1:', 0 == 1)                                      // false
// console.log('0 == 0:', 0 == 0)                                      // true
// console.log('0 == -1:', 0 == -1)                                    // false
// console.log('0 == "true":', 0 == 'true')                            // false
// console.log('0 == "false":', 0 == 'false')                          // false
// console.log('0 == "1":', 0 == '1')                                  // false
// console.log('0 == "0":', 0 == '0')                                  // true
// console.log('0 == "-1":', 0 == '-1')                                // false
// console.log('0 == "":', 0 == '')                                    // true
// console.log('0 == null:', 0 == null)                                // false
// console.log('0 == undefined:', 0 == undefined)                      // false
// console.log('0 == Infinity:', 0 == Infinity)                        // false
// console.log('0 == -Infinity:', 0 == -Infinity)                      // false
// console.log('0 == []:', 0 == [])                                    // true
// console.log('0 == {}:', 0 == {})                                    // false
// console.log('0 == [[]]:', 0 == [[]])                                // true
// console.log('0 == [0]:', 0 == [0])                                  // true
// console.log('0 == [1]:', 0 == [1])                                  // false
// console.log('0 == NaN:', 0 == NaN)                                  // false


// console.log('-1 == true:', -1 == true)                              // false
// console.log('-1 == false:', -1 == false)                            // false
// console.log('-1 == 1:', -1 == 1)                                    // false
// console.log('-1 == 0:', -1 == 0)                                    // false
// console.log('-1 == -1:', -1 == -1)                                  // true
// console.log('-1 == "true":', -1 == 'true')                          // false
// console.log('-1 == "false":', -1 == 'false')                        // false
// console.log('-1 == "1":', -1 == '1')                                // false
// console.log('-1 == "0":', -1 == '0')                                // false
// console.log('-1 == "-1":', -1 == '-1')                              // true
// console.log('-1 == "":', -1 == '')                                  // false
// console.log('-1 == null:', -1 == null)                              // false
// console.log('-1 == undefined:', -1 == undefined)                    // false
// console.log('-1 == Infinity:', -1 == Infinity)                      // false
// console.log('-1 == -Infinity:', -1 == -Infinity)                    // false
// console.log('-1 == []:', -1 == [])                                  // false
// console.log('-1 == {}:', -1 == {})                                  // false
// console.log('-1 == [[]]:', -1 == [[]])                              // false
// console.log('-1 == [0]:', -1 == [0])                                // false
// console.log('-1 == [1]:', -1 == [1])                                // false
// console.log('-1 == NaN:', -1 == NaN)                                // false


// console.log('"true" == true:', 'true' == true)                      // false
// console.log('"true" == false:', 'true' == false)                    // false
// console.log('"true" == 1:', 'true' == 1)                            // false
// console.log('"true" == 0:', 'true' == 0)                            // false
// console.log('"true" == -1:', 'true' == -1)                          // false
// console.log('"true" == "true":', 'true' == 'true')                  // true
// console.log('"true" == "false":', 'true' == 'false')                // false
// console.log('"true" == "1":', 'true' == '1')                        // false
// console.log('"true" == "0":', 'true' == '0')                        // false
// console.log('"true" == "-1":', 'true' == '-1')                      // false
// console.log('"true" == "":', 'true' == '')                          // false
// console.log('"true" == null:', 'true' == null)                      // false
// console.log('"true" == undefined:', 'true' == undefined)            // false
// console.log('"true" == Infinity:', 'true' == Infinity)              // false
// console.log('"true" == -Infinity:', 'true' == -Infinity)            // false
// console.log('"true" == []:', 'true' == [])                          // false
// console.log('"true" == {}:', 'true' == {})                          // false
// console.log('"true" == [[]]:', 'true' == [[]])                      // false
// console.log('"true" == [0]:', 'true' == [0])                        // false
// console.log('"true" == [1]:', 'true' == [1])                        // false
// console.log('"true" == NaN:', 'true' == NaN)                        // false


// console.log('"false" == true:', 'false' == true)                    // false
// console.log('"false" == false:', 'false' == false)                  // false
// console.log('"false" == 1:', 'false' == 1)                          // false
// console.log('"false" == 0:', 'false' == 0)                          // false
// console.log('"false" == -1:', 'false' == -1)                        // false
// console.log('"false" == "true":', 'false' == 'true')                // false
// console.log('"false" == "false":', 'false' == 'false')              // true
// console.log('"false" == "1":', 'false' == '1')                      // false
// console.log('"false" == "0":', 'false' == '0')                      // false
// console.log('"false" == "-1":', 'false' == '-1')                    // false
// console.log('"false" == "":', 'false' == '')                        // false
// console.log('"false" == null:', 'false' == null)                    // false
// console.log('"false" == undefined:', 'false' == undefined)          // false
// console.log('"false" == Infinity:', 'false' == Infinity)            // false
// console.log('"false" == -Infinity:', 'false' == -Infinity)          // false
// console.log('"false" == []:', 'false' == [])                        // false
// console.log('"false" == {}:', 'false' == {})                        // false
// console.log('"false" == [[]]:', 'false' == [[]])                    // false
// console.log('"false" == [0]:', 'false' == [0])                      // false
// console.log('"false" == [1]:', 'false' == [1])                      // false
// console.log('"false" == NaN:', 'false' == NaN)                      // false


// console.log('"1" == true:', '1' == true)                            // true
// console.log('"1" == false:', '1' == false)                          // false
// console.log('"1" == 1:', '1' == 1)                                  // true
// console.log('"1" == 0:', '1' == 0)                                  // false
// console.log('"1" == -1:', '1' == -1)                                // false
// console.log('"1" == "true":', '1' == 'true')                        // false
// console.log('"1" == "false":', '1' == 'false')                      // false
// console.log('"1" == "1":', '1' == '1')                              // true
// console.log('"1" == "0":', '1' == '0')                              // false
// console.log('"1" == "-1":', '1' == '-1')                            // false
// console.log('"1" == "":', '1' == '')                                // false
// console.log('"1" == null:', '1' == null)                            // false
// console.log('"1" == undefined:', '1' == undefined)                  // false
// console.log('"1" == Infinity:', '1' == Infinity)                    // false
// console.log('"1" == -Infinity:', '1' == -Infinity)                  // false
// console.log('"1" == []:', '1' == [])                                // false
// console.log('"1" == {}:', '1' == {})                                // false
// console.log('"1" == [[]]:', '1' == [[]])                            // false
// console.log('"1" == [0]:', '1' == [0])                              // false
// console.log('"1" == [1]:', '1' == [1])                              // true
// console.log('"1" == NaN:', '1' == NaN)                              // false


// console.log('"0" == true:', '0' == true)                            // false
// console.log('"0" == false:', '0' == false)                          // true
// console.log('"0" == 1:', '0' == 1)                                  // false
// console.log('"0" == 0:', '0' == 0)                                  // true
// console.log('"0" == -1:', '0' == -1)                                // false
// console.log('"0" == "true":', '0' == 'true')                        // false
// console.log('"0" == "false":', '0' == 'false')                      // false
// console.log('"0" == "1":', '0' == '1')                              // false
// console.log('"0" == "0":', '0' == '0')                              // true
// console.log('"0" == "-1":', '0' == '-1')                            // false
// console.log('"0" == "":', '0' == '')                                // false
// console.log('"0" == null:', '0' == null)                            // false
// console.log('"0" == undefined:', '0' == undefined)                  // false
// console.log('"0" == Infinity:', '0' == Infinity)                    // false
// console.log('"0" == -Infinity:', '0' == -Infinity)                  // false
// console.log('"0" == []:', '0' == [])                                // false
// console.log('"0" == {}:', '0' == {})                                // false
// console.log('"0" == [[]]:', '0' == [[]])                            // false
// console.log('"0" == [0]:', '0' == [0])                              // true
// console.log('"0" == [1]:', '0' == [1])                              // false
// console.log('"0" == NaN:', '0' == NaN)                              // false


// console.log('"-1" == true:', '-1' == true)                          // false
// console.log('"-1" == false:', '-1' == false)                        // false
// console.log('"-1" == 1:', '-1' == 1)                                // false
// console.log('"-1" == 0:', '-1' == 0)                                // false
// console.log('"-1" == -1:', '-1' == -1)                              // true
// console.log('"-1" == "true":', '-1' == 'true')                      // false
// console.log('"-1" == "false":', '-1' == 'false')                    // false
// console.log('"-1" == "1":', '-1' == '1')                            // false
// console.log('"-1" == "0":', '-1' == '0')                            // false
// console.log('"-1" == "-1":', '-1' == '-1')                          // true
// console.log('"-1" == "":', '-1' == '')                              // false
// console.log('"-1" == null:', '-1' == null)                          // false
// console.log('"-1" == undefined:', '-1' == undefined)                // false
// console.log('"-1" == Infinity:', '-1' == Infinity)                  // false
// console.log('"-1" == -Infinity:', '-1' == -Infinity)                // false
// console.log('"-1" == []:', '-1' == [])                              // false
// console.log('"-1" == {}:', '-1' == {})                              // false
// console.log('"-1" == [[]]:', '-1' == [[]])                          // false
// console.log('"-1" == [0]:', '-1' == [0])                            // false
// console.log('"-1" == [1]:', '-1' == [1])                            // false
// console.log('"-1" == NaN:', '-1' == NaN)                            // false


// console.log('"" == true:', '' == true)                              // false
// console.log('"" == false:', '' == false)                            // true
// console.log('"" == 1:', '' == 1)                                    // false
// console.log('"" == 0:', '' == 0)                                    // true
// console.log('"" == -1:', '' == -1)                                  // false
// console.log('"" == "true":', '' == 'true')                          // false
// console.log('"" == "false":', '' == 'false')                        // false
// console.log('"" == "1":', '' == '1')                                // false
// console.log('"" == "0":', '' == '0')                                // false
// console.log('"" == "-1":', '' == '-1')                              // false
// console.log('"" == "":', '' == '')                                  // true
// console.log('"" == null:', '' == null)                              // false
// console.log('"" == undefined:', '' == undefined)                    // false
// console.log('"" == Infinity:', '' == Infinity)                      // false
// console.log('"" == -Infinity:', '' == -Infinity)                    // false
// console.log('"" == []:', '' == [])                                  // true
// console.log('"" == {}:', '' == {})                                  // false
// console.log('"" == [[]]:', '' == [[]])                              // true
// console.log('"" == [0]:', '' == [0])                                // false
// console.log('"" == [1]:', '' == [1])                                // false
// console.log('"" == NaN:', '' == NaN)                                // false


// console.log('null == true:', null == true)                          // false
// console.log('null == false:', null == false)                        // false
// console.log('null == 1:', null == 1)                                // false
// console.log('null == 0:', null == 0)                                // false
// console.log('null == -1:', null == -1)                              // false
// console.log('null == "true":', null == 'true')                      // false
// console.log('null == "false":', null == 'false')                    // false
// console.log('null == "1":', null == '1')                            // false
// console.log('null == "0":', null == '0')                            // false
// console.log('null == "-1":', null == '-1')                          // false
// console.log('null == "":', null == '')                              // false
// console.log('null == null:', null == null)                          // true
// console.log('null == undefined:', null == undefined)                // true
// console.log('null == Infinity:', null == Infinity)                  // false
// console.log('null == -Infinity:', null == -Infinity)                // false
// console.log('null == []:', null == [])                              // false
// console.log('null == {}:', null == {})                              // false
// console.log('null == [[]]:', null == [[]])                          // false
// console.log('null == [0]:', null == [0])                            // false
// console.log('null == [1]:', null == [1])                            // false
// console.log('null == NaN:', null == NaN)                            // false


// console.log('undefined == true:', undefined == true)                // false
// console.log('undefined == false:', undefined == false)              // false
// console.log('undefined == 1:', undefined == 1)                      // false
// console.log('undefined == 0:', undefined == 0)                      // false
// console.log('undefined == -1:', undefined == -1)                    // false
// console.log('undefined == "true":', undefined == 'true')            // false
// console.log('undefined == "false":', undefined == 'false')          // false
// console.log('undefined == "1":', undefined == '1')                  // false
// console.log('undefined == "0":', undefined == '0')                  // false
// console.log('undefined == "-1":', undefined == '-1')                // false
// console.log('undefined == "":', undefined == '')                    // false
// console.log('undefined == null:', undefined == null)                // true
// console.log('undefined == undefined:', undefined == undefined)      // true
// console.log('undefined == Infinity:', undefined == Infinity)        // false
// console.log('undefined == -Infinity:', undefined == -Infinity)      // false
// console.log('undefined == []:', undefined == [])                    // false
// console.log('undefined == {}:', undefined == {})                    // false
// console.log('undefined == [[]]:', undefined == [[]])                // false
// console.log('undefined == [0]:', undefined == [0])                  // false
// console.log('undefined == [1]:', undefined == [1])                  // false
// console.log('undefined == NaN:', undefined == NaN)                  // false


// console.log('Infinity == true:', Infinity == true)                  // false
// console.log('Infinity == false:', Infinity == false)                // false
// console.log('Infinity == 1:', Infinity == 1)                        // false
// console.log('Infinity == 0:', Infinity == 0)                        // false
// console.log('Infinity == -1:', Infinity == -1)                      // false
// console.log('Infinity == "true":', Infinity == 'true')              // false
// console.log('Infinity == "false":', Infinity == 'false')            // false
// console.log('Infinity == "1":', Infinity == '1')                    // false
// console.log('Infinity == "0":', Infinity == '0')                    // false
// console.log('Infinity == "-1":', Infinity == '-1')                  // false
// console.log('Infinity == "":', Infinity == '')                      // false
// console.log('Infinity == null:', Infinity == null)                  // false
// console.log('Infinity == undefined:', Infinity == undefined)        // false
// console.log('Infinity == Infinity:', Infinity == Infinity)          // true
// console.log('Infinity == -Infinity:', Infinity == -Infinity)        // false
// console.log('Infinity == []:', Infinity == [])                      // false
// console.log('Infinity == {}:', Infinity == {})                      // false
// console.log('Infinity == [[]]:', Infinity == [[]])                  // false
// console.log('Infinity == [0]:', Infinity == [0])                    // false
// console.log('Infinity == [1]:', Infinity == [1])                    // false
// console.log('Infinity == NaN:', Infinity == NaN)                    // false


// console.log('-Infinity == true:', -Infinity == true)                // false
// console.log('-Infinity == false:', -Infinity == false)              // false
// console.log('-Infinity == 1:', -Infinity == 1)                      // false
// console.log('-Infinity == 0:', -Infinity == 0)                      // false
// console.log('-Infinity == -1:', -Infinity == -1)                    // false
// console.log('-Infinity == "true":', -Infinity == 'true')            // false
// console.log('-Infinity == "false":', -Infinity == 'false')          // false
// console.log('-Infinity == "1":', -Infinity == '1')                  // false
// console.log('-Infinity == "0":', -Infinity == '0')                  // false
// console.log('-Infinity == "-1":', -Infinity == '-1')                // false
// console.log('-Infinity == "":', -Infinity == '')                    // false
// console.log('-Infinity == null:', -Infinity == null)                // false
// console.log('-Infinity == undefined:', -Infinity == undefined)      // false
// console.log('-Infinity == Infinity:', -Infinity == Infinity)        // false
// console.log('-Infinity == -Infinity:', -Infinity == -Infinity)      // true
// console.log('-Infinity == []:', -Infinity == [])                    // false
// console.log('-Infinity == {}:', -Infinity == {})                    // false
// console.log('-Infinity == [[]]:', -Infinity == [[]])                // false
// console.log('-Infinity == [0]:', -Infinity == [0])                  // false
// console.log('-Infinity == [1]:', -Infinity == [1])                  // false
// console.log('-Infinity == NaN:', -Infinity == NaN)                  // false


// console.log('[] == true:', [] == true)                              // false
// console.log('[] == false:', [] == false)                            // true
// console.log('[] == 1:', [] == 1)                                    // false
// console.log('[] == 0:', [] == 0)                                    // true
// console.log('[] == -1:', [] == -1)                                  // false
// console.log('[] == "true":', [] == 'true')                          // false
// console.log('[] == "false":', [] == 'false')                        // false
// console.log('[] == "1":', [] == '1')                                // false
// console.log('[] == "0":', [] == '0')                                // false
// console.log('[] == "-1":', [] == '-1')                              // false
// console.log('[] == "":', [] == '')                                  // true
// console.log('[] == null:', [] == null)                              // false
// console.log('[] == undefined:', [] == undefined)                    // false
// console.log('[] == Infinity:', [] == Infinity)                      // false
// console.log('[] == -Infinity:', [] == -Infinity)                    // false
// console.log('[] == []:', [] == [])                                  // false
// console.log('[] == {}:', [] == {})                                  // false
// console.log('[] == [[]]:', [] == [[]])                              // false
// console.log('[] == [0]:', [] == [0])                                // false
// console.log('[] == [1]:', [] == [1])                                // false
// console.log('[] == NaN:', [] == NaN)                                // false


// console.log('{} == true:', {} == true)                              // false
// console.log('{} == false:', {} == false)                            // false
// console.log('{} == 1:', {} == 1)                                    // false
// console.log('{} == 0:', {} == 0)                                    // false
// console.log('{} == -1:', {} == -1)                                  // false
// console.log('{} == "true":', {} == 'true')                          // false
// console.log('{} == "false":', {} == 'false')                        // false
// console.log('{} == "1":', {} == '1')                                // false
// console.log('{} == "0":', {} == '0')                                // false
// console.log('{} == "-1":', {} == '-1')                              // false
// console.log('{} == "":', {} == '')                                  // false
// console.log('{} == null:', {} == null)                              // false
// console.log('{} == undefined:', {} == undefined)                    // false
// console.log('{} == Infinity:', {} == Infinity)                      // false
// console.log('{} == -Infinity:', {} == -Infinity)                    // false
// console.log('{} == []:', {} == [])                                  // false
// console.log('{} == {}:', {} == {})                                  // false
// console.log('{} == [[]]:', {} == [[]])                              // false
// console.log('{} == [0]:', {} == [0])                                // false
// console.log('{} == [1]:', {} == [1])                                // false
// console.log('{} == NaN:', {} == NaN)                                // false


// console.log('[[]] == true:', [[]] == true)                          // false
// console.log('[[]] == false:', [[]] == false)                        // true
// console.log('[[]] == 1:', [[]] == 1)                                // false
// console.log('[[]] == 0:', [[]] == 0)                                // true
// console.log('[[]] == -1:', [[]] == -1)                              // false
// console.log('[[]] == "true":', [[]] == 'true')                      // false
// console.log('[[]] == "false":', [[]] == 'false')                    // false
// console.log('[[]] == "1":', [[]] == '1')                            // false
// console.log('[[]] == "0":', [[]] == '0')                            // false
// console.log('[[]] == "-1":', [[]] == '-1')                          // false
// console.log('[[]] == "":', [[]] == '')                              // true
// console.log('[[]] == null:', [[]] == null)                          // false
// console.log('[[]] == undefined:', [[]] == undefined)                // false
// console.log('[[]] == Infinity:', [[]] == Infinity)                  // false
// console.log('[[]] == -Infinity:', [[]] == -Infinity)                // false
// console.log('[[]] == []:', [[]] == [])                              // false
// console.log('[[]] == {}:', [[]] == {})                              // false
// console.log('[[]] == [[]]:', [[]] == [[]])                          // false
// console.log('[[]] == [0]:', [[]] == [0])                            // false
// console.log('[[]] == [1]:', [[]] == [1])                            // false
// console.log('[[]] == NaN:', [[]] == NaN)                            // false


// console.log('[0] == true:', [0] == true)                            // false
// console.log('[0] == false:', [0] == false)                          // true
// console.log('[0] == 1:', [0] == 1)                                  // false
// console.log('[0] == 0:', [0] == 0)                                  // true
// console.log('[0] == -1:', [0] == -1)                                // false
// console.log('[0] == "true":', [0] == 'true')                        // false
// console.log('[0] == "false":', [0] == 'false')                      // false
// console.log('[0] == "1":', [0] == '1')                              // false
// console.log('[0] == "0":', [0] == '0')                              // true
// console.log('[0] == "-1":', [0] == '-1')                            // false
// console.log('[0] == "":', [0] == '')                                // false
// console.log('[0] == null:', [0] == null)                            // false
// console.log('[0] == undefined:', [0] == undefined)                  // false
// console.log('[0] == Infinity:', [0] == Infinity)                    // false
// console.log('[0] == -Infinity:', [0] == -Infinity)                  // false
// console.log('[0] == []:', [0] == [])                                // false
// console.log('[0] == {}:', [0] == {})                                // false
// console.log('[0] == [[]]:', [0] == [[]])                            // false
// console.log('[0] == [0]:', [0] == [0])                              // false
// console.log('[0] == [1]:', [0] == [1])                              // false
// console.log('[0] == NaN:', [0] == NaN)                              // false


// console.log('[1] == true:', [1] == true)                            // true
// console.log('[1] == false:', [1] == false)                          // false
// console.log('[1] == 1:', [1] == 1)                                  // true
// console.log('[1] == 0:', [1] == 0)                                  // false
// console.log('[1] == -1:', [1] == -1)                                // false
// console.log('[1] == "true":', [1] == 'true')                        // false
// console.log('[1] == "false":', [1] == 'false')                      // false
// console.log('[1] == "1":', [1] == '1')                              // true
// console.log('[1] == "0":', [1] == '0')                              // false
// console.log('[1] == "-1":', [1] == '-1')                            // false
// console.log('[1] == "":', [1] == '')                                // false
// console.log('[1] == null:', [1] == null)                            // false
// console.log('[1] == undefined:', [1] == undefined)                  // false
// console.log('[1] == Infinity:', [1] == Infinity)                    // false
// console.log('[1] == -Infinity:', [1] == -Infinity)                  // false
// console.log('[1] == []:', [1] == [])                                // false
// console.log('[1] == {}:', [1] == {})                                // false
// console.log('[1] == [[]]:', [1] == [[]])                            // false
// console.log('[1] == [0]:', [1] == [0])                              // false
// console.log('[1] == [1]:', [1] == [1])                              // false
// console.log('[1] == NaN:', [1] == NaN)                              // false


// console.log('NaN == true:', NaN == true)                            // false
// console.log('NaN == false:', NaN == false)                          // false
// console.log('NaN == 1:', NaN == 1)                                  // false
// console.log('NaN == 0:', NaN == 0)                                  // false
// console.log('NaN == -1:', NaN == -1)                                // false
// console.log('NaN == "true":', NaN == 'true')                        // false
// console.log('NaN == "false":', NaN == 'false')                      // false
// console.log('NaN == "1":', NaN == '1')                              // false
// console.log('NaN == "0":', NaN == '0')                              // false
// console.log('NaN == "-1":', NaN == '-1')                            // false
// console.log('NaN == "":', NaN == '')                                // false
// console.log('NaN == null:', NaN == null)                            // false
// console.log('NaN == undefined:', NaN == undefined)                  // false
// console.log('NaN == Infinity:', NaN == Infinity)                    // false
// console.log('NaN == -Infinity:', NaN == -Infinity)                  // false
// console.log('NaN == []:', NaN == [])                                // false
// console.log('NaN == {}:', NaN == {})                                // false
// console.log('NaN == [[]]:', NaN == [[]])                            // false
// console.log('NaN == [0]:', NaN == [0])                              // false
// console.log('NaN == [1]:', NaN == [1])                              // false
// console.log('NaN == NaN:', NaN == NaN)                              // false
