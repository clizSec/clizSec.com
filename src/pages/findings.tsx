import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Findings from 'components/Findings';

const FindingsPage: React.FC = () => (
  <Layout>
    <SEO title="Findings" />
    <Findings />
  </Layout>
);

export default FindingsPage;
