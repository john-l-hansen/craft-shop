import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Metricwidget(){
    const [metricwidgetState, setMetricwidgetState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setMetricwidgetState({
            ...metricwidgetState,
            showColor:!metricwidgetState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setMetricwidgetState({
            ...metricwidgetState,
            showColor:!metricwidgetState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setMetricwidgetState({
            ...metricwidgetState,
            selectedFont: e.target.value,
        })
    }


    let metricwidgetComp = (
        
        <div className={"w-[250px] space-y-4 rounded-[1.25rem] bg-gray-50 dark:bg-gray-900 p-5 dark:text-white " + metricwidgetState.selectedFont}>
            <div className="flex justify-between ">
                <div className="text-bold te">Title</div>
                <a href="">
                <svg
                    
                    className="fill-current dark:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                    fill=""
                    />
                </svg>
                </a>
            </div>
            <div className="mt-4 flex justify-between">
                <div className="text-5xl">#</div>
                <div className="self-end text-sm">
                <span className="inline-flex items-center rounded bg-green-50 px-3 py-1.5 text-sm font-bold leading-5 text-green-400">
                    +18.75%
                </span>
                </div>
            </div>
        </div>
    )

        let metricwidgetCompString = 
        '<div class="w-[250px] space-y-4 rounded-[1.25rem] bg-gray-50 p-5 ' + metricwidgetState.selectedFont + '">\n'+
'    <div class="flex justify-between">\n'+
'        <div class="text-bold text-black">Title</div>\n'+
'        <a href="">\n'+
'        <svg\n'+
'            width="24"\n'+
'            height="24"\n'+
'            viewBox="0 0 24 24"\n'+
'            fill="none"\n'+
'            xmlns="http://www.w3.org/2000/svg"\n'+
'        >\n'+
'            <path\n'+
'            d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"\n'+
'            fill="#323232"\n'+
'            />\n'+
'        </svg>\n'+
'        </a>\n'+
'    </div>\n'+
'    <div class="mt-4 flex justify-between">\n'+
'        <div class="text-5xl">#</div>\n'+
'        <div class="self-end text-sm">\n'+
'        <span class="inline-flex items-center rounded-full bg-green-50 px-3 py-1.5 text-sm font-bold leading-5 text-green-400">\n'+
'            +18.75%\n'+
'        </span>\n'+
'        </div>\n'+
'    </div>\n'+
'</div>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            metricwidgetComp ={metricwidgetComp} 
            metricwidgetCompString={metricwidgetCompString}
            showColor={metricwidgetState.showColor} 
            selectedColor={metricwidgetState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}