//ex1
const promise = new Promise ( (resolve, reject)=>{
    setTimeout( ()=>{
        resolve("my name is gomnam");
    },3000);
});
promise
.then((data)=> console.log (data))
.catch((error)=>console.log(error));
// my name is gomnam


//ex2
const promise2 = new Promise ( (resolve, reject)=>{
    setTimeout( ()=>{
        reject("my family is gomnam");
    },3000);
});
promise2
.then((data)=> console.log (data))
.catch((error)=>console.log(error));
// my family is gomnam


//ex3
const promise3 = new Promise ( (resolve, reject)=>{
    setTimeout( ()=>{
        const error = true;
        if (!error){
            resolve("your name is ammar")
        }
        else{
            reject (new Error("user is not logged in"));
        }
    },3000);
});
promise3
.then((data)=> console.log (data))
.catch((error)=>console.log(error.message));
// user is not logged in


//ex4
//write callback project with promise
console.log("start");

function loginUser (email, password){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve ({ email });
        },3000);
    });
      
}
function getUserCourses (email){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve  (["course 1", "course 2", "course 3"]);
        },2000); 
    });
}
function getCourseDetail (id){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve  ("course title is js");
        },1000);  
    });
}
loginUser("gomnam@yahoo.com", 1234)
.then( (user) => getUserCourses(user.email))
.then( (courses) => getCourseDetail(courses[0]))
.then( (detail) =>  console.log(detail));
console.log("end");


// start
// end
// my name is gomnam
// my family is gomnam
// user is not logged in
// course title is js