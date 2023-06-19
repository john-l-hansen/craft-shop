import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Extendedfab() {
  const [extendedfabState, setExtendedfabState] = useState({
    showColor: false,
    selectedColor: 'bg-night-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setExtendedfabState({
      ...extendedfabState,
      showColor: !extendedfabState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setExtendedfabState({
      ...extendedfabState,
      showColor: !extendedfabState.showColor,
      selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setExtendedfabState({
      ...extendedfabState,
      selectedFont: e.target.value,
    })
  }

  let extendedfabComp = (
    <div>
      <button
        className={
          'flex items-center justify-center rounded-2xl bg-gray-100 py-4 px-5 text-sm font-bold leading-5 text-black hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:active:bg-gray-700'
        }
        style={{ boxShadow: '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
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
        </div>
        <div className="ml-3">Enabled</div>
      </button>
    </div>
  )

  let extendedfabCompString =
    '<button class="py-4 px-5 flex justify-center items-center rounded-2xl font-bold text-black leading-5 text-sm bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-400" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '            <div>\n' +
    '                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="#323232"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <div class="ml-3">Enabled</div>\n' +
    '        </button>'

  return (
    <>
      <PreviewWindowDisabled
        extendedfabComp={extendedfabComp}
        extendedfabCompString={extendedfabCompString}
        showColor={extendedfabState.showColor}
        selectedColor={extendedfabState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
