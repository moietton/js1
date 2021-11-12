/*
const data = "[1,2,[3,4,[5,[6]]]]"
run(data)
> "배열의 중첩된 깊이 수준은 4이며, 총 6개의 원소가 포함되어 있습니다"

문제 정의
1. 중첩된 깊이가 몇인지 출력하는 함수를 만든다.
2. 원소의 갯수가 몇개인지 확인하기 위해서 평평하게 배열을 만들 필요가 있다. 
    이 과정을 마치고 length로 갯수 확인하면 될 것 같다. 
*/

/*
1. const newArr = arr.flat([depth])를 사용하면 해당 층만큼의 배열이 없어진다.
    그래서 이걸 쓰는 동시에 2번을 해소할 수 있지 않을까 싶다.
    
*/

//data 문자열에서 뒤에 ]갯수 -1을 하게 되면 깊이를 구할 수 있다.
function flat(input, depth = 1, stack = []) {
  for (let item of input) {
    if (item instanceof Array && depth > 0) {
      flat(item, depth - 1, stack);
    } else {
      stack.push(item);
    }
  }

  return stack;
}

const data = "[1,2,[3,4,[5,[6]]]]";
let count = 0;
let searchChar = "]";
let pos = data.indexOf(searchChar);
//pos는 이제 ]의 첫번째 인덱스를 값으로 가진다.

while (pos !== -1) {
  //-1이 아니면 1씩 늘려가라는 뜻
  count++;
  pos = data.indexOf(searchChar, pos + 1);
}

const dataArr = data.replace('"', "");
const newdataArr = dataArr.flat(Infinity);
const numberArr = newdataArr.length;

console.log(
  `배열의 중첩된 깊이 수준은 ${count}이며, 총 ${numberArr}의 원소가 포함되어 있습니다`
);
