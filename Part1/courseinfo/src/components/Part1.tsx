import React from 'react';

interface PartProps {
  part: string;
  exercise: number;
}
const Part1: React.FC<PartProps> = ({ part, exercise }) => {
  return (
    <div>
      {' '}
      <p>
        {part} {exercise}
      </p>
    </div>
  );
};

export default Part1;
