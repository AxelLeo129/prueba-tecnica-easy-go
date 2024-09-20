export interface Task {
    id: number;
    title: string;
    description: string;
    limit_date: string;
    active: boolean;
    done: boolean;
    createdAt: string;
}

export interface PostTask {
    title: string;
    description: string;
    limitDate: string;
}