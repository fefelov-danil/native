import {createGreetingMessage, ManType, people} from "./05";

let allPeople: Array<ManType> = [...people]

beforeEach( () => {
    allPeople = [...people]
})

test("should get array of greeting messages", () => {

    const messages = createGreetingMessage(allPeople)

    expect(createGreetingMessage(allPeople).length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator")
    expect(messages[1]).toBe("Hello Alex. Welcome to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-Incubator")
})