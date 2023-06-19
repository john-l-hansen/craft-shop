import React, { Component, useState } from 'react'
import PreviewWindowDisabled from '../PreviewWindowDisabled'

export default function Toastupdated() {
  const [toastupdatedState, setToastupdatedState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-500 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-300',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setToastupdatedState({
      ...toastupdatedState,
      showColor: !toastupdatedState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setToastupdatedState({
      ...toastupdatedState,
      showColor: !toastupdatedState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setToastupdatedState({
      ...toastupdatedState,
      selectedFont: e.target.value,
    })
  }

  let toastupdatedComp = (
    <div>
      <div
        className="flex w-[500px] content-baseline items-center justify-between rounded-xl border-b-8 border-black bg-white px-7 py-7 font-lato dark:border-gray-50 dark:bg-gray-800"
        style={{ 'box-shadow': '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <div className="flex items-center">
            <svg
              className="mr-8"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#CECECE" />
              <circle cx="24.0008" cy="23.9998" r="19.2" fill="#323232" />
              <path
                d="M24 33.75C25.1 33.75 26 32.85 26 31.75H22C22 32.85 22.9 33.75 24 33.75ZM30 27.75V22.75C30 19.68 28.37 17.11 25.5 16.43V15.75C25.5 14.92 24.83 14.25 24 14.25C23.17 14.25 22.5 14.92 22.5 15.75V16.43C19.64 17.11 18 19.67 18 22.75V27.75L16 29.75V30.75H32V29.75L30 27.75ZM28 28.75H20V22.75C20 20.27 21.51 18.25 24 18.25C26.49 18.25 28 20.27 28 22.75V28.75Z"
                fill="white"
              />
            </svg>
            <div>
              <div
                className={
                  'text-blac text-2xl font-bold leading-5 dark:text-gray-50 ' +
                  toastupdatedState.selectedFont
                }
              >
                Default Title
              </div>
              <div
                className={
                  'pt-2 text-base font-normal leading-5 text-gray-500 ' +
                  toastupdatedState.selectedFont
                }
              >
                Description
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_258_108148)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_258_108148">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <br></br>
      <div
        className="flex w-[500px] content-baseline items-center justify-between rounded-xl border-b-8 border-bar-success bg-white px-7 py-7 font-lato dark:bg-gray-800"
        style={{ 'box-shadow': '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <div className="flex items-center">
            <svg
              class="mr-8"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#D6FCE7" />
              <circle cx="24.0008" cy="23.9998" r="19.2" fill="#56C288" />
              <path
                d="M20.795 27.875L16.625 23.705L15.205 25.115L20.795 30.705L32.795 18.705L31.385 17.295L20.795 27.875Z"
                fill="white"
              />
            </svg>
            <div>
              <div
                className={
                  'text-2xl font-bold leading-5 text-black dark:text-gray-50 ' +
                  toastupdatedState.selectedFont
                }
              >
                Success message title
              </div>
              <div
                className={
                  'pt-2 text-base font-normal leading-5 text-gray-500 ' +
                  toastupdatedState.selectedFont
                }
              >
                Description
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_258_108148)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_258_108148">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <br></br>
      <div
        className="flex w-[500px] content-baseline items-center justify-between rounded-xl border-b-8 border-bar-warning bg-white px-7 py-7 font-lato dark:bg-gray-800"
        style={{ 'box-shadow': '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <div className="flex items-center">
            <svg
              class="mr-8"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#FFEFCD" />
              <circle cx="24.0008" cy="23.9998" r="19.2" fill="#FFC555" />
              <rect x="22" y="15" width="4" height="11.7" fill="white" />
              <rect x="22" y="29.4001" width="4" height="3.6" fill="white" />
            </svg>
            <div>
              <div
                className={
                  'text-2xl font-bold leading-5 text-black dark:text-gray-50 ' +
                  toastupdatedState.selectedFont
                }
              >
                Warning message title
              </div>
              <div
                className={
                  'pt-2 text-base font-normal leading-5 text-gray-500 ' +
                  toastupdatedState.selectedFont
                }
              >
                Description
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_258_108148)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_258_108148">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <br></br>
      <div
        className="flex w-[500px] content-baseline items-center justify-between rounded-xl border-b-8 border-bar-error dark:bg-gray-800 bg-white px-7 py-7 font-lato"
        style={{ 'box-shadow': '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <div className="flex items-center">
            <svg
              class="mr-8"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#FAD4D4" />
              <circle cx="24.0008" cy="23.9998" r="19.2" fill="#E52628" />
              <path
                d="M31 18.41L29.59 17L24 22.59L18.41 17L17 18.41L22.59 24L17 29.59L18.41 31L24 25.41L29.59 31L31 29.59L25.41 24L31 18.41Z"
                fill="white"
              />
            </svg>
            <div>
              <div
                className={
                  'text-2xl font-bold leading-5 text-black dark:text-gray-50 ' +
                  toastupdatedState.selectedFont
                }
              >
                Error message title
              </div>
              <div
                className={
                  'pt-2 text-base font-normal leading-5 text-gray-500 ' +
                  toastupdatedState.selectedFont
                }
              >
                Description
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
          class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_258_108148)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_258_108148">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <br></br>
      <div
        className="flex w-[500px] content-baseline items-center justify-between rounded-xl border-b-8 border-bar-info dark:bg-gray-800 bg-white px-7 py-7"
        style={{ 'box-shadow': '0px 4px 10px 3px rgba(0, 0, 0, 0.2)' }}
      >
        <div>
          <div className="flex items-center">
            <svg
              class="mr-8"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#C5E8F9" />
              <circle cx="24.0008" cy="23.9998" r="19.2" fill="#03A9F4" />
              <rect
                width="4"
                height="11.7"
                transform="matrix(1 0 0 -1 22 33)"
                fill="white"
              />
              <rect
                width="4"
                height="3.6"
                transform="matrix(1 0 0 -1 22 18.5999)"
                fill="white"
              />
            </svg>
            <div>
              <div
                className={
                  'text-2xl font-bold leading-5 text-black dark:text-gray-50 ' +
                  toastupdatedState.selectedFont
                }
              >
                Info message title
              </div>
              <div
                className={
                  'pt-2 text-base font-normal leading-5 text-gray-500 ' +
                  toastupdatedState.selectedFont
                }
              >
                Description
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            class="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_258_108148)">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_258_108148">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )

  let toastupdatedCompString =
    '<div class="flex font-lato justify-between items-center content-baseline rounded-xl bg-white px-7 py-7 border-b-8 border-black w-[500px]" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '                <div>\n' +
    '                    <div class="flex items-center">\n' +
    '                    <svg class="mr-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <circle cx="24" cy="24" r="24" fill="#CECECE" />\n' +
    '                        <circle cx="24.0008" cy="23.9998" r="19.2" fill="#323232" />\n' +
    '                        <path\n' +
    '                        d="M24 33.75C25.1 33.75 26 32.85 26 31.75H22C22 32.85 22.9 33.75 24 33.75ZM30 27.75V22.75C30 19.68 28.37 17.11 25.5 16.43V15.75C25.5 14.92 24.83 14.25 24 14.25C23.17 14.25 22.5 14.92 22.5 15.75V16.43C19.64 17.11 18 19.67 18 22.75V27.75L16 29.75V30.75H32V29.75L30 27.75ZM28 28.75H20V22.75C20 20.27 21.51 18.25 24 18.25C26.49 18.25 28 20.27 28 22.75V28.75Z"\n' +
    '                        fill="white" />\n' +
    '                    </svg>\n' +
    '                    <div>\n' +
    '                        <div class="font-bold text-2xl leading-5 text-black ' +
    toastupdatedState.selectedFont +
    '">Default Title</div>\n' +
    '                        <div class="font-normal pt-2 text-base leading-5 text-gray-500 ' +
    toastupdatedState.selectedFont +
    '">Description</div>\n' +
    '                    </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <g clip-path="url(#clip0_258_108148)">\n' +
    '                            <path\n' +
    '                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"\n' +
    '                            fill="#5E5F5F" />\n' +
    '                        </g>\n' +
    '                    <defs>\n' +
    '                        <clipPath id="clip0_258_108148">\n' +
    '                        <rect width="24" height="24" fill="white" />\n' +
    '                        </clipPath>\n' +
    '                    </defs>\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br></br>\n' +
    '            <div class="flex font-lato justify-between items-center content-baseline rounded-xl bg-white px-7 py-7 border-b-8 border-bar-success w-[500px]" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '                <div>\n' +
    '                    <div class="flex items-center">\n' +
    '                    <svg class="mr-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <circle cx="24" cy="24" r="24" fill="#D6FCE7" />\n' +
    '                        <circle cx="24.0008" cy="23.9998" r="19.2" fill="#56C288" />\n' +
    '                        <path\n' +
    '                        d="M20.795 27.875L16.625 23.705L15.205 25.115L20.795 30.705L32.795 18.705L31.385 17.295L20.795 27.875Z"\n' +
    '                        fill="white" />\n' +
    '                    </svg>\n' +
    '                    <div>\n' +
    '                        <div class="font-bold text-2xl leading-5 text-black ' +
    toastupdatedState.selectedFont +
    '">Success message title</div>\n' +
    '                        <div class="font-normal pt-2 text-base leading-5 text-gray-500 ' +
    toastupdatedState.selectedFont +
    '">Description</div>\n' +
    '                    </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <g clip-path="url(#clip0_258_108148)">\n' +
    '                            <path\n' +
    '                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"\n' +
    '                            fill="#5E5F5F" />\n' +
    '                        </g>\n' +
    '                    <defs>\n' +
    '                        <clipPath id="clip0_258_108148">\n' +
    '                        <rect width="24" height="24" fill="white" />\n' +
    '                        </clipPath>\n' +
    '                    </defs>\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br></br>\n' +
    '            <div class="flex font-lato justify-between items-center content-baseline rounded-xl bg-white px-7 py-7 border-b-8 border-bar-warning w-[500px]" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '                <div>\n' +
    '                    <div class="flex items-center">\n' +
    '                    <svg class="mr-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <circle cx="24" cy="24" r="24" fill="#FFEFCD" />\n' +
    '                        <circle cx="24.0008" cy="23.9998" r="19.2" fill="#FFC555" />\n' +
    '                        <rect x="22" y="15" width="4" height="11.7" fill="white" />\n' +
    '                        <rect x="22" y="29.4001" width="4" height="3.6" fill="white" />\n' +
    '                    </svg>\n' +
    '                    <div>\n' +
    '                        <div class="font-bold text-2xl leading-5 text-black ' +
    toastupdatedState.selectedFont +
    '">Warning message title</div>\n' +
    '                        <div class="font-normal pt-2 text-base leading-5 text-gray-500 ' +
    toastupdatedState.selectedFont +
    '">Description</div>\n' +
    '                    </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <g clip-path="url(#clip0_258_108148)">\n' +
    '                            <path\n' +
    '                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"\n' +
    '                            fill="#5E5F5F" />\n' +
    '                        </g>\n' +
    '                    <defs>\n' +
    '                        <clipPath id="clip0_258_108148">\n' +
    '                        <rect width="24" height="24" fill="white" />\n' +
    '                        </clipPath>\n' +
    '                    </defs>\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br></br>\n' +
    '            <div class="flex font-lato justify-between items-center content-baseline rounded-xl bg-white px-7 py-7 border-b-8 border-bar-error w-[500px]" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '                <div>\n' +
    '                    <div class="flex items-center">\n' +
    '                    <svg class="mr-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <circle cx="24" cy="24" r="24" fill="#FAD4D4" />\n' +
    '                        <circle cx="24.0008" cy="23.9998" r="19.2" fill="#E52628" />\n' +
    '                        <path\n' +
    '                        d="M31 18.41L29.59 17L24 22.59L18.41 17L17 18.41L22.59 24L17 29.59L18.41 31L24 25.41L29.59 31L31 29.59L25.41 24L31 18.41Z"\n' +
    '                        fill="white" />\n' +
    '                    </svg>\n' +
    '                    <div>\n' +
    '                        <div class="font-bold text-2xl leading-5 text-black ' +
    toastupdatedState.selectedFont +
    '">Error message title</div>\n' +
    '                        <div class="font-normal pt-2 text-base leading-5 text-gray-500 ' +
    toastupdatedState.selectedFont +
    '">Description</div>\n' +
    '                    </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <g clip-path="url(#clip0_258_108148)">\n' +
    '                            <path\n' +
    '                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"\n' +
    '                            fill="#5E5F5F" />\n' +
    '                        </g>\n' +
    '                    <defs>\n' +
    '                        <clipPath id="clip0_258_108148">\n' +
    '                        <rect width="24" height="24" fill="white" />\n' +
    '                        </clipPath>\n' +
    '                    </defs>\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br></br>\n' +
    '            <div class="flex font-lato justify-between items-center content-baseline rounded-xl bg-white px-7 py-7 border-b-8 border-bar-info w-[500px]" style="box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2)">\n' +
    '                <div>\n' +
    '                    <div class="flex items-center">\n' +
    '                        <svg class="mr-8" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <circle cx="24" cy="24" r="24" fill="#C5E8F9" />\n' +
    '                        <circle cx="24.0008" cy="23.9998" r="19.2" fill="#03A9F4" />\n' +
    '                        <rect width="4" height="11.7" transform="matrix(1 0 0 -1 22 33)" fill="white" />\n' +
    '                        <rect width="4" height="3.6" transform="matrix(1 0 0 -1 22 18.5999)" fill="white" />\n' +
    '                        </svg>\n' +
    '                        <div>\n' +
    '                            <div class="font-bold text-2xl leading-5 text-black ' +
    toastupdatedState.selectedFont +
    '">Info message title</div>\n' +
    '                            <div class="font-normal pt-2 text-base leading-5 text-gray-500 ' +
    toastupdatedState.selectedFont +
    '">Description</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div>\n' +
    '                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <g clip-path="url(#clip0_258_108148)">\n' +
    '                            <path\n' +
    '                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"\n' +
    '                            fill="#5E5F5F" />\n' +
    '                        </g>\n' +
    '                    <defs>\n' +
    '                        <clipPath id="clip0_258_108148">\n' +
    '                        <rect width="24" height="24" fill="white" />\n' +
    '                        </clipPath>\n' +
    '                    </defs>\n' +
    '                    </svg>\n' +
    '                </div>\n' +
    '            </div>'

  return (
    <>
      <PreviewWindowDisabled
        toastupdatedComp={toastupdatedComp}
        toastupdatedCompString={toastupdatedCompString}
        showColor={toastupdatedState.showColor}
        selectedColor={toastupdatedState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
