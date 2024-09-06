'use client';

import Title from "../components/title";
import Loader from "../components/loader";
import { useArtQuery } from '../types/generated';
import GraphqlError from '../components/graphql_error';
import art_styles from "../styles/art_page.module.css";

export default function Art() {

    const [{ data, fetching, error }] = useArtQuery();

    return (
        <div>
            <Title componentCat="artComponent" title="ART" backUrl="/"></Title>
            { fetching && <Loader/>}
            { error && <GraphqlError /> }
            <div className={art_styles.artContainer}>
                {data?.art.map((art, index) => {
                    return(
                        <div key={index} >
                            <img className={art_styles.image} src={art.image.rendition.url}></img>
                            <p className="P-Lato" style={{marginTop: "-3px"}}>{art.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}