import Cent, {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Request,
  Response,
  Next,
} from "@centjs/core";
import * as CentOrm from "@centjs/orm";

@Controller("/api")
export default class Welcome {
  @Get("/welcome")
  public welcomeMessage(request: Request, response: Response) {
    response.json({
      message: "Welcome To CentJs Framework",
    });
  }
}
