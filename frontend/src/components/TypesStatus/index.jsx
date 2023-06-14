import React from 'react';
import { Container, Tag } from './style'

export default function TypesStatus(){
    return(
        <Container>
            <Tag color="#5ba4cf">Pending</Tag>
            <Tag color="#ffa600">In Progress</Tag>
            <Tag color="#7bc86c">Finished</Tag>
        </Container>
    )
}