import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    let newUser = null;

    try {
      newUser = this.createUserUseCase.execute({ name, email });
    } catch (e) {
      return response.status(400).json({ error: "user not" });
    }

    return response.status(201).json(newUser);
  }
}

export { CreateUserController };
