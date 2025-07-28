const Header = ({course}) => {
    return(
      <div>
        <h1>{course.name}</h1>
      </div>
    )
}
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <p key={i}>
          <strong>{part.name}:</strong> {part.exercises}
        </p>
      ))}
  </div>
  )
}
const Total = ({ parts }) =>{
  let Total_Exercise = 0
  for(let i = 0; i < parts.length; i++){
    Total_Exercise += parts[i].exercises
  }

  return(
    <div>
      <p><strong>Total Exercises: </strong> {Total_Exercise}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
    
    {name: 'Fundamentals of React',  
    exercises: 10
    }, 
    {
      name: 'Using props to pass data', 
      exercises: 7
    },
    {
      name: 'State of a component', 
      exercises: 14
    }
    ]}
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App