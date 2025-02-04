import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";
import HomeCard from "../components/HomeCard";
import Pagination from "../components/Pagination";
import PerPage from "../components/PerPage";
import ClipLoader from "react-spinners/ClipLoader";
const Home = ({searchTerm}) => {
    const [page, setPage] = useState(1);
    const [limit,setLimit] = useState(20);
    

    const {
        data: pokemonCount,
      } = useQuery({
        queryKey: ["count"],
        queryFn: async  () =>
            await axios.get(
            `https://pokeapi.co/api/v2/pokemon`
          ).then((response) => response.data.count)
        }
    );

    const {
        data: pokemonData,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ["pokemon",searchTerm ,page, limit],
        queryFn: async  () => 
            searchTerm
                ? axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
                ).then((res) => res.data)
                :
                await axios.get(
                    `https://pokeapi.co/api/v2/pokemon?offset=${
                    (page - 1) * limit
                    }&limit=${limit}`
                        ).then((res) => {
                            const { results } = res.data;
                            const requests = results.map((result) => axios.get(result.url));
                            return Promise.all(requests).then((responses) =>
                            responses.map((res) => res.data)
                            );
                    })
            }
    );

    function handlePrevClick() {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    }
    
    function handleNextClick() {
        setPage((prevPage) => prevPage + 1);
    }

    
    if (isLoading ) {
    return ( 
        <ClipLoader
            cssOverride={{margin:'0 auto', display: 'block'}}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        )
    }
    else if (isError) {
        return <div className="m-16 flex flex-wrap justify-center gap-14 ">Error Fetching Data, or no pokemon available!</div>;
    }
    else  if (searchTerm){
    return(
    <div className="m-16 flex flex-wrap justify-center gap-14 ">
        <HomeCard
            key={pokemonData.id}
            name={pokemonData?.name}
            height={pokemonData?.height}
            weight={pokemonData?.weight}
            image={pokemonData.sprites?.other?.home?.front_default}
            id={pokemonData.id}
            types={pokemonData.types}
            abilities={pokemonData.abilities}
        />
    </div>
    )
    }
    return (
    <>
    <PerPage 
    limit={limit}
    setLimit={setLimit}
    />
    <div className="m-16 flex flex-wrap justify-center gap-14 ">
    {Array.isArray(pokemonData) && 
        pokemonData.map((pokemon) => {
        return (
            <HomeCard
                key={pokemon.id}
                name={pokemon?.name}
                height={pokemon?.height}
                weight={pokemon?.weight}
                image={pokemon.sprites?.other?.home?.front_default}
                id={pokemon.id}
                types={pokemon.types}
                abilities={pokemon.abilities}
            />
        
        )
    })}

    </div>
    <Pagination
    page={page}
    totalPage={Math.ceil(pokemonCount/limit)}
    handlePrevClick={handlePrevClick}
    handleNextClick={handleNextClick}
    />

    </>
    )
}


Home.propTypes = {
    searchTerm: PropTypes.string,
    openBigCard: PropTypes.func,
  };
export default Home