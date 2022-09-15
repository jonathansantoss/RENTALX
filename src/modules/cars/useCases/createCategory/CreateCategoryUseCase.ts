import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
        @inject('CategoriesRespository')
        private categoriesRespository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRespository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    this.categoriesRespository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
