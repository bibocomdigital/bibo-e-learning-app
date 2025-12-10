export class Telephone {
  private constructor(private readonly value: string) {}

  public static create(phone: string): Telephone {

    const phoneRegex = /^[0-9]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      throw new Error("Numéro de téléphone invalide");
    }
    return new Telephone(phone);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Telephone): boolean {
    return this.value === other.value;
  }
}
