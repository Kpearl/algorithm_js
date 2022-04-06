// 가장 많이 중복된 숫자 구하기 (중복되는 숫자가 동일할 경우 작은 키값을 우선으로 함)

function migratoryBirds(arr) {
  // Write your code here
  let temp = {}
  let result = arr[0]
  arr.forEach((num) => {
    temp[num] = !temp[num] ? 1 : temp[num] + 1
    result = temp[result] < temp[num] ? num : result
    result = (temp[result] === temp[num] && num < result) ? num : result
  })
  return result
}
