import { useEffect, useState } from "react";
import { Header, Message } from 'semantic-ui-react';
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSearchedResult();
    }, [searchedQuery]);

 const getSearchedResult = async () => {
    setLoading(true);
    setError(null);
    try {
        let result = await getRecipes(searchedQuery);
        if (result && result.results?.length > 0) {
            setRecipes(result.results);
        } else {
            setRecipes([]);
            setError('No recipes found for your query.');
        }
    } catch (err) {
        setError('Something went wrong. Please try again later.');
    }
    setLoading(false);
};


    return (
        <>
            <Search setSearchedQuery={setSearchedQuery} />

            {loading && (
                <Header textAlign="center" size="medium" style={{ marginTop: 20 }}>
                    Loading recipes...
                </Header>
            )}

            {error && (
                <Message negative>
                    <Message.Header>Error</Message.Header>
                    <p>{error}</p>
                </Message>
            )}

            {!loading && !error && (
                <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
            )}
        </>
    );
};

export default Recipes;
