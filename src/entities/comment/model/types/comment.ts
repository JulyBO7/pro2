import { User } from "entities/user";

export type Comment= {
    id: string
    text: string
    user: User
}
