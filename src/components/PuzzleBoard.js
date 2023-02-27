import React from 'react';
import './PuzzleBoard.scss';

function PuzzleBaord() {
    const tiles = [{'id':0 , 'front':'blank', 'back':'tile0'},
                    {'id':1 , 'front':'blank', 'back':'tile1'},
                    {'id':2 , 'front':'blank', 'back':'tile2'},
                    {'id':3 , 'front':'blank', 'back':'tile3'},
                    {'id':4 , 'front':'blank', 'back':'tile4'},
                    {'id':5 , 'front':'blank', 'back':'tile5'},
                    {'id':6 , 'front':'blank', 'back':'tile6'},
                    {'id':7 , 'front':'blank', 'back':'tile7'},
                    {'id':8 , 'front':'blank', 'back':'tile8'},
                    {'id':9 , 'front':'blank', 'back':'tile9'},
                    {'id':10 , 'front':'blank', 'back':'tile10'},
                    {'id':11 , 'front':'blank', 'back':'tile11'},
                    {'id':12 , 'front':'blank', 'back':'tile12'},
                    {'id':13 , 'front':'blank', 'back':'tile13'},
                    {'id':14 , 'front':'blank', 'back':'tile14'},
                    {'id':15 , 'front':'blank', 'back':'tile15'}
                ];
  return (
    <div className='puzzle-board-container'>
        <div className="puzzle-board-main">
            {tiles.map((tile,index)=>(
            <div className='tile'>{tile.id} {index}</div>
            ))}         
        </div>
    </div>
  )
}

export default PuzzleBaord;
