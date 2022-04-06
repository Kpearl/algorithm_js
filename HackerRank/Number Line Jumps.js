// 두마리 캥거루가 서로 다른 출발점 / 다른 점프 단위를 가지고 뛰었을 때 도착점이 같은 경우 확인
// 최대공약수를 통해 구하려고 했으나 출발점이 다르기 때문에 성립되지 않아 for문으로 처리

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) {
    return 'NO'
  } else {
    for (let i = 1; i < 10000; i++) {
      if (x1 + (v1*i) === x2 + (v2*i))
        return 'YES'
    }
  }
  return 'NO'
}
