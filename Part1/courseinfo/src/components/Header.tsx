import React from 'react';
interface Course {
  course: string;
}

const Header = (props: Course) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;
