const getPhrase = (num: number) => {
    const lastOne = Number(num.toString().slice(-1))
    if (num > 4 && num <= 20) {
        return 'лет'
    }
    if (lastOne === 1) return 'год'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'года'
    return 'лет'
}
const getAge = (birthday: number) => {
    const age = Math.floor(
        (new Date().getTime() - new Date(birthday).getTime()) /
            1000 /
            (60 * 60 * 24) /
            365.25
    )
    return `${age} ${getPhrase(age)}`
}

export default getAge
