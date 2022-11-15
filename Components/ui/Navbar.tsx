import {FC} from "react";
import {Spacer, Text} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar: FC = () => {
    return(
        <div style={{
            display:'flex',
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            padding: '0px 20px',
            backgroundColor: 'red'
        }}>

            <Image 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} 
                width={70} 
                height={70}
            />

            <Link href={'/'}>
                <Text color={'white'} h2>Pokedex</Text>
            </Link>
            <Spacer css={{flex: 1}}/>
            <Text color={'white'} h3>Favorito</Text>
        </div>
    )
}