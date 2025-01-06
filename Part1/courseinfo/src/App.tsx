import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

interface Course {
  course: string;
}

interface Parts {
  part: string;
}

interface Excercises {
  exercise: number;
}

function App() {
  const course: Course = { course: 'Half Stack application development' };
  const part1: Parts = { part: 'Fundamentals of React' };
  const exercises1: Excercises = { exercise: 10 };
  const part2: Parts = { part: 'Using props to pass data' };
  const exercises2: Excercises = { exercise: 7 };
  const part3: Parts = { part: 'State of a comp' };
  const exercises3: Excercises = { exercise: 14 };

  return (
    <div>
      <Header course={course.course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
}

export default App;
