import styled from '@emotion/styled';
import { Body } from '../views/Body';
import { SideMenu } from './SideMenu';
import { TitleBar } from './TitleBar';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 768px;
  box-shadow: 0px 0px 8px 6px rgba(0,0,0,0.2);
`;

export const MainContainer = () => {
  return (
    <Wrapper>
      <Container>
        <TitleBar />
        <Body>
          <SideMenu />
        </Body>
      </Container>
    </Wrapper>
  );
};
