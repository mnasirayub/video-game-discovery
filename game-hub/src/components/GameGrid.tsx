import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/GamesHook";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
                {games.map(game =>
                    <GameCard game={game} />
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid