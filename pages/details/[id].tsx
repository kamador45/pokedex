import { FC } from "react";
import {MainLayouts} from "../../Components/layouts";
import {useRouter} from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import type { NextPage } from 'next';

//define interface
interface Props {
    id: string;
    name:string;
    image:string;
    url:string;
}

const PokeProfile:NextPage<Props> = ({id, name, image, url}) => {
    return (
        <MainLayouts titlePage={'PokeProfile'}>
            <h2>{name} - {id}</h2>
        </MainLayouts>
    )

}

//GetStaticPaths generate SSP
export const getStaticPaths:GetStaticPaths = async ()  => {
    return {
        paths: [{
            params:{id:'1'},
        },{
            params:{id:'2'},
        },{
            params:{id:'3'},
        }
    ],
        fallback: false,
    }
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    return {
        props:{
            id:1,
            name:'Bulbasour',
            image:'',
            url:''
        }
    }
}

export default PokeProfile;