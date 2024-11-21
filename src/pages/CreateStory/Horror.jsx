import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover from '../../assets/cover/cover.jpg';

const Horror = () => {
    return (
        <div>
            <Helmet>
                <title>BranchTales | Horror</title>
            </Helmet>
            <Cover img={cover} title={"Create Horror Stories"} details={"Confront your deepest fears and explore the chilling unknown. Horror stories evoke suspense and terror, drawing readers into eerie atmospheres and spine-tingling scenarios."}></Cover>
            <h3>This is Horror.</h3>
        </div>
    );
};

export default Horror;