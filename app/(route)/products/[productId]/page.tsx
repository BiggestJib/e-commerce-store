import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import { Container } from "@/components/container";
import { Info } from "@/components/info";
import { RelatedProducts } from "@/components/related-product-list";
import Gallery from "@/components/gallery/gallery";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  // Filter out the current product from suggested products
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const filteredProducts = suggestedProducts.filter(
    (item) => item.id !== params.productId
  );

  return (
    <div className="bg-white transition-colors duration-500 ease-in-out">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12">
            {/* Gallery Section with hover effect */}
            <div className="group transition-transform duration-500 ease-in-out hover:scale-105">
              <Gallery images={product.images} />
            </div>

            {/* Info Section with smooth transition */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 transition-all duration-500 ease-in-out">
              <Info data={product} />
            </div>
          </div>

          <hr className="my-10 border-gray-300 transition-colors duration-500 ease-in-out" />

          {/* Related Products */}
          <div className="transition-transform duration-500 ease-in-out hover:translate-y-2">
            <RelatedProducts items={filteredProducts} title="Related Items" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
