import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <Container section>
      <TitleSection title="404" subtitle="Page not found" center />
      <p className="mt-4 text-center w-full">Congratulations, you broke the page.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
