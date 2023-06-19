import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function CollapsibleInput() {
  const [collapsibleInputState, setCollapsibleInputState] = useState({
    showColor: false,
    selectedColor: 'bg-night-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()
    setCollapsibleInputState({
      ...collapsibleInputState,
      showColor: !collapsibleInputState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()
    setCollapsibleInputState({
      ...collapsibleInputState,
      showColor: !collapsibleInputState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setCollapsibleInputState({
      ...collapsibleInputState,
      selectedFont: e.target.value,
    })
  }

  let collapsibleInputComp = (
    <div
      className="rounded-lg border border-gray-100 dark:border-gray-800"
      style={{ width: '696px', height: 'auto' }}
    >
      <div className="flex w-full items-center justify-start rounded-t-lg bg-gray-50 px-5 py-3 dark:bg-gray-900">
        <div className="flex w-1/2 justify-start">
          <div className="leading-normal">
            <h4
              className={
                'm-0 p-0 text-base font-bold leading-6 ark:text-white ' +
                collapsibleInputState.selectedFont
              }
            >
              Header
            </h4>
            <p
              className={
                'm-0 p-0 text-sm font-normal leading-5 dark:text-gray-400 ' +
                collapsibleInputState.selectedFont
              }
            >
              Subheader
            </p>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <div>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M1.41 7.41003L6 2.83003L10.59 7.41003L12 6.00003L6 3.43323e-05L0 6.00003L1.41 7.41003Z"
                fill="#323232"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full px-10 py-5 flex justify-center items-center rounded-b-lg bg-white dark:bg-transparent ">
        <div className="w-1/4">
          <div className={'font-bold ' + collapsibleInputState.selectedFont}>   
          <h4 class="dark:text-white text-sm">Label</h4>
          </div>
          <input
          class="pl-3 pr-2 py-1.5 border border-gray-700 text-sm rounded-lg w-11/12 dark:bg-transparent dark:text-white h-8"
          value="Input">
        </input>
          <div>
            <p
              className={
                'm-0 text-gray-500 ' + collapsibleInputState.selectedFont
              }
            >
              Supporting text
            </p>
          </div>
        </div>
        <div className="ml-3 w-1/4">
          <div className={'font-bold ' + collapsibleInputState.selectedFont}>
          <h4 class="dark:text-white text-sm">Label</h4>
          </div>
          <input
          class="pl-3 pr-2 py-1.5 border border-gray-700 text-sm rounded-lg w-11/12 dark:bg-transparent dark:text-white h-8"
          value="Input">
        </input>
          <div>
            <p
              className={
                'm-0 text-gray-500 ' + collapsibleInputState.selectedFont
              }
            >
              Supporting text
            </p>
          </div>
        </div>
        <div className="ml-3 w-1/4">
          <div className={'font-bold ' + collapsibleInputState.selectedFont}>
          <h4 class="dark:text-white text-sm">Label</h4>
          </div>
          <input
          class="pl-3 pr-2 py-1.5 border border-gray-700 text-sm rounded-lg w-11/12 dark:bg-transparent dark:text-white h-8"
          value="Input">
        </input>
          <div>
            <p
              className={
                'm-0 text-gray-500 ' + collapsibleInputState.selectedFont
              }
            >
              Supporting text
            </p>
          </div>
        </div>
        <div className="ml-3 w-1/4">
          <div className={'font-bold ' + collapsibleInputState.selectedFont}>
          <h4 class="dark:text-white text-sm">Label</h4>
          </div>
          <input
          class="pl-3 pr-2 py-1.5 border border-gray-700 text-sm rounded-lg w-11/12 dark:bg-transparent dark:text-white h-8"
          value="Input">
        </input>
          <div>
            <p
              className={
                'm-0 text-gray-500 ' + collapsibleInputState.selectedFont
              }
            >
              Supporting text
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  let collapsibleCompString =
    '<div class="border border-gray-100 rounded-lg" style="width:696px; height:auto">\n' +
    '        <div class="w-full px-5 py-3 flex justify-start items-center rounded-t-lg bg-gray-50">\n' +
    '            <div class="w-1/2 flex justify-start">\n' +
    '                <div class="leading-normal">\n' +
    '                    <h4 class="p-0 m-0 font-bold text-base leading-6 ' +
    collapsibleInputState.selectedFont +
    '">Header</h4>\n' +
    '                    <p class="p-0 m-0 font-normal text-sm leading-5 ' +
    collapsibleInputState.selectedFont +
    '">Subheader</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="w-1/2 flex justify-end">\n' +
    '                <div>\n' +
    '                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n' +
    '                        <path\n' +
    '                            d="M1.41 7.41003L6 2.83003L10.59 7.41003L12 6.00003L6 3.43323e-05L0 6.00003L1.41 7.41003Z"\n' +
    '                            fill="#323232"\n' +
    '                        />\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="w-full px-10 py-5 flex justify-center items-center rounded-lg bg-white">\n' +
    '            <div class="w-1/4">\n' +
    '                <div class="font-bold ' +
    collapsibleInputState.selectedFont +
    '"><h4>Label</h4></div>\n' +
    '                <input class="border border-gray-200 rounded-lg w-11/12" value="Input"></input>\n' +
    '                <div><p class="m-0 text-gray-500 ' +
    collapsibleInputState.selectedFont +
    '">supporting text</p></div>\n' +
    '            </div>\n' +
    '            <div class="w-1/4 ml-3">\n' +
    '                <div class="font-bold ' +
    collapsibleInputState.selectedFont +
    '"><h4>Label</h4></div>\n' +
    '                <input class="border border-gray-200 rounded-lg w-11/12" value="Input"></input>\n' +
    '                <div><p class="m-0 text-gray-500 ' +
    collapsibleInputState.selectedFont +
    '">supporting text</p></div>\n' +
    '            </div>\n' +
    '            <div class="w-1/4 ml-3">\n' +
    '                <div class="font-bold ' +
    collapsibleInputState.selectedFont +
    '"><h4>Label</h4></div>\n' +
    '                <input class="border border-gray-200 rounded-lg w-11/12" value="Input"></input>\n' +
    '                <div><p class="m-0 text-gray-500 ' +
    collapsibleInputState.selectedFont +
    '">supporting text</p></div>\n' +
    '            </div>\n' +
    '            <div class="w-1/4 ml-3">\n' +
    '                <div class="font-bold ' +
    collapsibleInputState.selectedFont +
    '"><h4>Label</h4></div>\n' +
    '                <input class="border border-gray-200 rounded-lg w-11/12" value="Input"></input>\n' +
    '                <div><p class="m-0 text-gray-500 ' +
    collapsibleInputState.selectedFont +
    '">supporting text</p></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>'

  return (
    <>
      <PreviewWindowDisabled
        collapsibleInputComp={collapsibleInputComp}
        collapsibleCompString={collapsibleCompString}
        showColor={collapsibleInputState.showColor}
        selectedColor={collapsibleInputState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
