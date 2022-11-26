const getuserid = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "seemab@gmail.com" && password === 1234) {
        resolve(email);
      } else {
        reject("the password is wrong");
      }
    }, 2000);
  });
};

//   getuserid("seemab@gmail.com", 1234 )
//   .then((email)=>{
//     console.log(email)
//     return next
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

function getToastPromise() {
  return new Promise((resolve, reject) => {
    wifeMood = 2;
    setTimeout(() => {
      if (wifeMood >= 5) {
        resolve("toast is ready");
      } else {
        reject("mood is off");
      }
    }, 2000);
  });
}
function eggFriedPromis() {
  return new Promise((resolve, reject) => {
    wifeMood = 6;
    setTimeout(() => {
      if (wifeMood >= 5) {
        resolve("egg ready");
      } else {
        reject("mood off");
      }
    }, 2000);
  });
}
// getToastPromise()
//   .then(arg => {console.log(arg)})
//   return eggFriedPromis()
//   .then(arg => {
//     console.log
//     (arg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function learnJs() {
  return new Promise((resolve, reject) => {
    passMarks = 40;
    setTimeout(() => {
      if (passMarks > 50) {
        resolve(`you are pass...`);
      } else {
        reject(`you are fail...`);
      }
    }, 1000);
  });
}

// learnJs().then((para)=>{
//   console.log(para);
// })
// // .catch((err)=>{
// //   console.log(err);
// //   return "fail"
// //})
// .then((para1)=>{
//   console.log(para1);
//   return "pass"
// })
// .then((para2)=>{
//   console.log(para2);
//   return "nothing"
// })
// .then((para3)=>{
//   console.log(para3);
//   return "got"
// })
// .catch((para4)=>{
//   console.log(para4);
//   return "get"
// })

// 2nd method
// async function baby(){
//   try{
// let nm = await learnJs()
// console.log(nm)
// }catch{
//   console.log("fail")
// }
// }
// baby();

function dosomething(callback) {
  console.log("shafan");
}
function sayHi() {
  console.log("hi");
}
//dosomething(sayHi);

function judge(grade) {
  switch (true) {
    case grade == "A":
      console.log("you got an", grade, ": AMAZING!");
      break;
    case grade == "B":
      console.log("you got a", grade, ": WELL DONE!");
      break;
    case grade == "C":
      console.log("you got an", grade, ": ALRIGHT!");
      break;
    case grade == "D":
      console.log("you got an", grade, ": HMM!");
      break;
    default:
      console.log("an", grade, "what!");
  }
}

function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}
//getGrade(85, judge);


function greet(fullName){
console.log(`hello ${fullName[0]} ${fullName[1]} `);
}
function secFun(userName, callback){
const name = userName.split(" ")
callback(name);
}

secFun("seemab tauseef", greet);