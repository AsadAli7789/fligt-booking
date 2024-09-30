import React, { useState } from 'react';

const DropdownWithCheckboxes = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const closeDropdown = (event) => {
        if (!event.target.closest('.dropdown')) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <div className="mx-20 relative dropdown inline-block text-left">
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={toggleDropdown}
            >
                Select Options
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {Object.keys(selectedOptions).map((option) => (
                            <label key={option} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <input
                                    type="checkbox"
                                    name={option}
                                    checked={selectedOptions[option]}
                                    onChange={handleCheckboxChange}
                                    className="mr-2"
                                />
                                {option.replace('option', 'Option ')}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownWithCheckboxes;
