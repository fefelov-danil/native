import {cheapCourses, completedTasks, oldAges} from "./04";

test("should take old man older than 90", () => {

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses cheaper 160", () => {

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].price).toBe(150)
})

test("get only completed tasks", () => {

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})