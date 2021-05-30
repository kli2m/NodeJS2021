import User from "./user.model";

interface userType {
    id?: string,
    name?: string,
    login?: string,
    password?: string
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