// 합이 k, k의 배수가 되는 경우의 수 구하기

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0
  let temp = 0
  for(let i = 0; i < ar.length; i++) {
    for(let j = i + 1; j < ar.length; j++) {
      temp = ar[i] + ar[j]
      count += (temp === k || temp % k === 0) ? 1 : 0
    }
  }
  return count
}
