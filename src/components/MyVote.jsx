import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'




const MyVote = () => {

    const [myVoto, setMyVoto] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault();      
    // }
    console.log("MyVote funziona");
    return (

        <>
            <Form.Group
            // onSubmit={handleSubmit}

            >
                <Form.Select
                    aria-label="Default select example"
                    as='select'
                    className='p-1 mb-3'
                    value={myVoto}
                    onChange={(e) => setMyVoto(e.target.value)}
                >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>

                <Form.Label className='h4'>Vota il tuo gioco: </Form.Label>
                <Button
                    className='btn btn-primary p-1'
                    type="submit"
                >Salva</Button>

            </Form.Group>

        </>
    );

}






export default MyVote



