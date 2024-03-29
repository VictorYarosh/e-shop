import HomeBanner from '@/app/components/HomeBanner';
import Container from '@/app/components/Container';
import { products } from '@/utils/products';
import ProductsCard from '@/app/components/products/ProductsCard';

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return (
              <div key={product.key}>
                <ProductsCard data={product} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
