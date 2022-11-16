// let a = -9;
// let b = Math.sqrt(a);

// console.log(b);
// let base = 10;
// let height = 5;
// let area = base*height/2
// console.log(`base: ${base} height: ${height} Area ${area}`);

// let a = 2;
// let b = 3;
// let c = 4;
// let s = (a+b+c)/2;
// let temp =s*(s-a)*(s-b)*(s-c);
// let area = Math.sqrt(temp);
// console.log(area)

// let a = parseInt("6");
// let b = parseInt("2");
// console.log(`the value of a is: ${a} \nthe value of b is: ${b}`);

// //   temp = a;
// //  a = b;
// //  b = temp;
// // console.log(`After swepping \nthe value of a is: ${a} \nthe value of b is: ${b}`);

//   a = a+b; // 6+5=11
//   b = a-b; // 11-5=6
//   a = a-b; // 11-6=5
//   console.log(`Without swepping \nthe value of a is: ${a} \nthe value of b is: ${b}`);

//    function check(){
//     let value = "hello";
//     // let res = Math.sign(value);
//     // console.log(res).innertext = res;
//     if(value > 0){
//         res = `${value} is positive number`;
//     } else if(value < 0){
//         res = `${value} is Negative number`;
//     } else if(value === 0){
//         res = `value is zero`;
//     } else {
//         res = `${value} is not a number`
//     }
//     console.log(res);
   

//     let x = Math.random();
//     console.log(`before calculation the random number is ${x}`);
//     let g = Math.floor(Math.random()*(4-1)+1)
//     console.log(`Random value between 1 to 4 is ${g}`)


//    let e = 98;
//    // // if(e%2==0){
//    // //    console.log(`${e} is a even number`);
//    // // } else {
//    // //    console.log(`${e} is a odd number`);
//    // // }
//    let result = e%2==0 ? "even" : "odd";
//    console.log(`${e} is a ${result} number`);

//    let number = 15;
//    if(number == 1){
//       console.log(`${number} is neither a prime or a composite number`);
//    } else if(number < 1){
//       console.log(`${number} is not a prime number`);
//    }else {
//       for (let i = 2; i<number; i++){
//          if(number%i == 0){
//             res = (`${number} is not a prime number`)
//             break;
//          } else {
//             res = (`${number} is a prime number`)
//          } 
       
//       }
//       console.log(res);
//    }

//    let a = 1;
//    let b = 4;
//    let c = 3;
//    let x = check(a,b,c);
//    function check(a,b,c){
//       if(a >= b && a >= c){
//          return a;
//       } else if(b >= a && b>= c){
//          return b;
//       } else{
//          return c;
//       }
//    }
//    console.log(`in ${a},${b},${c}: the largest number is ${x}`);


 

// let a = 34;
// let b = 6;
// let c = 74;
//  let res1 = a%10;
//  let res2 = b%10;
//  let res3 = c%10;
//  if(res1 == res2 && res1 == res3){
//   console.log(`${a}, ${b}, ${c} are having the same last digit`);
//  } else{
//   console.log(`${a}, ${b}, ${c} are not having the same last digit`);
//  }
 
// let word = "faf";
// let wordarray =word.split('');
// let wordarrayrev = wordarray.reverse();
// let Revstring = wordarrayrev.join('');
// if(word === Revstring){
//   console.log(`${word}: is palindrome` );
// } else {
//   console.log(`${word} is not palindrome`);
// }

// let string = "goar";
// let  len = string.length;
// let msg = "its a palindrom string";
// for(var i = 0; i < len/2; i++){
//   if(string[i] != string[len - 1 - i]){
//     msg = "its not a palindrom string";
//   }
// }
//   console.log(`${string}: ${msg}`); 

//   let string = "seemab Tauseef";
//   let letter = "f";
//   let strlen = string.length;
//   let counter = 0;
//   for( var i = 0; i<strlen; i++){
//     //console.log(string[i])}
//     if(string[i] == letter){
//       counter++
//     }
//   }
//   console.log(`${string} => ${letter} => ${counter}`);

// var string = "abdul baari";
// console.log(string);
// let testStarts = string.startsWith("y");
// let testEnds = string.endsWith("b");
// console.log(testStarts);
// console.log(testEnds);
// if(testStarts == true && testEnds == true){
//   console.log(`${string} is starts with "a" and ends with "b"`);
// } else if(testStarts == true && testEnds == false){
//   console.log(`${string} is starts with "a"`);
// } else if (testStarts == false && testEnds == true){
//   console.log(`${string} is ends with "b"`);
// } else {
//   console.log(`${string} neither starts with a and nor ends with b`);
// }

// let string = `shafan is the eldest one `;
// let substring = "one"
// let test1 = string.includes(substring);
// console.log(test1);
// let test2 = string.indexOf(substring);
// console.log(test2);
  
// let string = "tauseef khan"
// //console.log(string);
// let first = string.charAt(0);
// //console.log(first);
// let second = first.toUpperCase();
// //console.log(second);
// let third = string.slice(1);
// //console.log(third);
// let final = second + third;
// console.log("final: " +final);

// var string = " seemab tauseef khan"
// var check = /[aeiou]/gi;
// var chars = string.match(check);
// console.log(chars.join(','));
// console.log(chars.length);

// function sum(num){
// if (num>0){
//   return num + sum(num -1);
// }else {
//   return num;
// }
// }
// let res = sum(20);
// console.log(res);

//  let a= 0;
//  let b = 1;
//  for(var i=0; i<=17; i++){
//  var temp = a + b ;
//  console.log(temp);
//  a= b;
//  b = temp;
//  }

// let string = "Mr Blue has a blue cycle and red car"
// let reg = new RegExp("blue","gi")
// let newstring = string.replace(reg,"red");
// console.log(newstring);

// let string = "hubby janu";
//  let len = string.length;
//  let revstr ="";
 
//  for(var i = len-1; i>=0; i--){
//   revstr += string[i];
//  }
//  console.log(`${string} reverse is ${revstr}`);

// let string = "Shafan and Abaari are my sons";
// let sringAray = string.split(" ");
// console.log(sringAray);
// sringAray.sort()
// console.log(sringAray.join(' '));