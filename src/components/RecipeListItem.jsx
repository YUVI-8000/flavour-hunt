

import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

const RecipeListItem = ({ recipe }) => {
    return (
        <Card>
            <img src={recipe.image} alt="thumbnail" style={{ height: 170 }} />
            <Card.Content>
                <Card.Header content={recipe.title} />
            </Card.Content>
            <Card.Content>
                <Button 
                    as={Link}
                    to={`/recipes/${recipe.id}`} // Spoonacular uses `id`
                    content="Details"
                    color="blue"
                    size="tiny"
                />
            </Card.Content>
        </Card>
    )
};


export default RecipeListItem;