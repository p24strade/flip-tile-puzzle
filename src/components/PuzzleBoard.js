import React from 'react';
import './PuzzleBoard.scss';
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';
import Project from './Project';


function PuzzleBaord() {

   return (
    <div className='puzzle-board-container'>
        <div className="puzzle-board-main">
            <Project/>   
        </div>
    </div>
  )
}

export default PuzzleBaord;
