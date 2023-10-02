/* بسم الله الرحمن الرحيم */

import {Container, Row, Col, Button, Image} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Container>
            <h2 className="my-5">لديك ٤ مواعيد اليوم</h2>
            <Row className="rectangle">
                <Col>

                <Row>
                    <Col>
                        <Image className="img"
                            src="https://static.vecteezy.com/system/resources/thumbnails/022/448/286/small/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg"
                            roundedCircle
                        />
                    </Col>

                    <Col>
                        <h4>محمود ربيع</h4>
                    </Col>

                    <Col>
                        <p>10:30 PM</p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row className="justify-content-between my-3">
                <Col sm="2" as={Button}>مسح البيانات</Col>
                <Col sm="2" as={Button}>عرض الكل</Col>
            </Row>
        </Container>
    </div>
  );
}


export default App;
