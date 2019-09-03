export class Notification {
  private readonly type: string;
  private readonly message: string;

  constructor(type, message) {
    this.message = message;
    this.type = type;
  }

  public getMessage() {
    return this.message;
  }

  public getType() {
    return this.type;
  }

}
