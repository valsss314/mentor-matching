export interface HackerData {
    email: string;
    name: string;
    tableNumber: string;
    role: string;
}

export interface MentorData {
    email: string;
    name: string;
    skills: string;
    role: string;
    queue: HackerData[];
}