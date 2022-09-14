import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import MyVote from './MyVote';






// card singola come da nome dove renderizziamo le singole info di ogni gioco 


const SingleCard = (props) => {
    const [data, setData] = useState("");


    // localStorage.setItem(props.game.title, JSON.stringify(data));
    useEffect(() => {
        const data = localStorage.getItem(MyVote)
        if (data) {
            setData(JSON.parse(data))
            console.log(data)
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem(props.game.title, JSON.stringify(data))
    })


    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(event);
    }


    return (
        <>

            <Card className='mb-3 mt-5 --card' onSubmit={handleSubmit}
                type="submit"
                value={data}
                onChange={(e) => setData(e.target.value)} >
                <Card.Img variant="top" src={props.game.thumbnail} />
                <Card.Body>
                    <Card.Title className='--card-text-title'>
                        {props.game.title}
                    </Card.Title>
                    <Card.Text className='--card-text'>
                        {props.game.short_description}
                    </Card.Text>
                    <Card.Footer>
                        <MyVote />

                    </Card.Footer>
                    <Button className='btn btn-dark' type="submit" value={data} onClick={(e) => setData(e.target.value)} >Salva</Button>
                </Card.Body>
            </Card >

        </>
    )

}





export default SingleCard
