import { Menu, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import { BG_COLOR_ACCENT } from '../utils/constants';

const Section = styled.div`
  background-color: ${BG_COLOR_ACCENT};
  max-width: 256px;
  color: white;
`;

export const SideMenu = () => {
  return (
    <Section>
      <MenuItem>YAML</MenuItem>
      <MenuItem>C++</MenuItem>
      <MenuItem>JSON</MenuItem>
      <MenuItem>TS</MenuItem>
      <MenuItem style={{ color: 'grey' }}>Add New ...</MenuItem>
    </Section>
  );
};
