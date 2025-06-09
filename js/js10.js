const student = {
  name: "Ali"
};
console.log("1:", student.name); // "Ali"

student.age = 20;
console.log("2:", student.age); // 20

delete student.age;
console.log("3:", student.age); // undefined

console.log("4:", student.city); // undefined

student["home address"] = "Dushanbe";
console.log("5:", student["home address"]); // "Dushanbe"