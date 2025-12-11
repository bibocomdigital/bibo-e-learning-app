import { User } from "@domain";
import { CreateAccountDto, Login, LoginDto, LoginResponseDto } from "@application";

export interface UserRepositoryPort {
    create(dto : CreateAccountDto): Promise<User>;
    login(dto: LoginDto): Promise<User>;
    logout(dto: Login): Promise<void>;
}
