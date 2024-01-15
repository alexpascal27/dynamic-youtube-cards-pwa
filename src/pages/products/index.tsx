import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {Product} from "@/types/products";
import createApolloClient from "../../../apollo-client";
import {gql} from "@apollo/client";

export async function getServerSideProps() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetProducts {
                productSearch {
                    id
                    name
                    price
                }
            }
        `,
    });
    const products: Product[] = data.productSearch
    return {
        props: {
            products
        },
    };
}

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