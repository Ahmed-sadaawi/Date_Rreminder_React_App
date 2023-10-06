/* بسم الله الرحمن الرحيم */

import {Col, Image, Row} from "react-bootstrap";

const DatesList = ({personDates}) => {
    return(
        <Row className="justify-content-center">
            <Col sm="8">
                <div className="rectangle">
                    {personDates.length ? (personDates.map(person => (
                        <div key={Math.random()} className="d-flex py-3 m-3 border-bottom align-items-center">
                            <Image src="image.webp" width={60} height={60} roundedCircle alt="img"/>
                            <div className="px-3">
                                <h4 className="d-inline">{person.name}</h4>
                                <p>{person.time} مساءاً</p>
                            </div>
                        </div>
                    ))) : <h2 className="text-center">ليس لديك مواعيد اليوم</h2>}
                </div>
            </Col>
        </Row>
    )
}
export default DatesList;

/* الحمد لله رب العالمين */