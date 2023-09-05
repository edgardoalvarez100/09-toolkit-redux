import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemos } from "./store/slices/pokemon";


export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { pokemons, page, isLoading } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemos())
    }, [])



    return (
        <>
            <h1>Pokemon App</h1>

            <hr />
            <span>Loading: {isLoading ? "True" : "False"}</span>
            <ul>
                {pokemons.map(poke => {
                    console.log(poke)
                    return <li key={poke.name}>{poke.name}</li>
                })}
            </ul>

            <button disabled={isLoading} onClick={() => {
                dispatch(getPokemos(page))
            }}>Next</button>
        </>
    )
}
