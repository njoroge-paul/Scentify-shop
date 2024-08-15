import { perfumes } from './data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Content() {
  const Navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const filteredPerfumes = perfumes.filter(perfume => {
    const name = perfume.name.toLowerCase();
    const description = perfume.description.toLowerCase();
    const query = searchQuery.toLowerCase();
    const price = perfume.price;

    return (
      (name.includes(query) || description.includes(query)) &&
      price >= minPrice &&
      price <= maxPrice
    );
  });

  const handleAddToCart=(perfume)=>{
    Navigate('/AddToCart.jsx',{state:perfume})
  }

  return (
    <div className="bg-[#F5F5F5] h-auto sm:mr-6 sm:ml-6 flex-grow">
      <div className="flex justify-center mt-4 mb-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
        <form className="flex items-center justify-between mt-6 gap-6 lg:gap-8 xl:gap-10">
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search..."
            className="search-input lg:p-2 xl:p-3 border-[#1F5AE0] border-2 placeholder:text-center rounded sm:w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%] hover:w-[40rem] ease-in-out duration-1000 hover:border-[#E01FBB]"
          />
          <div className="flex flex-col">
            <label>Min Price:</label>
            <input
              type="number"
              value={minPrice}
              onChange={e => setMinPrice(e.target.valueAsNumber)}
              className="w-full p-2 border-[#1F5AE0] border-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Max Price:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.valueAsNumber)}
              className="w-full p-2 border-[#1F5AE0] border-2 rounded"
            />
          </div>
          <button type="submit" className="hover:search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#1FE045] hover:text-[#1F5AE0]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-spacing-2 p-8 sm:flex-grow flex-wrap border-[#E01FBB] border- overflow-x-auto">
        {filteredPerfumes.map(perfume => (
          <div key={perfume.id} className="flex flex-col items-center p-8 bg-white text-gray-800">
            <img src={perfume.image} className="sm:h-50 sm:w-full" alt="" />
            <h1>{perfume.name}</h1>
            <p>{perfume.description}</p>
            <button 
             onClick={() => handleAddToCart(perfume)}
             className="rounded bg-[#1FE045] mt-3 sm:w-[50%] md:[25%] lg:w-[40%] p-2">
              Purchase (${perfume.price})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;