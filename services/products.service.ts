import { ProductCategory, ProductData } from "@/interfaces/product/products.interface";
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

    static getProducts({limit, page, category}: {limit: number, page: number, category: string}): Promise<ServiceResponse<ProductData>> {
        return HttpClient.punchEndPoint<undefined, ProductData>({
            url: '/products',
            params: {limit, page, category},
            method: 'GET',
            isPublic: true,
        });
    }
}