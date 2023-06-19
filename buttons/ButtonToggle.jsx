import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function ButtonToggle() {
  const [buttonToggleState, setButtonToggleState] = useState({
    showColor: false,
    selectedColor: 'bg-night-800',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setButtonToggleState({
      ...buttonToggleState,
      showColor: !buttonToggleState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setButtonToggleState({
      ...buttonToggleState,
      showColor: !buttonToggleState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setButtonToggleState({
      ...buttonToggleState,
      selectedFont: e.target.value,
    })
  }

  let buttonToggleCompString =
    '<div class="flex justify-center items-center bg-white items-center">\n' +
    '<button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-l-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white leading-5 text-sm ' +
    buttonToggleState.selectedFont +
    '">Selection</button>\n' +
    '<button class="py-2 px-6 flex justify-center items-center border border-solid border-gray-800 rounded-r-lg font-medium text-gray-800 bg-white focus:bg-gray-800 focus:text-white leading-5 text-sm ' +
    buttonToggleState.selectedFont +
    '">Selection</button>\n' +
    '</div>'

  let buttonToggleComp = (
    <div>
      {/*component start*/}
      <div className="flex items-center justify-center">
        <button
          className={
            'flex items-center justify-center rounded-l-lg border border-solid border-gray-800 bg-white py-2 px-6 text-sm font-medium leading-5 text-gray-800 focus:bg-gray-800 focus:text-white  dark:bg-opacity-0 dark:text-gray-400 dark:focus:bg-gray-400 dark:focus:text-gray-900 ' +
            buttonToggleState.selectedFont
          }
        >
          Selection
        </button>
        <button
          className={
            '-ml-[1px] flex items-center justify-center rounded-r-lg border border-solid border-gray-800 py-2 px-6 text-sm font-medium leading-5 text-gray-800 focus:bg-gray-800 focus:text-white dark:bg-opacity-0 dark:text-gray-400 dark:focus:bg-gray-400 dark:focus:text-gray-900 ' +
            buttonToggleState.selectedFont
          }
        >
          Selection
        </button>
      </div>
      <br />
      {/*component start*/}
      <div className="flex items-center justify-center">
        <button className="flex items-center justify-center rounded-l-lg border border-solid border-gray-800 py-2 px-6 text-sm font-medium leading-5 text-gray-800 focus:bg-gray-800 focus:text-white dark:bg-opacity-0 dark:text-gray-400 dark:focus:bg-gray-400 dark:focus:text-gray-900">
          <div>
            <svg
            class="fill-current"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                fill=""
              />
            </svg>
          </div>
          <div className={'ml-3 ' + buttonToggleState.selectedFont}>
            Selection
          </div>
        </button>
        <button className="-ml-[1px] flex items-center justify-center rounded-r-lg border border-solid border-gray-800 bg-white py-2 px-6 text-sm font-medium leading-5 text-gray-800 focus:bg-gray-800 focus:text-white dark:bg-opacity-0 dark:text-gray-400 dark:focus:bg-gray-400 dark:focus:text-gray-900">
          <div>
            <svg
            class="fill-current"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                fill=""
              />
            </svg>
          </div>
          <div className={'ml-3 ' + buttonToggleState.selectedFont}>
            Selection
          </div>
        </button>
      </div>
    </div>
  )

  return (
    <>
      <PreviewWindowDisabled
        buttonToggleComp={buttonToggleComp}
        buttonToggleCompString={buttonToggleCompString}
        showColor={buttonToggleState.showColor}
        selectedColor={buttonToggleState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
