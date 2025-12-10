import { User } from "@domain";
import { CreateAccountDto } from "application/dto";

export interface UserRepositoryPort {
    create(dto : CreateAccountDto): Promise<User>;
}
