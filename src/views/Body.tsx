import styled from '@emotion/styled';
import React from 'react';
import { BG_COLOR } from '../utils/constants';

const BodyComponent = styled.div`
  background-color: ${BG_COLOR};
`;

export const Body: React.FC = ({ children }) => {
  return (
    <BodyComponent>
      {children}
    </BodyComponent>
  );
};
