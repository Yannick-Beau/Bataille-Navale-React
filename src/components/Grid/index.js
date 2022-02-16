import React from 'react';
import classNames from 'classnames';
import './grid.scss';

const Grid = ({ gridTable, gridHeader, sendMissil }) => {
  console.log('generation dela grille');
  return (
    <div className="grid">
      {gridHeader.row.map((row) => {
        console.log(row);
        return (
          <div className="row" key={row}>{gridHeader.columns.map((column) => {
            const id = `${column}${row}`;
            const currentCell = gridTable.find((cell) => cell.id === id);
            const cssClass = classNames(
              'cell',
              { 'cell-touch': currentCell.status === 't' },
              { 'cell-sunk': currentCell.status === 'c' },
            );
            return (
              <div
                className={cssClass}
                id={id}
                key={id}
                onClick={() => {
                  sendMissil(id);
                }}
              >{column}{row}
              </div>
            );
          })}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;

// const cellId = `cell${column}${row}`;
//         const cellName = `${gridHeader.columns[column]}${gridHeader.row[row]}`;
//         return (
//           <div className="cell" id={cellId} data-cell-name={cellName}>X</div>
//         );


//             const currentCell = gridTable.find((cell) => {
//               console.log('on es dans le find');
//               console.log(cell.id);
//               console.log(id);
//               return cell.id === id;
//             });
//             console.log(currentCell);
//             const cssClass = classNames(
//               'cell',
//               { 'cell-touch': currentCell.status === 't' },
//               { 'cell-sunk': currentCell.status === 'c' },
//             );
