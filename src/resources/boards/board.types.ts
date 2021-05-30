import Board from "./board.model";

interface Column {
    id:	string,
    title:	string,
    order:	number
    }


interface boardType {
    id?: string,
    title?: string,
    columns?: Column[],
}

interface userCreateType {
    name: string,
    login: string,
    password: string
}

interface RequestsParams {
    id: string
}

interface userGetFuncType {
    (id: string): Promise<User | undefined>
}

interface userCreateFuncType {
    (user: userCreateType): Promise<User | undefined>
}

interface userPutFuncType {
    (id: string, user: userCreateType): Promise<User | undefined>
}

interface userDelFuncType {
    (id: string): Promise<void>
}

export {
    userType,
    RequestsParams,
    userGetFuncType,
    userCreateFuncType,
    userPutFuncType,
    userDelFuncType
}