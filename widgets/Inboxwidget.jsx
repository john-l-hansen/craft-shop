import React, { Component, useState } from 'react' 
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Inboxwidget(){
    const [inboxwidgetState, setInboxwidgetState] = useState({
        showColor: false,
        selectedColor:"bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300",
        selectedFont:"font-helvetica",
     });

    const toggleColor = (e) => {
        e.preventDefault();

        setInboxwidgetState({
            ...inboxwidgetState,
            showColor:!inboxwidgetState.showColor,
        })
       
    }

     const changeColor = (e) => {
        e.preventDefault();
        
        setInboxwidgetState({
            ...inboxwidgetState,
            showColor:!inboxwidgetState.showColor,
            selectedColor: e.target.classList.value,
            //selectedColor: e.target.classList[3],
        })
     
    }

    const changeFont = (e) => {
        e.preventDefault();
        setInboxwidgetState({
            ...inboxwidgetState,
            selectedFont: e.target.value,
        })
    }


    let inboxwidgetComp = (
        
        <section className={"w-[720px] " + inboxwidgetState.selectedFont}>
            <div className="flex dark:text-white bg-gray-50 dark:bg-gray-900 items-center justify-between p-5 rounded-t-[20px]">
                <div className="font-bold text-lg">Recent conversations</div>
                <a href="" className="text-gray-500 dark:text-gray-300 text-sm">View all</a>
            </div>
            <div className="flex bg-gray-50 dark:text-gray-50 dark:bg-gray-900 items-center p-5 ">
                <div className="flex items-center space-x-2.5 w-1/3">
                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/women/51.jpg" />
                <div className="text-sm">Jane Doe</div>
                </div>
                <div className="text-left w-full px-6 text-sm">
                <div>Just finished scheduling the meeting! See you soon 😄</div>
                </div>
                <div className="text-right w-20% text-sm">
                <div className="text-">November 29</div>
                </div>
            </div>
            <div className="flex dark:text-gray-50 bg-gray-50 dark:bg-gray-900 items-center p-5">
                <div className="flex items-center space-x-2.5 w-1/3">
                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/women/83.jpg" />
                <div className="text-sm">Kathryn Harrison</div>
                </div>
                <div className="text-left w-full px-6 text-sm">
                    <div>Please send me the latest report on the market status.</div>
                </div>
                <div className="text-right w-20% text-sm">
                <div className="text-">November 29</div>
                </div>
            </div>
            <div className="flex dark:text-gray-50 bg-gray-50 dark:bg-gray-900 items-center p-5 round-b-[20px]">
                <div className="flex items-center space-x-2.5 w-1/3">
                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/men/73.jpg" />
                <div className="text-sm">Sergio Pierce</div>
                </div>
                <div className="text-left w-full px-6 text-sm">
                <div>Product launch is near! Are you ready?</div>
                </div>
                <div className="text-right w-20% text-sm">
                <div className="text-">November 29</div>
                </div>
            </div>
        </section>
    )

        let inboxwidgetCompString = 
        '<section class="w-[700px] ' + inboxwidgetState.selectedFont + '">\n'+
'            <div class="flex bg-gray-50 items-center justify-between p-5 rounded-t-[20px]">\n'+
'                <div class="font-bold text-lg">Recent conversations</div>\n'+
'                <a href="" class="text-gray-500 text-sm">View all</a>\n'+
'            </div>\n'+
'            <div class="flex bg-gray-50 items-center p-5">\n'+
'                <div class="flex items-center space-x-2.5 w-1/3">\n'+
'                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/women/51.jpg" />\n'+
'                <div class="text-sm">Jane Doe</div>\n'+
'                </div>\n'+
'                <div class="text-left w-full px-6 text-sm">\n'+
'                <div>Just finished scheduling the meeting! See you soon 😄</div>\n'+
'                </div>\n'+
'                <div class="text-right w-20% text-sm">\n'+
'                <div class="text-">November 29</div>\n'+
'                </div>\n'+
'            </div>\n'+
'            <div class="flex bg-gray-50 items-center p-5">\n'+
'                <div class="flex items-center space-x-2.5 w-1/3">\n'+
'                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/women/83.jpg" />\n'+
'                <div class="text-sm">Kathryn Harrison</div>\n'+
'                </div>\n'+
'                <div class="text-left w-full px-6 text-sm">\n'+
'                    <div>Please send me the latest report on the market status.</div>\n'+
'                </div>\n'+
'                <div class="text-right w-20% text-sm">\n'+
'                <div class="text-">November 29</div>\n'+
'                </div>\n'+
'            </div>\n'+
'            <div class="flex bg-gray-50 items-center p-5 round-b-[20px]">\n'+
'                <div class="flex items-center space-x-2.5 w-1/3">\n'+
'                <img class="object-fill h-12 w-12 rounded-full p-0 m-0" src="https://randomuser.me/api/portraits/men/73.jpg" />\n'+
'                <div class="text-sm">Sergio Pierce</div>\n'+
'                </div>\n'+
'                <div class="text-left w-full px-6 text-sm">\n'+
'                <div>Product launch is near! Are you ready?</div>\n'+
'                </div>\n'+
'                <div class="text-right w-20% text-sm">\n'+
'                <div class="text-">November 29</div>\n'+
'                </div>\n'+
'            </div>\n'+
'        </section>';
                        
                        
    return(
        <>
            <PreviewWindowDisabled 
            inboxwidgetComp ={inboxwidgetComp} 
            inboxwidgetCompString={inboxwidgetCompString}
            showColor={inboxwidgetState.showColor} 
            selectedColor={inboxwidgetState.selectedColor}
            changeColor={changeColor} 
            changeFont={changeFont} 
            toggleColor={toggleColor}/>

        </>
    )
}