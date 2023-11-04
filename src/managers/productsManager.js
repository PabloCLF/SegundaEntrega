import { productsModel } from "../db/models/products.model.js";

class ProductsManager {
    async findAll(obj) {
        const { limit = 20, page = 1, sort, ...filter } = obj;
        const sortOption = sort ? { price: sort } : null;
        const response = await productsModel.paginate(filter, { limit, page, sort: sortOption });
        const info = {
            count: response.totalDocs,
            pages: response.totalPages,
            next: response.hasNextPage ?
                `http://localhost:8080/api/products?page=${response.nextPage}` : null,
            prev: response.hasPrevPage ?
                `http://localhost:8080/api/products?page=${response.prevPage}` : null,
        };
        const results = response.docs;
        return { info, results };
    }

    async findById(id) {
        const result = await productsModel.findById(id);
        return result;
    }

    async createOne(obj) {
        const result = await productsModel.create(obj);
        return result;
    }

    async updateOne(id, obj) {
        const result = await productsModel.updateOne({ _id: id }, obj);
        return result;
    }

    async deleteOne(id) {
        const result = await productsModel.deleteOne({ _id: id });
        return result;
    }
}

export const productsManager = new ProductsManager();