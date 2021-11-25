import styled from 'styled-components';
// constants
import { CELL_SIZE } from '../../../../constants';

export const CellWrap = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  border: 1px solid black;
  background-color: ${({ color }) => color};
`;
