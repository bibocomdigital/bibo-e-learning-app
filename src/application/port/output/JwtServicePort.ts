import { JwtPayload } from "application/dto";
import { Login } from "application/dto/login.dto";

export interface JwtServicePort {
    generateToken(payload: JwtPayload, expiresIn?: string): Promise<Login>;
    verifyToken(token: string): Promise<Record<string, any>>;
    revokeToken(token: Login ): Promise<void>;
}
