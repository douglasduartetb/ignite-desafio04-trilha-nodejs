import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let users = null;
    try {
      users = this.showUserProfileUseCase.execute({ user_id });
    } catch (e) {
      return response.status(404).json({ error: "nao achou" });
    }
    return response.json(users);
  }
}

export { ShowUserProfileController };
