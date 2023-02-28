// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

// numberが残っていて問題となる例
export function sub(a: i32, b: i32): i32 {
  // numberはf64となるのでreturn文でコンパイルエラーとなる
  // const result: number = a - b;

  // numberを用いない場合
  const result: i32 = a - b;

  return result;

  // キャストする場合
  // return i32(result);
}

// イテレータを置き換える例
export function calcSum(): i32 {
  const ary: i32[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum: i32 = 0;
  // イテレータは使えない
  // for (let value of ary) {
  //    sum += value;
  //}
  // オーソドックスなfor文を使う必要あり
  for (let i: i32 = 0; i < ary.length; i++) {
    sum += ary[i];
  }
  return sum;
}

// 例外処理を置き換える例
export function divide(a: i32, b: i32): i32 {
  let result: i32 = 0;
  // 例外処理は使えない
  //try {
  //  result = a / b;
  //} catch(e) {
  //  result = 0;
  //}
  // 条件判定する記述に変更する必要あり
  if (b == 0) {
    result = 0;
  } else {
    result = a / b;
  }
  return result;
}