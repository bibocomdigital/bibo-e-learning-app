import { User } from "@domain";
import { LoginDto } from "../request/LoginDto";
import { Login } from "../login.dto";

export interface LoginResponseDto {
    user: User;      
    token: Login;
}
