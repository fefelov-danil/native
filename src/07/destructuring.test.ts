export const num =  1
test('new test', () => {
    const man = {
        name: 'Danil',
        age: 31,
        lessons: [{title: '1'}, {title: '2'}]
    }

    const {age, lessons} = man

    const a = man.age
    const l = man.lessons

    expect(a).toBe(31)
    expect(l.length).toBe(2)
    expect(age).toBe(31)
    expect(lessons.length).toBe(2)
})