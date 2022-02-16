// == Import npm
import React, { useState, useEffect } from 'react';

import Grid from 'src/components/Grid';

// == Import
import './styles.scss';
import gridTab from 'src/gridTab/gridTab';
import gridHeader from 'src/gridTab/gridHeader';

// == Composant
const App = () => {
  const [gridTable, setGridTable] = useState(gridTab);

  const sendMissil = (targetCell) => {
    const newTable = gridTable.map((cell) => {
      if (cell.id === targetCell) {
        if (cell.status === 'b') {
          cell.status = 't';
        }
        else {
          cell.status = 'c';
        }
      }
      return cell;
    });
    setGridTable(newTable);
  };

  return (
    <div className="app">
      <Grid gridTable={gridTable} gridHeader={gridHeader} sendMissil={sendMissil} />
    </div>
  );
};

// == Export
export default App;
