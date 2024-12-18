// SearchBoxWithSuggestions.tsx
import React from 'react';

interface SearchBoxWithSuggestionsProps {
  searchTerm: string;
  categories: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategorySelect: (category: string) => void;
}

const SearchBoxWithSuggestions: React.FC<SearchBoxWithSuggestionsProps> = ({
  searchTerm,
  categories,
  onSearchChange,
  onCategorySelect,
}) => {
  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full mb-5">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full p-2 border rounded"
        placeholder="Search categories"
      />
      
      {/* Show filtered categories if there are any matches */}
      {searchTerm && filteredCategories.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 rounded">
          {filteredCategories.map((category) => (
            <li
              key={category}
              onClick={() => onCategorySelect(category)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
      
      {/* Empty state if no categories match */}
      {searchTerm && filteredCategories.length === 0 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 rounded p-2 text-gray-500">
          No categories found
        </div>
      )}
    </div>
  );
};

export default SearchBoxWithSuggestions;
