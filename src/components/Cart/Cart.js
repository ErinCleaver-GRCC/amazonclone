import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Cart() {
    return (
        <Container>
            <Link to="/databaseUpdate">
                Update Database
            </Link>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    display: grid;
    height: 1000px;
`