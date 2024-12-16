import React from "react";
import { categories, engagementRanges } from "../data/mockData";

function FilterSection({
  selectedCategory,
  setSelectedCategory,
  selectedRange,
  setSelectedRange,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {categories?.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Engagement Range
          </label>
          <select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="All">All</option>
            {engagementRanges.map(range => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              if (!e.target.value) {
                setSortOrder('asc');
              }
            }}
            className="w-full p-2 border rounded-md"
          >
            <option value="">None</option>
            <option value="engagement">Engagement Score</option>
            <option value="reach">Reach</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort Order
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={`w-full p-2 border rounded-md ${!sortBy ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!sortBy}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;