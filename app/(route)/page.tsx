import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/container";
import { ProductList } from "@/components/product-list";

const HomePage = async () => {
  // Fetch featured products and billboard data
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("66ff192567c57afe36ce1c1e");

  return (
    <Container>
      <div className="space-y-12 pb-10">
        {/* Billboard Section */}
        <Billboard data={billboard} />

        {/* Featured Products Section */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
