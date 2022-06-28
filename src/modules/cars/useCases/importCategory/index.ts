import { CategoriesRespository } from "../../repositories/implementations/CategoriesRespository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = new CategoriesRespository();
const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
