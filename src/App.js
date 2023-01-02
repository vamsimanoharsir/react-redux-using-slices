import './App.css';
import Form from './components/Form';
import {Provider, useSelector} from 'react-redux';
import {selectValue} from './components/UserSlice'
import Logout from './components/Logout';

function App() {

  const value = useSelector(selectValue)
  console.log(value)

    return (
      <div>
        {/* changes made in app.js */}
        {/* alter these conditions to check state in redux in console */}
        {value? <Form /> : <Logout />}
      </div>
    );
}

export default App;
