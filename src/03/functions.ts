import {student, StudentType} from "../02/objects";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesLiveStudentInCity = (student: StudentType, city: string) => {
    return student.address.city.title === city
}