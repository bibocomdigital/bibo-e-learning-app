import { Login } from "application/dto/login.dto";
import { InputPort, JwtServicePort } from "application/port";

export class LogoutUseCase implements InputPort<Login, void>{
    constructor(private jwtServicePort: JwtServicePort){}
    execute(dto: Login): Promise<void> {
        return this.jwtServicePort.revokeToken(dto);
    }
}
