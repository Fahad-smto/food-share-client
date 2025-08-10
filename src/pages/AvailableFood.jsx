import { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import Loading from '../components/Loading';

const AvailableFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(true);
    const [columns, setColumns] = useState(3);  

    const fetchFoods = () => {
        let url = `https://food-share-server-pi.vercel.app/foods`;
        const params = [];

        if (searchTerm) {
            params.push(`search=${searchTerm}`);
        }
        if (sortOption) {
            params.push(`sort=${sortOption}`);
        }

        if (params.length > 0) {
            url += `?${params.join('&')}`;
        }

        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchFoods();
    }, [searchTerm, sortOption]);

    const handleSearch = (e) => {
        e.preventDefault();
        const input = e.target.search.value.trim();
        setSearchTerm(input);
    };

    const isFiltered = searchTerm || sortOption;

    const toggleColumns = () => {
        setColumns(prev => (prev === 3 ? 2 : 3));
    };

    return (
        <div className="m-5 p-5">
            <h2 className="text-3xl font-bold mb-4 text-center mt-5 ">
                {isFiltered
                    ? searchTerm
                        ? 'Searched Foods'
                        : sortOption === 'expiry'
                            ? 'Sorted by Expiry Date'
                            : 'Sorted by Newest Added'
                    : <p className='text-base-content'>All Available Foods</p>}
            </h2>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by name"
                        className="input input-bordered"
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>

                {/* Dropdown Sort Option */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort Options
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => setSortOption('expiry')}>Sort by Expiry Date</button></li>
                        <li><button onClick={() => setSortOption('new')}>Sort by Newest Added</button></li>
                        <li><button onClick={() => setSortOption('')}>Clear Sort</button></li>
                    </ul>
                </div>

                {/* Toggle Layout Button */}
                <button
                    className="btn btn-secondary"
                    onClick={toggleColumns}
                >
                    Change Layout  
                </button>
            </div>

            {/* Food List */}
            {loading ? (
                <p className="text-center"><Loading /></p>
            ) : (
                <div
                    className={`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-${columns}`}
                >
                    {foods.map(food => (
                        <FoodCard key={food._id} food={food} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableFood;
