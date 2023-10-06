/* بسم الله الرحمن الرحيم */

import {Container} from "react-bootstrap";
import "./App.css";
import {useState} from "react";
import {persons} from "../../data";
import DatesCount from "../DatesCount/DatesCount";
import DatesList from "../DatesList/DatesList";
import DatesAction from "../DatesAction/DatesAction";


function App() {
    const [personDates, setPersonDates] = useState(persons);

  return (
    <div className="App">
        <Container className="py-5">
            <DatesCount personDates={personDates} />
            <DatesList personDates={personDates} />
            <DatesAction setPersonDates={setPersonDates}/>
        </Container>
    </div>
  );
}


export default App;
