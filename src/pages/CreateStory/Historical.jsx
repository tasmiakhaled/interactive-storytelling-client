import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover from '../../assets/cover/cover.jpg';


const Historical = () => {
    return (
        <div>
            <Helmet>
                <title>BranchTales | Historical</title>
            </Helmet>
            <Cover img={cover} title={"Create Historical Stories"} details={"Step back in time and experience the events, cultures, and people that shaped our world. Historical tales offer a glimpse into significant moments, blending fiction with real-life settings."}></Cover>
            <h3>This is Historical.</h3>
        </div>
    );
};

export default Historical;