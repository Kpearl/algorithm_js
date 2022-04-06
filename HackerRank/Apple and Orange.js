// 범위내 사과, 오렌지가 갯수 구하기

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let result = [0, 0]

  apples.map((apple) => {
    apple += a
    result[0] += (apple >= s && apple <= t) ? 1 : 0
  })

  oranges.map((orange) => {
    orange += b
    result[1] += (orange >= s && orange <= t) ? 1 : 0
  })
  console.log(result[0])
  console.log(result[1])
}
