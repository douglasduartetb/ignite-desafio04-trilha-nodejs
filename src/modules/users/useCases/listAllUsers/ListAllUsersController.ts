import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = user_id.toString();
    let users = null;

    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (e) {
      return response.status(400).json({ error: "User not found" });
    }
    return response.json(users);
  }
}

export { ListAllUsersController };
