import React, { Component, useState } from 'react'
import PreviewWindowTwo from '../PreviewWindowTwo'

export default function BasicSearch() {
  const [basicsearchState, setBasicsearchState] = useState({
    showColor: false,
    selectedColor:
      'bg-gray-800 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-700',
    selectedFont: 'font-helvetica',
  })

  const toggleColor = (e) => {
    e.preventDefault()

    setBasicsearchState({
      ...basicsearchState,
      showColor: !basicsearchState.showColor,
    })
  }

  const changeColor = (e) => {
    e.preventDefault()

    setBasicsearchState({
      ...basicsearchState,
      showColor: !basicsearchState.showColor,
      selectedColor: e.target.classList.value,
      //selectedColor: e.target.classList[3],
    })
  }

  const changeFont = (e) => {
    e.preventDefault()
    setBasicsearchState({
      ...basicsearchState,
      selectedFont: e.target.value,
    })
  }

  let basicsearchComp = (
    <div class="w-96 space-y-8">
      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <svg
              class="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5033 13.5033H13.9766L13.7899 13.3233C14.4433 12.5633 14.8366 11.5766 14.8366 10.5033C14.8366 8.10992 12.8966 6.16992 10.5033 6.16992C8.10992 6.16992 6.16992 8.10992 6.16992 10.5033C6.16992 12.8966 8.10992 14.8366 10.5033 14.8366C11.5766 14.8366 12.5633 14.4433 13.3233 13.7899L13.5033 13.9766V14.5033L16.8366 17.8299L17.8299 16.8366L14.5033 13.5033ZM10.5033 13.5033C8.84326 13.5033 7.50326 12.1633 7.50326 10.5033C7.50326 8.84326 8.84326 7.50326 10.5033 7.50326C12.1633 7.50326 13.5033 8.84326 13.5033 10.5033C13.5033 12.1633 12.1633 13.5033 10.5033 13.5033Z"
                fill=""
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder="Search"
          />
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <svg
              class="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5033 13.5033H13.9766L13.7899 13.3233C14.4433 12.5633 14.8366 11.5766 14.8366 10.5033C14.8366 8.10992 12.8966 6.16992 10.5033 6.16992C8.10992 6.16992 6.16992 8.10992 6.16992 10.5033C6.16992 12.8966 8.10992 14.8366 10.5033 14.8366C11.5766 14.8366 12.5633 14.4433 13.3233 13.7899L13.5033 13.9766V14.5033L16.8366 17.8299L17.8299 16.8366L14.5033 13.5033ZM10.5033 13.5033C8.84326 13.5033 7.50326 12.1633 7.50326 10.5033C7.50326 8.84326 8.84326 7.50326 10.5033 7.50326C12.1633 7.50326 13.5033 8.84326 13.5033 10.5033C13.5033 12.1633 12.1633 13.5033 10.5033 13.5033Z"
                fill=""
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder=""
          />
          <button
            type="submit"
            class="absolute bottom-[5px] right-[5px] rounded-lg bg-none px-2 py-1 text-sm font-medium text-white transition ease-in-out hover:bg-gray-100 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-none dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
          >
            Search
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <svg
              class="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5033 13.5033H13.9766L13.7899 13.3233C14.4433 12.5633 14.8366 11.5766 14.8366 10.5033C14.8366 8.10992 12.8966 6.16992 10.5033 6.16992C8.10992 6.16992 6.16992 8.10992 6.16992 10.5033C6.16992 12.8966 8.10992 14.8366 10.5033 14.8366C11.5766 14.8366 12.5633 14.4433 13.3233 13.7899L13.5033 13.9766V14.5033L16.8366 17.8299L17.8299 16.8366L14.5033 13.5033ZM10.5033 13.5033C8.84326 13.5033 7.50326 12.1633 7.50326 10.5033C7.50326 8.84326 8.84326 7.50326 10.5033 7.50326C12.1633 7.50326 13.5033 8.84326 13.5033 10.5033C13.5033 12.1633 12.1633 13.5033 10.5033 13.5033Z"
                fill=""
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute bottom-[5px] right-[5px] rounded-lg bg-none px-2 py-1 text-sm font-medium text-white transition ease-in-out hover:bg-gray-100 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-none dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
          >
            Search
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5033 13.5033H13.9766L13.7899 13.3233C14.4433 12.5633 14.8366 11.5766 14.8366 10.5033C14.8366 8.10992 12.8966 6.16992 10.5033 6.16992C8.10992 6.16992 6.16992 8.10992 6.16992 10.5033C6.16992 12.8966 8.10992 14.8366 10.5033 14.8366C11.5766 14.8366 12.5633 14.4433 13.3233 13.7899L13.5033 13.9766V14.5033L16.8366 17.8299L17.8299 16.8366L14.5033 13.5033ZM10.5033 13.5033C8.84326 13.5033 7.50326 12.1633 7.50326 10.5033C7.50326 8.84326 8.84326 7.50326 10.5033 7.50326C12.1633 7.50326 13.5033 8.84326 13.5033 10.5033C13.5033 12.1633 12.1633 13.5033 10.5033 13.5033Z"
                fill="#989A9C"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder=""
          />
          <button
            type="submit"
            class="absolute bottom-[5px] right-[5px] rounded-lg bg-gray-700 px-6 py-1 text-sm font-medium text-white transition ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
          >
            Search
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5033 13.5033H13.9766L13.7899 13.3233C14.4433 12.5633 14.8366 11.5766 14.8366 10.5033C14.8366 8.10992 12.8966 6.16992 10.5033 6.16992C8.10992 6.16992 6.16992 8.10992 6.16992 10.5033C6.16992 12.8966 8.10992 14.8366 10.5033 14.8366C11.5766 14.8366 12.5633 14.4433 13.3233 13.7899L13.5033 13.9766V14.5033L16.8366 17.8299L17.8299 16.8366L14.5033 13.5033ZM10.5033 13.5033C8.84326 13.5033 7.50326 12.1633 7.50326 10.5033C7.50326 8.84326 8.84326 7.50326 10.5033 7.50326C12.1633 7.50326 13.5033 8.84326 13.5033 10.5033C13.5033 12.1633 12.1633 13.5033 10.5033 13.5033Z"
                fill="#989A9C"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder=""
          />
          <button
            type="submit"
            class="absolute bottom-[0px] right-[0px] h-full rounded-r-lg bg-gray-700 px-6 py-1 text-sm font-medium text-white transition ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
          >
            Search
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-3 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder="Search"
          />

          <button
            type="submit"
            class="absolute bottom-[0px] right-[0px] h-full rounded-r-lg bg-gray-700 px-[10px] py-1 text-sm font-medium text-white transition ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
          >
            <svg
              class="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1296 11.8792H12.4712L12.2379 11.6542C13.0546 10.7042 13.5462 9.47086 13.5462 8.12919C13.5462 5.13752 11.1212 2.71252 8.12956 2.71252C5.13789 2.71252 2.71289 5.13752 2.71289 8.12919C2.71289 11.1209 5.13789 13.5459 8.12956 13.5459C9.47122 13.5459 10.7046 13.0542 11.6546 12.2375L11.8796 12.4709V13.1292L16.0462 17.2875L17.2879 16.0459L13.1296 11.8792ZM8.12956 11.8792C6.05456 11.8792 4.37956 10.2042 4.37956 8.12919C4.37956 6.05419 6.05456 4.37919 8.12956 4.37919C10.2046 4.37919 11.8796 6.05419 11.8796 8.12919C11.8796 10.2042 10.2046 11.8792 8.12956 11.8792Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-3 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder="Search"
          />

          <button
            type="submit"
            class="absolute bottom-[5px] right-[5px] rounded-lg bg-gray-700 px-2 py-2 text-sm font-medium text-white transition ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
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
                d="M10.5033 9.50326H9.97659L9.78992 9.32326C10.4433 8.56326 10.8366 7.57659 10.8366 6.50326C10.8366 4.10992 8.89659 2.16992 6.50326 2.16992C4.10992 2.16992 2.16992 4.10992 2.16992 6.50326C2.16992 8.89659 4.10992 10.8366 6.50326 10.8366C7.57659 10.8366 8.56326 10.4433 9.32326 9.78992L9.50326 9.97659V10.5033L12.8366 13.8299L13.8299 12.8366L10.5033 9.50326ZM6.50326 9.50326C4.84326 9.50326 3.50326 8.16326 3.50326 6.50326C3.50326 4.84326 4.84326 3.50326 6.50326 3.50326C8.16326 3.50326 9.50326 4.84326 9.50326 6.50326C9.50326 8.16326 8.16326 9.50326 6.50326 9.50326Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </form>

      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-lg border border-gray-100 bg-gray-50 pl-3 text-sm text-gray-900 focus:border-gray-300 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-100 dark:focus:ring-gray-100"
            placeholder="Search"
          />

          <button
            type="submit"
            class="absolute bottom-[5px] right-[5px] rounded-full bg-gray-700 px-2 py-2 text-sm font-medium text-white transition ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 active:bg-gray-600 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 dark:focus:bg-gray-500 dark:focus:ring-gray-100 dark:active:bg-gray-300"
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
                d="M10.5033 9.50326H9.97659L9.78992 9.32326C10.4433 8.56326 10.8366 7.57659 10.8366 6.50326C10.8366 4.10992 8.89659 2.16992 6.50326 2.16992C4.10992 2.16992 2.16992 4.10992 2.16992 6.50326C2.16992 8.89659 4.10992 10.8366 6.50326 10.8366C7.57659 10.8366 8.56326 10.4433 9.32326 9.78992L9.50326 9.97659V10.5033L12.8366 13.8299L13.8299 12.8366L10.5033 9.50326ZM6.50326 9.50326C4.84326 9.50326 3.50326 8.16326 3.50326 6.50326C3.50326 4.84326 4.84326 3.50326 6.50326 3.50326C8.16326 3.50326 9.50326 4.84326 9.50326 6.50326C9.50326 8.16326 8.16326 9.50326 6.50326 9.50326Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )

  let basicsearchCompString =
    '<div>\n' +
    '        <div class="h-11 w-96 pr-1 pl-3 flex justify-between items-center border border-gray-200 rounded-lg">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-64 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-2 px-3 flex justify-center items-center rounded-lg font-medium leading-5 text-sm text-white ' +
    basicsearchState.selectedColor +
    ' ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    Search\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '      </div>'

  let basicsearchCompStringTwo =
    '<div class="h-11 w-96 pr-1 pl-3 flex justify-between items-center border border-gray-200 rounded-lg">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-64 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-2 px-4 flex justify-center items-center rounded-lg font-bold leading-5 text-sm text-gray-900 bg-white ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    Search\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>'

  let basicsearchCompStringThree =
    '<div class="h-11 w-96 pl-3 flex justify-between items-center border border-gray-200 rounded-lg">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-64 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-3 px-3 flex justify-center items-center rounded-lg font-bold leading-5 text-sm text-white ' +
    basicsearchState.selectedColor +
    ' ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    Search\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>'

  let basicsearchCompStringFour =
    '<div class="h-11 w-96 pl-3 flex justify-between items-center border border-gray-200 rounded-lg">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-72 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-4 px-3 flex justify-center items-center rounded-lg font-bold leading-5 text-sm text-white ' +
    basicsearchState.selectedColor +
    ' ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M8.50521 7.50335H7.97854L7.79188 7.32335C8.44521 6.56335 8.83854 5.57668 8.83854 4.50335C8.83854 2.11001 6.89854 0.170013 4.50521 0.170013C2.11188 0.170013 0.171875 2.11001 0.171875 4.50335C0.171875 6.89668 2.11188 8.83668 4.50521 8.83668C5.57854 8.83668 6.56521 8.44335 7.32521 7.79001L7.50521 7.97668V8.50335L10.8385 11.83L11.8319 10.8367L8.50521 7.50335ZM4.50521 7.50335C2.84521 7.50335 1.50521 6.16335 1.50521 4.50335C1.50521 2.84335 2.84521 1.50335 4.50521 1.50335C6.16521 1.50335 7.50521 2.84335 7.50521 4.50335C7.50521 6.16335 6.16521 7.50335 4.50521 7.50335Z" fill="white"/>\n' +
    '                    </svg>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>'

  let basicsearchCompStringFive =
    '<div class="h-11 w-96 pr-1 pl-3 flex justify-between items-center border border-gray-200 rounded-lg">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-72 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-3 px-3 flex justify-center items-center rounded-lg font-bold leading-5 text-sm text-white ' +
    basicsearchState.selectedColor +
    ' ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M8.50521 7.50335H7.97854L7.79188 7.32335C8.44521 6.56335 8.83854 5.57668 8.83854 4.50335C8.83854 2.11001 6.89854 0.170013 4.50521 0.170013C2.11188 0.170013 0.171875 2.11001 0.171875 4.50335C0.171875 6.89668 2.11188 8.83668 4.50521 8.83668C5.57854 8.83668 6.56521 8.44335 7.32521 7.79001L7.50521 7.97668V8.50335L10.8385 11.83L11.8319 10.8367L8.50521 7.50335ZM4.50521 7.50335C2.84521 7.50335 1.50521 6.16335 1.50521 4.50335C1.50521 2.84335 2.84521 1.50335 4.50521 1.50335C6.16521 1.50335 7.50521 2.84335 7.50521 4.50335C7.50521 6.16335 6.16521 7.50335 4.50521 7.50335Z" fill="white"/>\n' +
    '                    </svg>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>'

  let basicsearchCompStringSix =
    '<div class="h-11 w-96 pr-1 pl-3 flex justify-between items-center border border-gray-200 rounded-full">\n' +
    '            <div>\n' +
    '                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                    <path d="M8.50521 7.50333H7.97854L7.79188 7.32333C8.44521 6.56333 8.83854 5.57666 8.83854 4.50333C8.83854 2.11 6.89854 0.169998 4.50521 0.169998C2.11188 0.169998 0.171875 2.11 0.171875 4.50333C0.171875 6.89667 2.11188 8.83667 4.50521 8.83667C5.57854 8.83667 6.56521 8.44333 7.32521 7.79L7.50521 7.97667V8.50333L10.8385 11.83L11.8319 10.8367L8.50521 7.50333ZM4.50521 7.50333C2.84521 7.50333 1.50521 6.16333 1.50521 4.50333C1.50521 2.84333 2.84521 1.50333 4.50521 1.50333C6.16521 1.50333 7.50521 2.84333 7.50521 4.50333C7.50521 6.16333 6.16521 7.50333 4.50521 7.50333Z" fill="#88898B"/>\n' +
    '                </svg>\n' +
    '            </div>\n' +
    '            <input class="h-8 w-72 rounded-lg" value="" placeholder=" text here.."></input>\n' +
    '            <div>\n' +
    '                <button class="py-3 px-3 flex justify-center items-center rounded-full font-bold leading-5 text-sm text-white ' +
    basicsearchState.selectedColor +
    ' ' +
    basicsearchState.selectedFont +
    '">\n' +
    '                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '                        <path d="M8.50521 7.50335H7.97854L7.79188 7.32335C8.44521 6.56335 8.83854 5.57668 8.83854 4.50335C8.83854 2.11001 6.89854 0.170013 4.50521 0.170013C2.11188 0.170013 0.171875 2.11001 0.171875 4.50335C0.171875 6.89668 2.11188 8.83668 4.50521 8.83668C5.57854 8.83668 6.56521 8.44335 7.32521 7.79001L7.50521 7.97668V8.50335L10.8385 11.83L11.8319 10.8367L8.50521 7.50335ZM4.50521 7.50335C2.84521 7.50335 1.50521 6.16335 1.50521 4.50335C1.50521 2.84335 2.84521 1.50335 4.50521 1.50335C6.16521 1.50335 7.50521 2.84335 7.50521 4.50335C7.50521 6.16335 6.16521 7.50335 4.50521 7.50335Z" fill="white"/>\n' +
    '                    </svg>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>'

  return (
    <>
      <PreviewWindowTwo
        basicsearchComp={basicsearchComp}
        basicsearchCompString={basicsearchCompString}
        basicsearchCompStringTwo={basicsearchCompStringTwo}
        basicsearchCompStringThree={basicsearchCompStringThree}
        basicsearchCompStringFour={basicsearchCompStringFour}
        basicsearchCompStringFive={basicsearchCompStringFive}
        basicsearchCompStringSix={basicsearchCompStringSix}
        showColor={basicsearchState.showColor}
        selectedColor={basicsearchState.selectedColor}
        changeColor={changeColor}
        changeFont={changeFont}
        toggleColor={toggleColor}
      />
    </>
  )
}
