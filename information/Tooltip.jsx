import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Tooltip(){
    const [tooltipState, setTooltipState] = useState({
        showColor: false,
        selectedColor:"bg-blue-100",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setTooltipState({
            ...tooltipState,
            showColor:!tooltipState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        //console.log(e.target.classList.value)
        setTooltipState({
            ...tooltipState,
            showColor:!tooltipState.showColor,
            selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setTooltipState({
            ...tooltipState,
            selectedFont: e.target.value,
        })
    }


    let tooltipComp = (
        <div>

        <div className="flex space-x-8">
            <div className="relative bg-gray-100 px-3 py-2 rounded-lg">
            <div className="text-gray-800 text-sm">
                <div className={tooltipState.selectedFont}>Tooltip</div>
            </div>
            <div className="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>
            </div>

            <div className="relative bg-gray-100 px-3 py-2 rounded-lg">
            <div className="text-gray-800 text-sm">
                <div className={tooltipState.selectedFont}>Tooltip</div>
            </div>
            <div className="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>
            </div>

            <div className="relative bg-gray-100 px-3 py-2 rounded-lg">
            <div className="text-gray-800 text-sm">
                <div className={tooltipState.selectedFont}>Tooltip</div>
            </div>
            <div className="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>
            </div>

            <div className="relative bg-gray-100 px-3 py-2 rounded-lg">
            <div className="text-gray-800 text-sm">
                <div className={tooltipState.selectedFont}>Tooltip</div>
            </div>
            <div className="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>
            </div>
        </div>
        <br></br>
        <div className="flex space-x-8">
            <div className="relative bg-gray-800 px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));"}}>
            <div className="text-white text-sm">
                <div>Tooltip</div>
            </div>
            <div className="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>

            <div className="relative bg-gray-800 px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));"}}>
            <div className="text-white text-sm">
            <div>Tooltip</div>
            </div>
            <div className="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>

            <div className="relative bg-gray-800 px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));"}}>
            <div className="text-white text-sm">
            <div>Tooltip</div>
            </div>
            <div className="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
        
            <div className="relative bg-gray-800 px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));"}}>
            <div className="text-white text-sm">
            <div>Tooltip</div>
            </div>
            <div className="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
        </div>
        <br></br>
        <div className="flex space-x-8">
            <div className="relative bg-white px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));"}}>
                <div className="text-gray-900 text-sm">
                <div>Tooltip</div>
                </div>
                <div className="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white" ></div>
                </div>

            <div className="relative bg-white px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));"}}>
                <div className="text-gray-900 text-sm">
                <div>Tooltip</div>
                </div>
                <div className="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                </div>

                <div className="relative bg-white px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));"}}>
                <div className="text-gray-900 text-sm">
                <div>Tooltip</div>
                </div>
                <div className="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                </div>

            <div className="relative bg-white px-3 py-2 rounded-lg" style={{"filter": "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));"}}>
                <div className="text-gray-900 text-sm">
                <div>Tooltip</div>
                </div>
                <div className="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
            </div>
        </div>



        </div>
           
    )

        let tooltipCompString = '<div class="flex space-x-8">\n'+
        '\n'+
        '            <div class="relative bg-gray-100 px-3 py-2 rounded-lg">\n'+
        '            <div class="text-gray-800 text-sm">\n'+
        '                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>\n'+
        '            </div>\n'+
        '\n'+
        '            <div class="relative bg-gray-100 px-3 py-2 rounded-lg">\n'+
        '            <div class="text-gray-800 text-sm">\n'+
        '                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>\n'+
        '            </div>\n'+
        '\n'+
        '            <div class="relative bg-gray-100 px-3 py-2 rounded-lg">\n'+
        '            <div class="text-gray-800 text-sm">\n'+
        '                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>\n'+
        '            </div>\n'+
        '\n'+
        '            <div class="relative bg-gray-100 px-3 py-2 rounded-lg">\n'+
        '            <div class="text-gray-800 text-sm">\n'+
        '                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-100"></div>\n'+
        '            </div>\n'+
        '\n'+
        '        </div>\n'+

        '<div class="flex space-x-8">\n'+
        '            <div class="relative bg-gray-800 px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));">\n'+
        '            <div class="text-white text-sm">\n'+
        '                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>\n'+
        '            </div>\n'+
        '\n'+
        '            <div class="relative bg-gray-800 px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));">\n'+
        '            <div class="text-white text-sm">\n'+
        '            <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>\n'+
        '            </div>\n'+
        '\n'+
        '            <div class="relative bg-gray-800 px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));">\n'+
        '            <div class="text-white text-sm">\n'+
        '            <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>\n'+
        '            </div>\n'+
        '        \n'+
        '            <div class="relative bg-gray-800 px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.15));">\n'+
        '            <div class="text-white text-sm">\n'+
        '            <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
        '            </div>\n'+
        '            <div class="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>\n'+
        '            </div>\n'+
        '        </div>\n'+

        '<div class="flex space-x-8">\n'+
'            <div class="relative bg-white px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));">\n'+
'                <div class="text-gray-900 text-sm">\n'+
'                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
'                </div>\n'+
'                <div class="absolute right-0 rounded-[2px] top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white" ></div>\n'+
'                </div>\n'+
'\n'+
'            <div class="relative bg-white px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));">\n'+
'                <div class="text-gray-900 text-sm">\n'+
'                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
'                </div>\n'+
'                <div class="absolute bottom-0 left-1/2 rounded-[2px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>\n'+
'                </div>\n'+
'\n'+
'                <div class="relative bg-white px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));">\n'+
'                <div class="text-gray-900 text-sm">\n'+
'                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
'                </div>\n'+
'                <div class="absolute left-0 top-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>\n'+
'                </div>\n'+
'\n'+
'            <div class="relative bg-white px-3 py-2 rounded-lg" style="filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));">\n'+
'                <div class="text-gray-900 text-sm">\n'+
'                <div class="'+tooltipState.selectedFont+'">Tooltip</div>\n'+
'                </div>\n'+
'                <div class="absolute top-0 left-1/2 rounded-[2px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>\n'+
'            </div>\n'+
'        </div>';
    
                        
    return(
        <>
            <PreviewWindowDisabled 
            tooltipComp={tooltipComp} 
            tooltipCompString={tooltipCompString}
            showColor={tooltipState.showColor} 
            selectedColor={tooltipState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>
        </>
    )
}