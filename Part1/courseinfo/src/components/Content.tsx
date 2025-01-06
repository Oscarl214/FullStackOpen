import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

interface Parts {
  part: string;
}

interface Excercises {
  exercise: number;
}

interface ContentProps {
  part1: Parts;
  exercises1: Excercises;
  part2: Parts;
  exercises2: Excercises;
  part3: Parts;
  exercises3: Excercises;
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      <Part1 part={props.part1.part} exercise={props.exercises1.exercise} />

      <Part2 part={props.part2.part} exercise={props.exercises2.exercise} />
      <Part3 part={props.part3.part} exercise={props.exercises3.exercise} />
    </div>
  );
};

export default Content;
