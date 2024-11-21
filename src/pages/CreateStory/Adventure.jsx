import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover from '../../assets/cover/cover.jpg'


const Adventure = () => {
    return (
        <div>
            <Helmet>
                <title>BranchTales | Adventure</title>
            </Helmet>
            <Cover img={cover} title={"Create Adventurous Stories"} details={"Embark on epic journeys through untamed lands, face daring challenges, and overcome unimaginable odds. Adventure tales ignite the spirit of exploration and courage."}></Cover>
            <h3>This is Adventure.</h3>
        </div>
    );
};

export default Adventure;