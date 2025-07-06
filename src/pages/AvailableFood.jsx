import { useLoaderData } from 'react-router';
import FoodCard from '../components/FoodCard';

const AvailableFood = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='m-5 p-5'>
            <h2 className="text-3xl font-bold mb-4 text-center mt-5">All Available Foods</h2>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 
            lg:grid-cols-3'>


{
    data.map(food =><FoodCard 
    key={food._id}
    food={food}
    ></FoodCard>)
}

            </div>
        </div>
    );
};

export default AvailableFood;