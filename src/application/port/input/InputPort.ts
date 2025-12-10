
export interface InputPort<T, R> {
    execute(dto: T) : Promise<R>;
}