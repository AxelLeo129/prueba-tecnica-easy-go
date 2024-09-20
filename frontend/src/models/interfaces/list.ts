import { Task } from "./task";

export interface ListProps {
    data: Task[];
    setData: (tasks: Task[]) => void;
    getData: (id: string) => void;
    deleteAction: (id: string) => void;
    changeStatus: (id: string) => Promise<void>;
}