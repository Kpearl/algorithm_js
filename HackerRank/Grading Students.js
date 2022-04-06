// 38점 이상일 경우 5단위로 반올림

function gradingStudents(grades) {
  // Write your code here
  const result = []
  grades.map(element => {
    let test = 5 - (element % 5)
    if (element > 37 && test < 3) result.push(element + test)
    else result.push(element)
  })
  return result
}
