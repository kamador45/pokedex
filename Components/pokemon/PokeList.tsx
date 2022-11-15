import { FC } from "react";
import {Button, Card, Grid, Row, Text} from '@nextui-org/react';
import { SmallPokemon } from "../../interfaces";
import {useRouter} from "next/router";

interface Props {
    list:SmallPokemon[];
}

export const PokeList:FC<Props> = ({list}) => {

    //useRouter
    const router = useRouter();

    return(
        <Grid.Container gap={2} justify='flex-start'>
            {
                list.map((x) => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={x.id} onClick={() => (router.push(`/details/${x.id}`))}>
                        <Card isHoverable={true} itemScope={true} >
                            <Card.Body css={{p: 1}}>
                                <Card.Image src={x.image} width="100%" height={140} />
                            </Card.Body>
                            <Card.Footer>
                                <Row justify='space-between'>
                                    <Text transform='capitalize'>{ x.id }</Text>
                                    <Text>{ x.name }</Text>
                                    <Button size={'xs'} onClick={() => (router.push(`/details/${x.id}`))} >Details</Button>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}