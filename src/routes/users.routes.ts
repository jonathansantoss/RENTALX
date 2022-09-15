import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import multer from "multer";

import { Router } from "express";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouters = Router();

const uploadAvatar = multer(uploadConfig.upload("../tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);
usersRouters.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserController.handle
);

export { usersRouters };
