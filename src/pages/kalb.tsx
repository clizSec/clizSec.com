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
      <div style={{ alignSelf: 'center' }}>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF5u1y_q452wg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=NhdXnBY5Sm91NMucwvEUkrnCJNsDG0fWlFEVrKoKgBw" alt="NU" />
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGUJ7dFYC7efQ/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=SbnuDWyrmI3BkMkNvTKR8lugEAv1pJ2DvCwCdw6JTNs" alt="NU" />
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHUvoiKUAFQSQ/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=8_YkynNZjrAndplRrVcT8cAx_0vvmZFdHq2J5ZzxxxI" alt="NU" />

      </div>
      <p className="mt-4 text-center w-full">Congratulations agent, you've joined the kalbs.</p>
      </Container>
  </Layout>
);

export default KalbPage;
