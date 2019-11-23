import React from "react";
import { Link } from "gatsby";

import Layout from "../components/website/Layout";

function IndexPage() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          <Link to="/app">Go to the app</Link>
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
