import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/container";
import React from "react";
import { Filter } from "./components/filter";
import { NoResults } from "@/components/no-results";
import { ProductCard } from "@/components/product-card";
import { MobileFilter } from "./components/mobile-filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  // Fetch necessary data
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        {/* Billboard Section */}
        <Billboard data={category.billboard} />

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Mobile Filters */}
            <MobileFilter sizes={sizes} colors={colors} />

            {/* Desktop Filters */}
            <div className="hidden lg:block lg:col-span-1">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>

            {/* Products Section */}
            <div className="mt-6 lg:col-span-4 lg:mt-0 transition-opacity duration-500 ease-in-out opacity-100">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
