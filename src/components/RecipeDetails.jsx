import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { getRecipe } from "../services/api";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipe(recipeId);
            if (result && result.title) {
                setRecipe(result);
            }
        };
        getData();
    }, []);

    return Object.keys(recipe).length > 0 ? (
        <Grid container stackable columns={2} className="detailsPageContent">
            <Grid.Column>
                <Button 
                    as={Link}
                    to={'/recipes'}
                    content="Back to Recipe List"
                    color="yellow"
                    style={{ marginBottom: 40 }}
                />
                <Image src={recipe.image} />
            </Grid.Column>
            <Grid.Column>
                <Header size="medium">{recipe.title}</Header>
                <p>Ready in: {recipe.readyInMinutes} mins</p>
                <p>Servings: {recipe.servings}</p>
                <Button 
                    as={"a"}
                    href={recipe.sourceUrl}
                    target="_blank"
                    content="Recipe Source"
                    color="green"
                />
                <Header size="large" content="Ingredients" />
                <Segment.Group>
                    {recipe.extendedIngredients?.map((ingredient, i) => (
                        <Segment key={i}>
                            <h5>{ingredient.original}</h5>
                        </Segment>
                    ))}
                </Segment.Group>
            </Grid.Column>
        </Grid>
    ) : null;
};

export default RecipeDetails;