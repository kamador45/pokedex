import { FC } from "react";
import {MainLayouts} from "../../Components/layouts";
import {useRouter} from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import type { NextPage } from 'next';
import {Card, Col, Container, Grid, Image, Row, Text} from "@nextui-org/react";
import {PokeDetails} from "../../interfaces";
import pokeApi from "../../api/PokeApi";

//define interface
interface Props {
    pokemon:PokeDetails
}

const PokeProfile:NextPage<Props> = ({pokemon}) => {

    return (
        <MainLayouts titlePage={'PokeProfile'}>
            <Container>
                <Grid>
                    <Card.Header>
                        <Text
                            h1
                            weight={'bold'}
                            css={{textAlign:'center'}}
                        >Pokemon Found it</Text>
                    </Card.Header>
                    <Card.Body css={{p:1}}>
                        <Row gap={1} justify={'center'} align={'center'}>
                            <Card.Image
                                src={pokemon.sprites.front_default}
                                width={'40%'}
                                height={200}
                                objectFit={'contain'}
                            />
                        </Row>
                        <Row gap={3} css={{p:5}}>
                            <Row align={'center'}>
                                <h1>Weight: {pokemon.weight}</h1>
                            </Row>
                            {
                                pokemon.abilities.map((x) => (
                                    <Row align={'center'} key={pokemon.id}>
                                        <h1>Abilities: {x.ability.name}</h1>
                                    </Row>
                                ))
                            }
                        </Row>
                    </Card.Body>
                </Grid>
            </Container>
        </MainLayouts>
    )
}

//GetStaticPaths generate SSP
export const getStaticPaths:GetStaticPaths = async ()  => {

    //Generate array
    const arrayCount:string[] = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths:arrayCount.map( id => ({
            params: {id:id}
        })),
        fallback: false,
    }
}

export const getStaticProps:GetStaticProps = async (ctx) => {

    const {
        id
    } = ctx.params as {id:string};

    const { data } = await pokeApi.get<Response>(`/pokemon/${id}`);

    return {
        props:{
            pokemon:data
        }
    }
}

export default PokeProfile;