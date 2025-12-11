import { User } from "@domain";
import { LoginDto, LoginResponseDto } from "application/dto";
import { InputPort, JwtServicePort, UserRepositoryPort } from "application/port";

export class LoginUseCase implements InputPort<LoginDto, LoginResponseDto> {
    constructor(
        private userRepositoryPort: UserRepositoryPort,
        private jwtService: JwtServicePort
    ) {}

    async execute(dto: LoginDto): Promise<LoginResponseDto> {
        const user = await this.userRepositoryPort.login(dto);
        if (!user) throw new Error("Invalid credentials");

        const token = await this.jwtService.generateToken({ userId: user.id });

        return { user, token };
    }
}

