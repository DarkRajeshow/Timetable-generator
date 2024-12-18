import React from 'react';

const ContactMessagesSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      {/* Search and Sort Skeleton */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Skeleton Messages Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4 animate-pulse"></div>
              <div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="h-3 w-36 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            <div className="mb-4">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            <div className="flex justify-between">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, btnIndex) => (
                  <div 
                    key={btnIndex} 
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessagesSkeleton;