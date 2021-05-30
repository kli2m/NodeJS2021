import Board from "./board.model";

interface ColumnType {
    id?: string,
    title: string,
    order: number
}


interface boardType {
    id?: string,
    title?: string,
    columns?: ColumnType[],
}

interface boardCreateType {
    title?: string,
    columns?: ColumnType[],
}

interface RequestsParams {
    id: string
}

interface boardGetFuncType {
    (id: string): Promise<Board | undefined>
}

interface boardCreateFuncType {
    (board: boardCreateType): Promise<Board | undefined>
}

interface boardPutFuncType {
    (id: string, board: boardCreateType): Promise<Board | undefined>
}

interface boardDelFuncType {
    (id: string): Promise<void>
}

export {
    ColumnType,
    boardType,
    RequestsParams,
    boardGetFuncType,
    boardCreateFuncType,
    boardPutFuncType,
    boardDelFuncType
}