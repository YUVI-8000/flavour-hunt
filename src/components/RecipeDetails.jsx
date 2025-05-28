import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid, Header, Image, List, Segment } from 'semantic-ui-react';
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
        <Container style={{ marginTop: '8.5em', marginBottom: '2em' }}>
            <Grid stackable columns={2} verticalAlign="top">
                <Grid.Column>
                    <Button 
                        as={Link}
                        to={'/recipes'}
                        content="Back to Recipe List"
                        color="yellow"
                        icon="arrow left"
                        style={{ marginBottom: 30 }}
                    />
                    <Image src={recipe.image} rounded bordered style={{ maxHeight: 400, objectFit: 'cover' }} />
                </Grid.Column>
                <Grid.Column>
                    <Header size="huge" style={{ color: '#2185D0' }}>{recipe.title}</Header>
                    <p><strong>Ready in:</strong> {recipe.readyInMinutes} mins</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>

                    <Button 
                        as="a"
                        href={recipe.sourceUrl}
                        target="_blank"
                        content="View Full Recipe"
                        color="green"
                        icon="external alternate"
                        style={{ margin: '1em 0' }}
                    />

                    <Header size="large" content="Ingredients" style={{ marginTop: 30 }} />
                    <Segment.Group>
                        {recipe.extendedIngredients?.map((ingredient, i) => (
                            <Segment key={i}>
                                <List.Item>
                                    <List.Icon name="check circle" color="green" />
                                    <List.Content>{ingredient.original}</List.Content>
                                </List.Item>
                            </Segment>
                        ))}
                    </Segment.Group>
                </Grid.Column>
            </Grid>
        </Container>
    ) : null;
};

export default RecipeDetails;
