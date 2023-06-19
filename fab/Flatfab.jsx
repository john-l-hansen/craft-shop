import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Flatfab() {
  const [flatfabState, setFlatfabState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-600',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setFlatfabState({
      ...flatfabState,
      showColor: !flatfabState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setFlatfabState({
      ...flatfabState,
      showColor: !flatfabState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setFlatfabState({
      ...flatfabState,
      selectedFont: e.target.value,
    })
  }

  let flatfabComp = (
    <div>
      <button
        className={
          'flex items-center justify-center rounded-2xl bg-gray-100 py-4 px-4 text-sm font-bold leading-5 text-black hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-700'
        }
      >
        <svg
          class="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  )

  let flatfabCompString =
    '<button class="px-3 py-3 flex justify-center items-center rounded-xl font-medium text-white leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400">\n' +
    '            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '            <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="#323232"/>\n' +
    '            </svg>\n' +
    '        </button>'

  return (
    <>
      <PreviewWindowDisabled
        flatfabComp={flatfabComp}
        flatfabCompString={flatfabCompString}
        showColor={flatfabState.showColor}
        selectedColor={flatfabState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
