import Task from "./task.model";

interface taskType {
    id?: string;
    title?: string;
    order?: number;
    description?: string;
    userId?: string | null;
    boardId?: string | null;
    columnId?: string | null;
}

interface taskCreateType {
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string | null;
    columnId: string | null;
}

interface RequestsParams {
    id: string;
    boardId:string;
}

interface taskGetAllFuncType {
    (boardId: string): Promise<Task[]>
}

interface taskGetFuncType {
    (id: string): Promise<Task | undefined>
}

interface taskCreateFuncType {
    (task: taskCreateType): Promise<Task | undefined>
}

interface taskPutFuncType {
    (id: string, task: taskCreateType): Promise<Task | undefined>
}

interface taskDelFuncType {
    (id: string): Promise<void>
}

interface taskUserNullByUserId {
    (userId: string): Promise<void>
}

interface taskdelByBoardId {
    (boardId: string): Promise<void>
}

export {
    taskType,
    RequestsParams,
    taskGetFuncType,
    taskCreateFuncType,
    taskPutFuncType,
    taskDelFuncType,
    taskGetAllFuncType,
    taskUserNullByUserId,
    taskdelByBoardId
}