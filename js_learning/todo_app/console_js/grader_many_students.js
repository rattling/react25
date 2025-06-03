//ACCUMULATORS ARE VERY USEFUL (NOTE- DONT NEED A RETURN VALUE IF ITS A SINGLE LINE FUNCTION WITHIN)
// array.reduce((accumulator, item) => {
//     // do stuff to accumulator based on item
//     return accumulator; // must return it every time
//   }, initialValue);
  

// List of students
const students = [
    { name: "Alex", grades: [87, 92, 78, 96, 88] },
    { name: "Jordan", grades: [72, 84, 69, 80, 75] },
    { name: "Sam", grades: [95, 91, 89, 100, 94] }
  ];
  
  // Helper functions
  const calculateAverage = grades =>
    grades.reduce((sum, g) => sum + g, 0) / grades.length;
  
  const calculateMax = grades =>
    grades.reduce((best, g) => Math.max(best, g), 0);

  const getLetterGrade = score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  //This is neat - counts becomes a dictionary so get sub-counts and the whole inner function is wrapped in the accumulator
  const countGradeTiers = (grades) => {
    return grades.reduce((counts, grade) => {
      const letter = getLetterGrade(grade);
      counts[letter] = (counts[letter] || 0) + 1;
      return counts;
    }, {});
  };
  
  
  
  // Loop through students and print report
  for (const student of students) {
    const avg = calculateAverage(student.grades);
    const max = calculateMax(student.grades);
    const letter = getLetterGrade(avg);
    const gradeBreakdown = countGradeTiers(student.grades);
  
    console.log(`${student.name}: avg = ${avg.toFixed(1)} (${letter}), max = ${max}`);
    console.log("  Grade breakdown:", gradeBreakdown);
  }
  