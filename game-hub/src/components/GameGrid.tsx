import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number,
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: object;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: object;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: object;
    platforms: []
}

interface GameResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<GameResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    }, [])

    return (
        <>
        {error && <Text>{error}</Text>}
            <ul>
                {games.map((game: Game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid