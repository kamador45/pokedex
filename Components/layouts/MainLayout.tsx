import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui/Navbar";


//Define type
interface Props {
    children: React.ReactNode;
    titlePage: string;
}


export const MainLayouts: FC<Props> = ({ children, titlePage }) => {
    return(
        <>
            <Head>
                <title>Pokemon - { titlePage }</title>
                <meta name="author" content="Kevin Amador R" />
                <meta name="description" content="Informacion sobre pokemon" />
                <meta name="keywords" content="name_pokemon, pokedex" />
            </Head>
            {/* Navbar */}
            <Navbar />

            <main>
                {/* Children */}
                { children }
            </main>
        </>
    )
}