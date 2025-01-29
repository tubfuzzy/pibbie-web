import type { NextPage } from "next";
import { client } from "../lib/client";

const Home: NextPage<{ }> = ({ }) => {
  return (
    <div>

    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products,
    },
  };
};
