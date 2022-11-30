import { IStudent } from "./student";

export interface IAccount{
    loggin: string;
    password: string;
    student: IStudent;
}