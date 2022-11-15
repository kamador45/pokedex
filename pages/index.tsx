import type { NextPage } from 'next';
import { MainLayouts } from '../Components/layouts';
import { GetStaticProps } from 'next'
import pokeApi from '../api/PokeApi';
import { PokemonListResp, SmallPokemon } from '../interfaces';
import { PokeList } from '../Components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {

  return (
    <MainLayouts titlePage='Home'>
      <PokeList list={pokemons}/>
    </MainLayouts>
  )
}

//Only server side and build time
export const getStaticProps: GetStaticProps = async (ctx) => {

  //Create request to API
  const {data} = await pokeApi.get<PokemonListResp>('/pokemon?limit=151');

  //store info in array
  const pokemons:SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke, // Clone array
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default Home;

