export interface User {
    username: string
    id: number
    avatar?: string
}
export interface UserSchema {
    authData?: User
    inited: boolean
}
