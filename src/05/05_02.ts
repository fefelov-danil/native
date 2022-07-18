type StreetType = {
    title: string
}
type AddressHousesType = {
    number: number
    street: StreetType
}
type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressHousesType
}
type AddressGovernmentType = {
    street: StreetType
    number: number
}
type GovernmentBuildingsType = {
    type: string
    address: AddressGovernmentType
    budget: number
    staffCount: number
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizenNumber: number
}

export const city: CityType = {
    title: "New York",
    houses: [
        {
            id: 1, buildedAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
            }
        },
        {
            id: 2, buildedAt: 2008, repaired: false,
            address: {
                number: 100,
                street: {title: "Happy street"}
            }
        },
        {
            id: 3, buildedAt: 2020, repaired: false,
            address: {
                number: 101,
                street: {title: "Happy street"}
            }
        }
    ],
    governmentBuildings: [
        {
            type: "HOSPITAL",
            address: {street: {title: "Central Str"}, number: 12},
            budget: 200000, staffCount: 200
        },
        {
            type: "FIRE-STATION",
            address: {street: {title: "South Str"}, number: 12},
            budget: 500000, staffCount: 1000
        }
    ],
    citizenNumber: 1000000

}

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildingsType[]) => {
    return governmentBuildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
    return houses.map(house => house.address.street.title)
}