// 합 / 합할 수의 개수 를 입력받아 연속가능한 경우의 수 구하기

function birthday(s, d, m) {
  // Write your code here
  let count = 0
  for(let i = 0; i < s.length; i++) {
    let temp = 0
    for(let j = i; j < i + m; j++) {
      temp += s[j]
    }
    count += temp === d ? 1 : 0
  }
  return count
}
