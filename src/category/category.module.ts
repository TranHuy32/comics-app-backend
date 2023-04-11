import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category.service';
import { CategoryRepository } from './repository/category.repository';
import { Category, CategorySchema } from './schema/category.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryService]
})
export class CategoryModule { }
