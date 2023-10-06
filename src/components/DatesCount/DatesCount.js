/* بسم الله الرحمن الرحيم */

import {Col, Row} from "react-bootstrap";

const DatesCount = ({personDates}) => {
    return(
        <Row className="justify-content-center py-2">
            <Col sm="8">لديك {personDates.length} مواعيد اليوم</Col>
        </Row>
    )
}
export default DatesCount;

/* الحمد لله رب العالمين */