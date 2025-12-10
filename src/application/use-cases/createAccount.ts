import { User } from "@domain";
import { CreateAccountDto } from "application/dto";
import { InputPort, UserRepositoryPort } from "application/port";

export class CreateAccount implements InputPort<CreateAccountDto, User>{
    constructor(private userRepositoryPort: UserRepositoryPort){}
    execute(dto: CreateAccountDto): Promise<User> {
        return this.userRepositoryPort.create(dto)
    }
}
