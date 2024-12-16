import React from "react";

function Card({ item, calculateEngagement, calculateReach, onViewDetails }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Engagement Score: </span>
          {calculateEngagement(item).toLocaleString()}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Reach: </span>
          {calculateReach(item).toLocaleString()}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Category: </span>
          {item.category}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Location: </span>
          {item.location}
        </p>
      </div>
      <button
        onClick={onViewDetails}
        className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
      >
        View Details
      </button>
    </div>
  );
}

export default Card;
