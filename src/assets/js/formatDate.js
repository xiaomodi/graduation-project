export function formatDate (date, fmt) {
  console.log(date, fmt)
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate()
  }
  for (const i in o) {
    console.log(i)
    if (new RegExp(`(${i})`).test(fmt)) {
      const str = o[i] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
