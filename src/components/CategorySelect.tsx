// Select.tsx
import React from 'react';

interface SelectProps {
    options: string[]; // List of options
    selectedValue: string; // The currently selected value
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Function to handle value change
    label?: string; // Optional label for the select
    className?: string; // Optional class name for custom styling
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange, label, className }) => {
    return (
        <div className={className}>
            {label && <label className="block mb-2">{label}</label>}
            <select
                value={selectedValue}
                onChange={onChange}
                className="border h-10 w-full p-2 text-center rounded cursor-pointer"
            >
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
