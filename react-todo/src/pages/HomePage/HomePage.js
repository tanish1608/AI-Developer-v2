 
import './HomePage.css';
import TaskForm from '../../components/TaskForm/TaskForm';  
 import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <h1>Welcome to the Task Manager</h1>
      <p>Here, you can add and manage your tasks.</p>
      <TaskForm />
      <hr />
   
      <Link to="/about">Learn more about us</Link>
    </div>
  );
}
