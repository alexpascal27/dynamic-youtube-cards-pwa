import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Product} from "@/types/products";

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/api/products`)
    const products: Product[] = await res.json()
    // Pass data to the page via props
    return { props: { products } }
}) satisfies GetServerSideProps<{ products: Product[] }>

function ProductsPage({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <main>
            <div>
                <h1>Products</h1>
                <ul>
                    {products.map((product: Product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default ProductsPage;