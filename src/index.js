/**
 * const, let等の変数宣言
 */

// var val1 = 'var変数';
// console.log(val1);

// val1 = 'var変数上書き';
// console.log(val1);

// var val1 = 'var変数再宣言';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2)

// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// val3 = 'const変数を上書き';

// const val3 = 'const変数を再宣言';

// const val4 = {
//   name: 'じゃけえ',
//   age: 28,
// }
// console.log(val4);
// val4.name = 'jak';

// val4.adress = 'Nara';
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = 'じゃけぇ';
// const age = 28;

// // const message1 = '私の名前は'　+ name + 'です。年齢は' + age + 'です。';
// // console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1ですよ"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }

// console.log(func2('func2ですよ'));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: 'だいすけ',
//   age: 40,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const myProfile = ["じゃけえ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です}`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);
