import { useState } from "react";
import './index.css';
import data from "./accordiandata";

export default function Accordion() { // Fixed typo in the component name to follow naming conventions
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [multipleSelection, setMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    // Fixed typo: 'hundleSingleSelection' -> 'handleSingleSelection'
    function handleSingleSelection(getCurrentId) {
        setSelectedDiv(getCurrentId === selectedDiv ? null : getCurrentId);
    }

    // Fixed typo: 'HundleMultipleSelection' -> 'handleMultipleSelection'
    function handleMultipleSelection(getCurrentId) {
        const copyMultiple = [...multiple];
        const index = copyMultiple.indexOf(getCurrentId);

        if (index > -1) {
            copyMultiple.splice(index, 1); // Corrected: Using splice to remove an item
        } else {
            copyMultiple.push(getCurrentId); // Add the item if it's not in the list
        }
        setMultiple(copyMultiple);
        console.log(copyMultiple);
    }

    function toggleSelection() {
        setMultipleSelection(!multipleSelection);
        // Reset selected state when toggling between single and multiple selection
        setSelectedDiv(null);
        setMultiple([]);
    }

    return (
        <div className="wrapper">
            {/* Button to toggle between Single and Multiple selection */}
            <button className="changebtn" onClick={toggleSelection}>
                {multipleSelection ? "Single Selection" : "Multiple Selection"}
            </button>

            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div
                            key={dataItem.id}
                            className="item"
                            // Simplified logic for handling selection based on `multipleSelection` state
                            onClick={() =>
                                multipleSelection
                                    ? handleMultipleSelection(dataItem.id)
                                    : handleSingleSelection(dataItem.id)
                            }
                        >
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* Conditionally rendering the answer based on selection mode */}
                            {multipleSelection
                                ? multiple.includes(dataItem.id) && (
                                      <div className="answer">{dataItem.answer}</div>
                                  )
                                : selectedDiv === dataItem.id && (
                                      <div className="answer">{dataItem.answer}</div>
                                  )}
                        </div>
                    ))
                ) : (
                    <div>No data found here!!</div>
                )}
            </div>
        </div>
    );
}
