
// TAKE 1
//https://htmlcheatsheet.com/js/
const student = [{
    name: "Alex",
    grades: [87, 92, 78, 96, 88]
  },
  {
    name: "Mary",
    grades: [77, 39, 36, 57, 65]
  }];
  
  function calculateAverage(grades) {
    let sum = 0
    for (let grade of grades)
    {
        sum += grade;
    }
    return sum/grades.length;
  }
  
const avg = calculateAverage(student.grades);
//   console.log(`Average for ${student.name}: ${avg}`);


// TAKE 2 ARROW FUNCTION
const calculateAverage2 = grades => {
    let sum = 0
    for (let grade of grades)
    {
        sum += grade;
    }
    return sum/grades.length;
  }

const avg2 = calculateAverage2(student.grades);
// console.log(`Average for ${student.name}: ${avg2}`);

// TAKE 3 ARROW FUNCTION - ONE LINERS WITH REDUCE
const calculateAverage3 = grades => grades.reduce((sum, g) => sum + g, 0) / grades.length;
const avg3 = calculateAverage3(student.grades);
// console.log(`Average for ${student.name}: ${avg3}`);

const calculateMax1 = grades => grades.reduce((best, g) => Math.max(best, g), 0);
const max1 = calculateMax1(student.grades);
console.log(`Max for ${student.name}: ${max1}`);






  