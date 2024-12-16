import React from "react";

export default function Modal({ item, calculateEngagement, calculateReach, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Engagement Details</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Likes: </span>
                {item.likes}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Shares: </span>
                {item.shares}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Comments: </span>
                {item.comments}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Total Engagement Score: </span>
                {calculateEngagement(item)}
              </p>
            </div>
          </div>
          <div className="bg-slate-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Reach Details</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Followers: </span>
                {item.followers}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Total Reach: </span>
                {calculateReach(item)}
              </p>
            </div>
          </div>
          <div className="bg-slate-100 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Additional Information</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Category: </span>
                {item.category}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Location: </span>
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
