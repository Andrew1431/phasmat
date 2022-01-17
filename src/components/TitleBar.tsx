import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { TITLE_GREY, TITLE_GREY_HOVER } from '../utils/constants';

const TitleBarComponent = styled.div`
  height: 26px;
  background-color: ${TITLE_GREY};
  cursor: pointer;
  width: 100%;
  color: white;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  user-select: none;
  display: flex;
  align-items: center;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: ${TITLE_GREY_HOVER};
  }
`;

export const TitleBar = () => {
  return (
    <TitleBarComponent>
      <Typography style={{ marginLeft: '6px' }} align="left" variant="subtitle2">👻 PHASMAT</Typography>
      <Typography align="left" style={{ color: '#5a5a5a' }} variant="subtitle2">&nbsp;| Phasmophobia Invite Formatter</Typography>
    </TitleBarComponent>
  );
};
