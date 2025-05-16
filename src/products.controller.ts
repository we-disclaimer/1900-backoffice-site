/* eslint-disable no-empty-function */
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import { Produto } from './interfaces/produto.interface'; // Interface do produto
import { PostModel } from './admin/resources/post.resource.js';

@Controller('products')
export class ProductsController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectModel('Produtos') private readonly produtoModel: Model<typeof PostModel>,
  ) {}

  @Get()
  async getAllProducts() {
    return this.produtoModel
      .find()
      .populate('media')
      .populate('categoria')
      .lean()
      .exec();
  }
}
