'use client'
import React, { useState } from 'react';
import { mockData, engagementRanges } from '../data/mockData';
import FilterSection from '../components/FilterSection';
import Modal from '../components/Modal';
import dynamic from "next/dynamic";

const Card = dynamic(() => import('../components/Card'), { ssr: false });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRange, setSelectedRange] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedItem, setSelectedItem] = useState(null);

  const calculateEngagement = (item) => item.likes + item.shares + item.comments;
  const calculateReach = (item) => 
    Math.floor((item.followers * calculateEngagement(item)) / 100);

  const filteredAndSortedData = mockData
  .filter(item => {
    const categoryMatch = selectedCategory === 'All' || 
      item.category === selectedCategory;

    const engagement = calculateEngagement(item);
    const selectedRangeObj = engagementRanges.find(
      range => range.label === selectedRange
    );
    
    const rangeMatch = selectedRange === 'All' || (
      engagement >= selectedRangeObj?.min && 
      engagement <= selectedRangeObj?.max
    );
    
    return categoryMatch && rangeMatch;
  })
  .sort((a, b) => {
    if (!sortBy) return 0;

    let comparison = 0;
    
    if (sortBy === 'engagement') {
      const engagementA = calculateEngagement(a);
      const engagementB = calculateEngagement(b);
      comparison = engagementA - engagementB;
    } else if (sortBy === 'reach') {
      const reachA = calculateReach(a);
      const reachB = calculateReach(b);
      comparison = reachA - reachB;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });


  return (
    <div className="min-h-screen bg-violet-600 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Data Dashboard</h1>
        
        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredAndSortedData.map(item => (
            <Card
              key={item.id}
              item={item}
              calculateEngagement={calculateEngagement}
              calculateReach={calculateReach}
              onViewDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {selectedItem && (
          <Modal
            item={selectedItem}
            calculateEngagement={calculateEngagement}
            calculateReach={calculateReach}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;