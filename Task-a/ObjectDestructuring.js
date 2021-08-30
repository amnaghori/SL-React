//Object Destructuring
var course = {
courseName:"JavaScript",
duration: "Two Months",
uni: "ABC",
student: {
stu1: "Sarah",
stu2: "Annie",
}
};
var {courseName, duration, uni, student: {stu1, stu2}} = course;
console.log(courseName);
console.log(duration);
console.log(uni);
console.log(stu1);
console.log(stu2);
