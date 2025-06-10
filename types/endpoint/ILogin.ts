import type { IUser } from "~/types/IUser";

export interface ILogin {
    token: string;
    staff: IUser;
}
