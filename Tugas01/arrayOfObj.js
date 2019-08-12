let schools = [
  {
    grade: 'SMP',
    schoolName: 'SMP 16 Malang',
    yearIn: '2013',
    yearOut: '2016'
  }, 
  {
    grade: 'SMA',
    schoolName: 'SMKN 4 Malang',
    yearIn: '2016',
    yearOut: '2019'
  }
]

function showAll () {
  let showData = schools.map(school => school)

  console.log(showData)
}

function addNewSchool (newSchool) {
  schools.push(newSchool)

  showAll()
}

function editSchool (grade, parameter, data) {
  schools.find(function(school) {
    if(school.grade === grade) {
      school[parameter] = data
    }
  })

  showAll()
}

function deleteSchool (grade) {
  schools.map(function(school, index) {
    if(school.grade == grade) {
      schools.splice(index, 1)
    }
  })

  showAll()
}

// Show All
showAll()

// Add New School
let newSchool = {
  grade: 'Universitas',
  schoolName: 'Politeknik Negeri Malang',
  yearIn: '2019',
  yearOut: '2023'
}

addNewSchool(newSchool)

// Edit Existing School
let grade = 'SMP'
let parameter = 'yearIn'
let data = '2015'

editSchool(grade, parameter, data)

// // Delete School
let grade = 'SMP'

deleteSchool(grade)


