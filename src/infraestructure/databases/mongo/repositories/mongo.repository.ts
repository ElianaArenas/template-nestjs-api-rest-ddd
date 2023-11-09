import { Model, Document, FilterQuery } from 'mongoose';
import { IBaseRepository } from 'src/domain/interfaces/repositories/base-repository';


export abstract class MongoRepository<T extends Document>
  implements IBaseRepository<T, any>
{
  constructor(private readonly model: Model<T>) {}

  async create(entity: Partial<T>): Promise<T> {
    const createdEntity = new this.model(entity);
    return await createdEntity.save();
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async findAll(filters: FilterQuery<T>): Promise<T[]> {
    return await this.model.find(filters).exec();
  }

  async update(id: string, updates: Partial<T>): Promise<T | null> {
    return await this.model
      .findByIdAndUpdate(id, updates, { new: true })
      .exec();
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
