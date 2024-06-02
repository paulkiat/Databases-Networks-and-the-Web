// The index.js file of your application
let courses = {
  id: "PhysEd_01A",
  name: "Parenting and Balance: Weck on Walking",
  platform: "theBeautifulParent",
  category: "Physical Education"
};

function printCourseInfo(courses) {
  let output = '';
  for (key in courses){
    output += `${key}: ${courses[key]}
    `;
  }
  console.log(output);
}

printCourseInfo(courses);