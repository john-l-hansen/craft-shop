import React, { Component, useState } from 'react' 
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function Figmabutton(props){

    const [figmabuttonState, setFigmabuttonState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setFigmabuttonState({
            ...figmabuttonState,
            showColor:!figmabuttonState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        console.log(e.target.classList.value)
        setFigmabuttonState({
            ...figmabuttonState,
            showColor:!figmabuttonState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setFigmabuttonState({
            ...figmabuttonState,
            selectedFont: e.target.value,
        })
    }


   

    
    return(
        <>
        <a href={props.figmaurl} target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-sm dark:text-night-200 inline-flex items-center justify-between rounded-lg border border-night-400 py-2 pl-4 pr-5 font-helvetica font-medium text-night-800 transition ease-in-out hover:bg-night-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-night-400">
                <div className="mr-2 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                        <g clip-path="url(#a)">
                        <path fill="#0ACF83" d="M6 18c1.656 0 3-1.344 3-3v-3H6a3.001 3.001 0 0 0 0 6Z" />
                        <path fill="#A259FF" d="M3 9c0-1.656 1.344-3 3-3h3v6H6c-1.656 0-3-1.344-3-3Z" />
                        <path fill="#F24E1E" d="M3 3c0-1.656 1.344-3 3-3h3v6H6C4.344 6 3 4.656 3 3Z" />
                        <path fill="#FF7262" d="M9 0h3a3.001 3.001 0 0 1 0 6H9V0Z" />
                        <path fill="#1ABCFE" d="M15 9a3.001 3.001 0 0 1-6 0 3.001 3.001 0 0 1 6 0Z" />
                        </g>
                        <defs>
                        <clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z" /></clipPath>
                        </defs>
                    </svg>
                </div>
                {props.figmatext || "View Figma Component"}
                <span className="sr-only">Icon indicating next</span>
            </button>
        </a>
            {/*<PreviewWindowTwossss
            filledButtonComp={filledButtonComp} 
            filledButtonCompString={filledButtonCompString}
            showColor={figmabuttonState.showColor} 
            selectedColor={figmabuttonState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}
            />*/}
        </>
    )
}


