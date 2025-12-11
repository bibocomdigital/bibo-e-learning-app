import { UserRole } from "@types";

export interface JwtPayload {
    userId: string;
    role?: UserRole
}