type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}

export const student: StudentType = {
    id: 1,
    name: "Danil",
    age: 31,
    isActive: true,
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