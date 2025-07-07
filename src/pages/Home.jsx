import Banner from "../components/Banner";
import FAQSection from "../components/FAQSection";
import FeaturedFoods from '../components/FeaturedFoods'
import FoodJourneySimple from "../components/FoodJourneySimple";
import HowItWorks from "../components/HowItWorks";
import WhyFoodSharing from "../components/WhyFoodSharing";
 

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>      
            <FeaturedFoods></FeaturedFoods>  
            <WhyFoodSharing></WhyFoodSharing>
            <FoodJourneySimple></FoodJourneySimple>
            <FAQSection></FAQSection>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;