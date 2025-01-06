import React from 'react';

interface Excercises {
  exercise: number;
}

interface ContentProps {
  exercises1: Excercises;

  exercises2: Excercises;

  exercises3: Excercises;
}

const Total: React.FC<ContentProps> = (props) => {
  return (
    <div>
      {' '}
      <p>
        Number of exercises{' '}
        {props.exercises1.exercise +
          props.exercises2.exercise +
          props.exercises3.exercise}
      </p>
    </div>
  );
};

export default Total;
