import T from 'prop-types';
// styles
import { RowWrap } from './styles';
// components
import Cell from './Cell';

const Row = ({ cells, isPrimary }) => {
  return (
    <RowWrap>
      {cells.map((cell) => (
        <Cell
          key={cell.id}
          isPrimaryRow={isPrimary}
          isPrimary={cell.isPrimary}
        />
      ))}
    </RowWrap>
  );
};

Row.propTypes = {
  cells: T.arrayOf(T.object).isRequired,
  isPrimary: T.bool.isRequired,
};

export default Row;
