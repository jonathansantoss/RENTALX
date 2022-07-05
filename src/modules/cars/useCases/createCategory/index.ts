import { CategoriesRespository } from "../../repositories/implementations/CategoriesRespository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRespository = new CategoriesRespository();

    const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRespository
    );

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );
    return createCategoryController;
};
