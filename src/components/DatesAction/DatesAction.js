/* بسم الله الرحمن الرحيم */

import {Button, Col, Row} from "react-bootstrap";
import {persons} from "../../data";

const DatesAction = ({setPersonDates}) => {
    return(
        <Row className="justify-content-center py-2">
            <Col sm="8" className="d-flex justify-content-between">
                <Button onClick={() => setPersonDates(persons)}>عرض الكل</Button>
                <Button onClick={() => setPersonDates([])}>مسح الكل</Button>
            </Col>
        </Row>
    )
}
export default DatesAction;

/* الحمد لله رب العالمين */