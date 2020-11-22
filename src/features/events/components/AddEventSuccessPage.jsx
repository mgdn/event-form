import styled from "styled-components";
import Header from "components/Header";
import Layout from "components/Layout";
import Card from "components/Card";

const MessageBox = styled(Card)`
  background: ${({ theme }) => theme.successBg};
`;

const StyledH2 = styled.h2`
  font-size: 1.8em;
  color: ${({ theme }) => theme.success};
  margin-bottom: 1rem;
`;

const AddEventSuccessPage = () => (
  <>
    <Header title="New Event" />
    <Layout>
      <MessageBox>
        <StyledH2>Success</StyledH2>
        <p>Event has been created</p>
      </MessageBox>
    </Layout>
  </>
);

export { AddEventSuccessPage as default };
