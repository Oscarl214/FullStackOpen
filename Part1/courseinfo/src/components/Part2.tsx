import React from 'react';

interface PartProps {
  part: string;
  exercise: number;
}
const Part2: React.FC<PartProps> = ({ part, exercise }) => {
  return (
    <div>
      {' '}
      <p>
        {part} {exercise}
      </p>
    </div>
  );
};

export default Part2;
