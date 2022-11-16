import { FC } from "react";
import {MainLayouts} from "../../Components/layouts";
import {useRouter} from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import type { NextPage } from 'next';
import {Button, Card, Col, Container, Grid, Image, Row, Text} from "@nextui-org/react";
import {PokeDetails} from "../../interfaces";
import pokeApi from "../../api/PokeApi";

//define interface
interface Props {
    pokemon:PokeDetails
}

const PokeProfile:NextPage<Props> = ({pokemon}) => {

    console.log(pokemon)
    return (
        <MainLayouts titlePage={'PokeProfile'}>
            <Grid.Container css={{marginTop:'5px'}} gap={2}>
                <Grid xs={12} sm={4} md={4}>
                    <Card css={{p:30}}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default}
                                alt={pokemon.name}
                                width={'100%'}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8} md={8}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1>{pokemon.name}</Text>
                            <Button color={'gradient'} ghost>Guardar</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container gap={0} display={'flex'} direction={'row'}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    width={'100%'}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    width={'100%'}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    width={'100%'}
                                    alt={pokemon.name}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
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