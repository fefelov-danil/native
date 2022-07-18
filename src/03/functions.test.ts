import {StudentType} from "../02/objects";
import {addSkill, doesLiveStudentInCity, makeStudentActive} from "./functions";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Danil",
        age: 31,
        isActive: false,
        address: {
            streetTitle: "Lesnikov 25",
            city: {
                title: "Krasnoyarsk",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "React"},
        ]
    }
})

test("new tech skill should be added to student", () => {
    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("does student live in city", () => {
    let result1 = doesLiveStudentInCity(student, "Moscow")
    let result2 = doesLiveStudentInCity(student, "Krasnoyarsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})