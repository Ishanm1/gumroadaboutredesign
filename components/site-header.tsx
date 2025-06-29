"use client"
import { useState } from "react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="w-full border-b border-[#E6E6E6]">
        <div
          className="flex h-[60px] items-center w-full px-4 sm:px-6 justify-between bg-white dark:bg-black/55"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div href="/" className="h-full flex items-center cursor-pointer">
            <svg width="130" height="43" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_2004_713"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="145"
                height="48"
              >
                <g clipPath="url(#clip0_2004_713)">
                  <path
                    d="M86.1623 13.7073C83.1672 13.7073 80.2395 16.2573 79.9033 19.9418V14.0109H75.6023V31.8936H79.956V23.2382C79.956 20.8136 81.7837 17.3927 86.1623 17.3927V13.7073ZM131.865 29.0309V16.7791H134.387C137.75 16.7791 140.482 18.7555 140.482 22.8064C140.482 26.8573 137.75 29.0309 134.387 29.0309H131.865ZM127.557 31.8964H134.913C139.431 31.8964 145 29.13 145 22.8064C145 16.5818 139.431 14.0127 134.913 14.0127H127.557V31.8964ZM111.035 23.0055C111.035 19.7445 112.821 17.0773 115.764 17.0773C118.601 17.0773 120.177 19.7445 120.177 23.0045C120.177 26.2655 118.601 28.9336 115.764 28.9336C112.821 28.9336 111.035 26.2655 111.035 23.0055ZM106.621 23.2027C106.621 28.5382 109.564 32.2927 114.187 32.2927C117.55 32.2927 119.546 30.2182 120.598 26.8582V31.8973H124.905V14.0145H120.598V18.7564C119.652 15.5955 117.655 13.7182 114.503 13.7182C109.774 13.7182 106.621 17.7691 106.621 23.2027ZM8.51159 32.2927C3.15213 32.2927 0 28.2418 0 23.2027C0 17.9664 3.46799 13.7182 10.0881 13.7182C16.9179 13.7182 19.2296 18.0655 19.3349 20.5355H14.3966C14.2913 19.1518 13.0297 17.0773 9.98191 17.0773C6.72541 17.0773 4.62338 19.7445 4.62338 23.0045C4.62338 26.2655 6.72541 28.9336 9.98283 28.9336C12.9253 28.9336 14.186 26.76 14.7115 24.5864H9.98283V22.8073H19.9047V31.8982H15.5529V26.1673C15.2379 28.2418 13.872 32.2927 8.51252 32.2927H8.51159ZM28.7303 32.2909C24.6325 32.2909 22.1102 29.7227 22.1102 24.5845V14.0127H26.5239V24.5855C26.5239 27.2527 27.8899 28.5373 30.2016 28.5373C34.7197 28.5373 36.4015 23.3009 36.4015 19.6445V14.0127H40.8143V31.8964H36.5068V25.2764C35.6663 28.9318 33.3537 32.2918 28.7303 32.2918V32.2909ZM67.1812 13.7073C63.4158 13.7073 61.0404 17.1273 60.2655 20.2891C60.1325 16.0527 57.916 13.7073 54.3704 13.7073C51.306 13.7073 48.4632 16.2764 47.7253 20.3409V14.0118H43.4233V31.8955H47.7807V25.4845C47.7807 23.8945 48.4854 17.3718 52.8714 17.3718C55.7132 17.3718 56.0097 19.7818 56.0097 23.0764V31.8955H60.3653V25.4845C60.3653 23.8945 61.0986 17.3718 65.4855 17.3718C68.3246 17.3718 68.6182 19.7818 68.6182 23.0764V31.8955H72.9793V21.3182C72.9996 16.2436 71.0934 13.7091 67.1812 13.7091V13.7073ZM95.5107 13.7073C89.8686 13.7073 86.0469 17.8664 86.0469 23C86.0469 28.6555 89.682 32.2909 95.5107 32.2909C101.152 32.2909 105.042 28.1327 105.042 23C105.042 17.3436 101.336 13.7073 95.5107 13.7073ZM95.5107 29.1255C92.2265 29.1255 90.0986 26.5118 90.0986 23C90.0986 19.4873 92.2339 16.8727 95.5107 16.8727C98.7866 16.8727 100.836 19.4873 100.836 23C100.836 26.5118 98.7847 29.1255 95.5107 29.1255Z"
                    fill="black"
                  />
                </g>
              </mask>
              <g mask="url(#mask0_2004_713)">
                <rect width="145" height="48" fill="currentColor" className="text-[#0D0D0D] dark:text-white" />
              </g>
              <defs>
                <clipPath id="clip0_2004_713">
                  <rect width="145" height="20" fill="white" transform="translate(0 14)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <nav className="hidden md:flex items-stretch gap-4 ml-auto mr-4">
            <div className="flex items-center text-[12px] sm:text-[14px] font-abc-whyte font-normal text-black dark:text-white hover:text-black dark:hover:text-white transition-colors relative group px-2 sm:px-3 py-0.5 cursor-pointer">
              <span className="absolute inset-x-0 h-7 top-1/2 -translate-y-1/2 rounded-full border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 font-abc-whyte">Blog</span>
            </div>
            <div className="flex items-center text-[12px] sm:text-[14px] font-abc-whyte font-normal text-black dark:text-white hover:text-black dark:hover:text-white transition-colors relative group px-2 sm:px-3 py-0.5 cursor-pointer">
              <span className="absolute inset-x-0 h-7 top-1/2 -translate-y-1/2 rounded-full border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 font-abc-whyte">Discover</span>
            </div>
            <div className="flex items-center text-[12px] sm:text-[14px] font-abc-whyte font-normal text-black dark:text-white hover:text-black dark:hover:text-white transition-colors relative group px-2 sm:px-3 py-0.5 cursor-pointer">
              <span className="absolute inset-x-0 h-7 top-1/2 -translate-y-1/2 rounded-full border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 font-abc-whyte">Pricing</span>
            </div>
            <div className="flex items-center text-[12px] sm:text-[14px] font-abc-whyte font-normal text-black dark:text-white hover:text-black dark:hover:text-white transition-colors relative group px-2 sm:px-3 py-0.5 cursor-pointer">
              <span className="absolute inset-x-0 h-7 top-1/2 -translate-y-1/2 rounded-full border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 font-abc-whyte">Features</span>
            </div>
            <div className="flex items-center relative cursor-pointer">
              <svg
                width="83"
                height="47"
                viewBox="0 0 83 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <rect x="0.5" y="1" width="82" height="45" rx="22.5" fill="#F0F0F0" />
                <rect x="0.5" y="1" width="82" height="45" rx="22.5" stroke="#C6C6C6" />
              </svg>
              <span className="text-[12px] sm:text-[14px] font-abc-whyte font-normal text-black relative z-10 px-6 py-3">
                About
              </span>
            </div>
          </nav>
          <button className="md:hidden p-2 font-abc-whyte" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className="hidden md:flex items-stretch h-full -mr-4 sm:-mr-6">
            <div className="flex items-center px-3 sm:px-4 text-[12px] sm:text-[14px] font-abc-whyte font-normal border-l border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              Log in
            </div>
            <div className="flex items-center px-3 sm:px-4 bg-black dark:bg-white text-white dark:text-black text-[12px] sm:text-[14px] font-abc-whyte font-normal hover:bg-black/90 dark:hover:bg-white/90 transition-colors border-l border-black dark:border-black cursor-pointer">
              Start selling
            </div>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <div href="/" className="h-full flex items-center cursor-pointer">
                <svg width="130" height="43" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_2004_713"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="145"
                    height="48"
                  >
                    <g clipPath="url(#clip0_2004_713)">
                      <path
                        d="M86.1623 13.7073C83.1672 13.7073 80.2395 16.2573 79.9033 19.9418V14.0109H75.6023V31.8936H79.956V23.2382C79.956 20.8136 81.7837 17.3927 86.1623 17.3927V13.7073ZM131.865 29.0309V16.7791H134.387C137.75 16.7791 140.482 18.7555 140.482 22.8064C140.482 26.8573 137.75 29.0309 134.387 29.0309H131.865ZM127.557 31.8964H134.913C139.431 31.8964 145 29.13 145 22.8064C145 16.5818 139.431 14.0127 134.913 14.0127H127.557V31.8964ZM111.035 23.0055C111.035 19.7445 112.821 17.0773 115.764 17.0773C118.601 17.0773 120.177 19.7445 120.177 23.0045C120.177 26.2655 118.601 28.9336 115.764 28.9336C112.821 28.9336 111.035 26.2655 111.035 23.0055ZM106.621 23.2027C106.621 28.5382 109.564 32.2927 114.187 32.2927C117.55 32.2927 119.546 30.2182 120.598 26.8582V31.8973H124.905V14.0145H120.598V18.7564C119.652 15.5955 117.655 13.7182 114.503 13.7182C109.774 13.7182 106.621 17.7691 106.621 23.2027ZM8.51159 32.2927C3.15213 32.2927 0 28.2418 0 23.2027C0 17.9664 3.46799 13.7182 10.0881 13.7182C16.9179 13.7182 19.2296 18.0655 19.3349 20.5355H14.3966C14.2913 19.1518 13.0297 17.0773 9.98191 17.0773C6.72541 17.0773 4.62338 19.7445 4.62338 23.0045C4.62338 26.2655 6.72541 28.9336 9.98283 28.9336C12.9253 28.9336 14.186 26.76 14.7115 24.5864H9.98283V22.8073H19.9047V31.8982H15.5529V26.1673C15.2379 28.2418 13.872 "
                        fill="black"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask0_2004_713)">
                    <rect width="145" height="48" fill="currentColor" className="text-[#0D0D0D] dark:text-white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2004_713">
                      <rect width="145" height="20" fill="white" transform="translate(0 14)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <button className="absolute top-4 right-4 p-2 font-abc-whyte" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 font-abc-whyte">
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Blog</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Discover</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Pricing</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Features</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">About</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Log in</div>
              <div className="py-3 border-b font-abc-whyte cursor-pointer">Start selling</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
