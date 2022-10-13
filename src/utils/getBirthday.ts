import { getMonth } from './index'

const getBirthday = (birthday: number) => {
    const day = new Date(birthday).getDay()
    const month = getMonth(new Date(birthday).getMonth())
    const year = new Date(birthday).getFullYear()

    return `${day} ${month} ${year}`
}

export default getBirthday
