import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const ContactMe = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contactme section" } }) {
        frontmatter {
          title
          subtitle
          submitPlaceholder
          linkTo
        }
      }
    }
  `);

  const contact = markdownRemark.frontmatter;

  return (
    <Styled.ContactMe>
      <Container section>
        <TitleSection title={contact.title} subtitle={contact.subtitle} center />
        <Styled.Form>
          <Link to={contact.linkTo}>
            <Button primary block>
              {contact.submitPlaceholder}
            </Button>
          </Link>
        </Styled.Form>
      </Container>
    </Styled.ContactMe>
  );
};

export default ContactMe;
