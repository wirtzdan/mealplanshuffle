import React from "react";

import Layout from "../components/website/Layout";
import SEO from "../components/website/SEO";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <span>404</span>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
