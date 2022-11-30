import { IAchievement } from "./achievement";

export interface IStudent{
    name: string;
    surname: string;
    age: number;
    achievements: IAchievement[];
}