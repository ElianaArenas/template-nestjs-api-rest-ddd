export abstract class IBaseRepository<T, U> {
    create: (entity: T) => Promise<T>
    delete: (id: U) => Promise<unknown | null>;
    update: (id: U, entity: Partial<T>) => Promise<unknown | null>;
    findAll: (filters?: T | any) => Promise<T[]>;
  }