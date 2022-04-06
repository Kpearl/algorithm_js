// 최고 점수 갱신 횟수 / 최소 점수 갱신 횟수

function breakingRecords(scores) {
  // Write your code here
  let max = scores[0]
  let min = scores[0]
  let maxCount = 0
  let minCount = 0

  scores.forEach((score) => {
    if (score > max) {
      ++maxCount
      max = score
    } else if (score < min) {
      ++minCount
      min = score
    }
  })

  return [maxCount, minCount]
}
