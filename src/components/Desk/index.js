// compoentnts
import Row from './Row';
// styles
import { DeskWrap } from './styles';
// constants
import { ROWS } from '../../constants';

const Desk = () => {
  return (
    <DeskWrap>
      {ROWS.map((row) => (
        <Row key={row.id} isPrimary={row.isPrimary} cells={row.cells} />
      ))}
    </DeskWrap>
  );
};

export default Desk;
