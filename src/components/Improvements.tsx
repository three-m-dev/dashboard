const Improvements = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4 lg:w-1/3">
            <div className="mb-6 rounded border-t-4 border-indigo-500 bg-white px-6 pt-3 shadow">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-medium">Backlog</h3>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-50 text-xs text-indigo-500">
                  3
                </span>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                className="flex items-center justify-center rounded border-2 border-dashed border-gray-200 py-3 text-sm text-gray-300 hover:border-gray-500 hover:text-gray-500"
                href="#"
              >
                <span className="mr-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 5.33335H6.66675V1.33335C6.66675 1.15654 6.59651 0.986974 6.47149 0.861949C6.34646 0.736925 6.17689 0.666687 6.00008 0.666687C5.82327 0.666687 5.6537 0.736925 5.52868 0.861949C5.40365 0.986974 5.33341 1.15654 5.33341 1.33335V5.33335H1.33341C1.1566 5.33335 0.987035 5.40359 0.86201 5.52862C0.736986 5.65364 0.666748 5.82321 0.666748 6.00002C0.666748 6.17683 0.736986 6.3464 0.86201 6.47142C0.987035 6.59645 1.1566 6.66669 1.33341 6.66669H5.33341V10.6667C5.33341 10.8435 5.40365 11.0131 5.52868 11.1381C5.6537 11.2631 5.82327 11.3334 6.00008 11.3334C6.17689 11.3334 6.34646 11.2631 6.47149 11.1381C6.59651 11.0131 6.66675 10.8435 6.66675 10.6667V6.66669H10.6667C10.8436 6.66669 11.0131 6.59645 11.1382 6.47142C11.2632 6.3464 11.3334 6.17683 11.3334 6.00002C11.3334 5.82321 11.2632 5.65364 11.1382 5.52862C11.0131 5.40359 10.8436 5.33335 10.6667 5.33335Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Add New Task</span>
              </a>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="mb-6 rounded border-t-4 border-orange-500 bg-white px-6 pt-3 shadow">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-medium">In Progress</h3>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-orange-50 text-xs text-orange-500">
                  3
                </span>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                className="flex items-center justify-center rounded border-2 border-dashed border-gray-200 py-3 text-sm text-gray-300 hover:border-gray-500 hover:text-gray-500"
                href="#"
              >
                <span className="mr-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 5.33335H6.66675V1.33335C6.66675 1.15654 6.59651 0.986974 6.47149 0.861949C6.34646 0.736925 6.17689 0.666687 6.00008 0.666687C5.82327 0.666687 5.6537 0.736925 5.52868 0.861949C5.40365 0.986974 5.33341 1.15654 5.33341 1.33335V5.33335H1.33341C1.1566 5.33335 0.987035 5.40359 0.86201 5.52862C0.736986 5.65364 0.666748 5.82321 0.666748 6.00002C0.666748 6.17683 0.736986 6.3464 0.86201 6.47142C0.987035 6.59645 1.1566 6.66669 1.33341 6.66669H5.33341V10.6667C5.33341 10.8435 5.40365 11.0131 5.52868 11.1381C5.6537 11.2631 5.82327 11.3334 6.00008 11.3334C6.17689 11.3334 6.34646 11.2631 6.47149 11.1381C6.59651 11.0131 6.66675 10.8435 6.66675 10.6667V6.66669H10.6667C10.8436 6.66669 11.0131 6.59645 11.1382 6.47142C11.2632 6.3464 11.3334 6.17683 11.3334 6.00002C11.3334 5.82321 11.2632 5.65364 11.1382 5.52862C11.0131 5.40359 10.8436 5.33335 10.6667 5.33335Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Add New Task</span>
              </a>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="mb-6 rounded border-t-4 border-green-500 bg-white px-6 pt-3 shadow">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-medium">Finished</h3>
                <span className="flex h-6 w-6 items-center justify-center rounded bg-green-50 text-xs text-green-500">
                  3
                </span>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded bg-white p-6 shadow">
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                  Development
                </span>
                <button className="focus:outline-none">
                  <svg
                    className="h-3 w-3 text-gray-200"
                    viewBox="0 0 12 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="mb-2 font-medium">Project example name</h3>
                <p className="text-sm text-gray-500">
                  Starting work and assigning tasks. Adding new features and
                  test them to complete the project.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <img
                    className="-ml-2 h-8 w-8 rounded-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                  <div className="-ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">
                    +3
                  </div>
                </div>
                <div className="flex">
                  <a
                    className="mr-4 flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>6</span>
                  </a>
                  <a
                    className="flex items-center text-xs text-gray-500"
                    href="#"
                  >
                    <span className="mr-2">
                      <svg
                        className="h-4 w-4 text-gray-200"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                className="flex items-center justify-center rounded border-2 border-dashed border-gray-200 py-3 text-sm text-gray-300 hover:border-gray-500 hover:text-gray-500"
                href="#"
              >
                <span className="mr-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 5.33335H6.66675V1.33335C6.66675 1.15654 6.59651 0.986974 6.47149 0.861949C6.34646 0.736925 6.17689 0.666687 6.00008 0.666687C5.82327 0.666687 5.6537 0.736925 5.52868 0.861949C5.40365 0.986974 5.33341 1.15654 5.33341 1.33335V5.33335H1.33341C1.1566 5.33335 0.987035 5.40359 0.86201 5.52862C0.736986 5.65364 0.666748 5.82321 0.666748 6.00002C0.666748 6.17683 0.736986 6.3464 0.86201 6.47142C0.987035 6.59645 1.1566 6.66669 1.33341 6.66669H5.33341V10.6667C5.33341 10.8435 5.40365 11.0131 5.52868 11.1381C5.6537 11.2631 5.82327 11.3334 6.00008 11.3334C6.17689 11.3334 6.34646 11.2631 6.47149 11.1381C6.59651 11.0131 6.66675 10.8435 6.66675 10.6667V6.66669H10.6667C10.8436 6.66669 11.0131 6.59645 11.1382 6.47142C11.2632 6.3464 11.3334 6.17683 11.3334 6.00002C11.3334 5.82321 11.2632 5.65364 11.1382 5.52862C11.0131 5.40359 10.8436 5.33335 10.6667 5.33335Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Add New Task</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Improvements;
