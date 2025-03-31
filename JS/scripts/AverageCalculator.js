const students = [
    {
        name: 'Oussama',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Yassine',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Nadir',
        notes: [18, 17, 18, 19, 12]
    }
]

const average = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

const compareStudent = (a, b) => {
    return b.average - a.average
}

for (let student of students) {
    student.average = average(student.notes)
    student.worst = Math.min(...student.notes)
    student.best = Math.max(...student.notes)
}

students.sort(compareStudent)

const formatStudent = (student) => {
    return `${student.name} - ${student.average}, - (${student.best}), - (${student.worst})`
}

console.log(`Top 3 students
1: ${formatStudent(students[0])}        
2: ${formatStudent(students[1])} 
3: ${formatStudent(students[2])} 
`)
