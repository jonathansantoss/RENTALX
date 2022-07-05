import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRespository: ICategoriesRepository) {}

    execute(): Promise<Category[]> {
        const categories = this.categoriesRespository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
