import T from 'prop-types';
// styles
import { CellWrap } from './styles';
// helpers
import { getColor } from './helpers';

const Cell = ({ isPrimary, isPrimaryRow }) => {
  const color = getColor(isPrimary, isPrimaryRow);
  return <CellWrap color={color} />;
};

Cell.propRtypes = {
  isPrimary: T.bool.isRequired,
  isPrimaryRow: T.bool.isRequired,
};

export default Cell;
