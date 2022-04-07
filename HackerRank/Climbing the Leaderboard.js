// 랭크에서 중복된 값을 제외하고 각 플레이어의 점수가 랭크에서 몇번째 순위인지 구하기

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let result = []
  player.forEach((score) => {
    let tempRank = [ ...ranked, score]
    tempRank.sort((a, b) => b - a)
    result.push(tempRank.indexOf(score) + 1)
  })

  return result
}
// => time limit 에 걸림, 다른 방법 고민 중

