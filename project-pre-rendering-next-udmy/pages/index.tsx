import type { NextPage } from "next";
import Link from "next/link";
import { ArticalsType } from "../components/Types";
import fs from "fs/promises";
import path from "path";

const Home: NextPage<ArticalsType> = ({ products }: any) => {
  console.log({ products });

  return (
    <>
      <ul>
        {products.map(({ title, id }: any) => (
          <li key={id}>
            <Link href={`/products/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  console.log("RE(Genearting....)");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const buffer = await fs.readFile(filePath);
  const products = JSON.parse(buffer.toString()).products;
  if (!products) {
    return {
      redirect:{
        destination:'/no-data'
      }
    };
  }
  if (products.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
