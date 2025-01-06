import React from 'react';

interface PartProps {
  part: string;
  exercise: number;
}
const Part3: React.FC<PartProps> = ({ exercise, part }) => {
  return (
    <div>
      {' '}
      <p>
        {part} {exercise}
      </p>
    </div>
  );
};

export default Part3;
