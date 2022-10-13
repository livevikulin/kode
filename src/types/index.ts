export type IUser = {
    id: string
    avatarUrl: string
    firstName: string
    lastName: string
    userTag: string
    department: string
    position: string
    birthday: string
    phone: string
}

export type IUsers = {
    items: IUser[]
}
