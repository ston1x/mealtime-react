import { useState } from 'react';

export const OrderOptions = ({
  orderBy,
  onOrderByChange,
  orderDirection,
  onOrderDirectionChange
}) => {
  return (
    <div className="zone adjust-to-parent-full-width text-left mt-4 text-gray-900 dark:text-gray-400 border p-2 rounded-lg border-gray-300 dark:border-gray-800">
      <p className="mb-1">Order by:</p>

      <div className="grid grid-cols-2">
        <div id="order-by-selection">
          <div className="flex items-center">
            <input
              id="relevance"
              type="radio"
              value="relevance"
              name="order-by"
              checked={orderBy === 'relevance'}
              onChange={onOrderByChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              for="relevance"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Relevance
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="ratings"
              type="radio"
              value="ratings"
              name="order-by"
              checked={orderBy === 'ratings'}
              onChange={onOrderByChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label for="ratings" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Ratings
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="ingredients"
              type="radio"
              value="ingredients"
              name="order-by"
              checked={orderBy === 'ingredients'}
              onChange={onOrderByChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              for="ingredients"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Amount of ingredients
            </label>
          </div>
        </div>

        <div id="order-direction">
          <div className="flex items-center">
            <input
              id="desc"
              type="radio"
              value="desc"
              name="order-direction"
              checked={orderDirection === 'desc'}
              onChange={onOrderDirectionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label for="desc" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              desc
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="asc"
              type="radio"
              value="asc"
              name="order-direction"
              checked={orderDirection === 'asc'}
              onChange={onOrderDirectionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label for="asc" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              asc
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOptions;
