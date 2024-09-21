 import React, {useState} from "react";

function TemplateCard (props){

        const [showButtons, setShowButtons] = useState(false);
      
        const handleMouseEnter = () => {
          setShowButtons(true);
        };
      
        const handleMouseLeave = () => {
          setShowButtons(false);
        };

    return(
        <div className="bg-white w-96 h-48 mb-16 hover:opacity-10">
            <div className="shadow-md relative" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div className="h-3 bg-gray-200 pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
                </div>
               <img src={props.url} className="mb-5" />
               {showButtons && (
                    <div className="absolute top-20 inset-36 transform flex flex-col z-50 opacity-100">
                    <button className="bg-blue-500 text-white w-24 p-3 rounded-3xl mb-2 opacity-100 hover:opacity-95">Edit</button>
                    <button className="bg-white text-blue-500 w-24 p-3 rounded-3xl border border-blue-500 hover:bg-blue-500 hover:text-white">View</button>
                    </div>
                )}
            </div>
            <p className="">{props.name}</p>
        </div>
    )
}

export default TemplateCard;