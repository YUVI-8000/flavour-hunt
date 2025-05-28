import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

const RecipeListItem = ({ recipe }) => {
    return (
        <Card fluid raised style={{ marginBottom: '2em', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
            <Image src={recipe.image} alt="thumbnail" wrapped ui={false} style={{ height: 200, objectFit: 'cover' }} />
            <Card.Content textAlign="center">
                <Card.Header style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2185D0' }}>
                    {recipe.title.length > 45 ? recipe.title.slice(0, 42) + '...' : recipe.title}
                </Card.Header>
            </Card.Content>
            <Card.Content extra textAlign="center">
                <Button 
                    as={Link}
                    to={`/recipes/${recipe.id}`}
                    content="View Details"
                    color="blue"
                    size="medium"
                />
            </Card.Content>
        </Card>
    )
};

export default RecipeListItem;
