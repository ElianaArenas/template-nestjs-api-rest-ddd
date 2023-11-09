import { IBaseRepository } from "src/domain/interfaces/repositories/base-repository";
import { DeleteResult, FindManyOptions, Repository, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export abstract class OracleRepository<T> implements  IBaseRepository<T, any> {

    constructor(private readonly model: Repository<T>) {}
    
    async create(entity:T): Promise<T> {
        return await this.model.save(entity);
    }

    async findAll(filters: FindManyOptions<T>): Promise<T[]> {
        return await this.model.find(filters);
      }
    
    async update(id: string, updates: Partial<T>): Promise<UpdateResult | null> {
        return await this.model.update(id, updates as QueryDeepPartialEntity<T>);
    }
    
    async delete(id: string): Promise<DeleteResult | null> {
        return await this.model.delete(id);
    }

}