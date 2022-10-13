import type { NextPage } from "next";
import Link from "next/link";
import Helmet from "../components/Helmet";
import { ArticalsType} from "../components/Types";

const Home: NextPage<ArticalsType> = () => {
  
  return (
    <div>
     
      <Helmet
        title="Homepage"
        metaName="description"
        metaContent="development,practice react"
        favicon="/favicon.ico"
      />
    <ul>
      <li>
        <Link replace href='clients'>Clients</Link>
        </li>
      <li> <Link href='portfolio'>Portfolio</Link></li>
    </ul>
    </div>
  );
};

export default Home;


