import { ProductData, ProductDataWithBrands } from "@/interfaces/product/products.interface";
import { HttpClient } from "./http-client";
import { ServiceResponse } from "@/interfaces/common/service-response.interface";

export class ProductsService {
    static getNewArrivals(): Promise<ServiceResponse<ProductData>> {
        return HttpClient.punchEndPoint<undefined, ProductData>({
            url: '/products',
            method: 'GET',
            isPublic: true,
            params: {limit: 4}
        })
    }

    static getProducts({limit, page, category, sort, brand}: {limit: number, page: number, category?: string, sort?: string, brand?: string}): 
    Promise<ServiceResponse<ProductDataWithBrands>> {
        const params: Record<string, number | string> = {
            limit: limit,
            page: page,
        };

        if (category) {
            params.category = category;
        }

        if (sort) {
            params.sort = sort
        }

        if (brand) {
            params.brand = brand;
        };

        return HttpClient.punchEndPoint<undefined, ProductDataWithBrands>({
            url: '/products',
            params,
            method: 'GET',
            isPublic: true,
        });
    }
}