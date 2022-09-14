import { Form } from 'react-bootstrap'
import { useState } from 'react'







const MyVote = () => {
    const [myVote, setMyVote] = useState("1");


    const setVote = (event) => {
        console.log('ciao', event)
        setMyVote(event.target.value);

    }

    return (

        <>
            <Form.Group>
                <Form.Label>Vota il tuo gioco:</Form.Label>
                <Form.Select aria-label="Default select example"
                    as="select"
                    value={myVote}
                    onChange={setVote}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>
                
            </Form.Group>

        </>
    );

}






export default MyVote




