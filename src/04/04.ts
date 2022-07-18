const ages = [18, 20, 22, 1, 100, 90, 14]

export const oldAges = ages.filter(age => age > 90)

type courseType = {
    title: string
    price: number
}

const courses: courseType[] = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

export const cheapCourses = courses.filter(course => course.price < 160)

const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Salt", isDone: false},
    {id: 4, title: "Sugar", isDone: true}
]

export const completedTasks = tasks.filter(task => task.isDone)