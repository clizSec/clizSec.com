import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const KalbPage: React.FC = () => (
  <Layout>
    <SEO title="Kalb Page" />
    <Container section>
      <TitleSection title="Kalb" subtitle="Welcome to the Kalbs" center />
      <p className="mt-4 text-center w-full">Congratulations, you've joined the kalbs.</p>
    </Container>
  </Layout>
);

export default KalbPage;
