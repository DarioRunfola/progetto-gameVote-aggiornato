import { Container, Row, Col } from 'react-bootstrap';
import SingleCard from "./SingleCard";


// struttura portatnte dove andiamo a mappare i giochi così che possiamo avevre una struttura a card a ordinata e responsive per la nostra app

const CardGame = (props) => {






    return (
        <>
            <Container >
                <Row className="justify-content-space-between">

                    {props.games.map((g) => (

                        <Col xs={12} md={3} key={g.id}>

                            <SingleCard game={g} />


                        </Col>
                    ))
                    }
                </Row>

            </Container>
        </>
    )







}


export default CardGame



