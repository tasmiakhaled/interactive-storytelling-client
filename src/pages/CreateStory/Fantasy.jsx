import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover from '../../assets/cover/cover.jpg';


const Fantasy = () => {
    return (
        <div>
            <Helmet>
                <title>BranchTales | Fantasy</title>
            </Helmet>
            <Cover img={cover} title={"Create Fantasy Stories"} details={"Enter magical realms with mythical creatures, powerful sorcery, and heroic quests. Fantasy stories blend imagination with otherworldly adventures, creating unforgettable narratives."}></Cover>
            <h3>This is Fantasy.</h3>
        </div>
    );
};

export default Fantasy;