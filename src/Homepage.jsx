import React from 'react';
import Searchbar from './components/homepage/Searchbar';
import Logout from './components/homepage/Logout';

const Homepage = ({token}) => {
  
  return (
    <div>
      {/* Featured Cards */}
      <section className="px-4 py-8 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Card 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Featured Card 1</h2>
            <p className="text-sm">Description of the featured content.</p>
          </div>

          {/* Featured Card 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Featured Card 2</h2>
            <p className="text-sm">Description of the featured content.</p>
          </div>

          {/* Featured Card 3 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Featured Card 3</h2>
            <p className="text-sm">Description of the featured content.</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 py-6 max-w-screen-lg mx-auto">
        <div className="max-w-md mx-auto">
          <Searchbar token={token} />
        </div>
      </section>

      {/* Random Button */}
      <section className="px-4 py-2 flex justify-center max-w-screen-lg mx-auto">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-semibold">
          Random
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 max-w-screen-lg mx-auto">
        <p>&copy; 2024 Music App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage
