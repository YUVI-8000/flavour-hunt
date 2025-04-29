
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";

const Home = () => {

    return (
        <Header title="Our Recipes" bgClass="bg-image">
            <Button
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;