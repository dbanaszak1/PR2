const icons = {
            react:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>,
            ts:<svg  fill="currentColor" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 0.9999998,7.0000066 0,5.9999944 12.0000002,0 0,-12.00000195 -12.0000002,0 0,6.00000755 z m 7.359375,-0.2109464 0,0.5390661 -1.546875,0 0,4.9218757 -1.265625,0 0,-4.9218757 -1.5468751,0 0,-1.078119 4.3593751,0 0,0.5390529 z M 11.40625,6.3156206 c 0.192187,0.037467 0.407812,0.089067 0.482812,0.1171999 l 0.126563,0.0516 0,0.5859327 c 0,0.3234397 -0.0094,0.5859328 -0.01875,0.5859328 -0.0094,0 -0.107812,-0.0516 -0.220312,-0.1125332 -0.421875,-0.2390665 -1.096875,-0.328133 -1.509375,-0.2062532 -0.09844,0.028133 -0.24375,0.1171999 -0.31875,0.1921865 -0.1124998,0.1078666 -0.1359374,0.1734399 -0.1359374,0.3468797 0,0.1874932 0.023437,0.2390664 0.178125,0.384373 0.098437,0.093733 0.4640624,0.3093731 0.8203124,0.4875062 0.75,0.3703064 1.129687,0.6843726 1.303125,1.0734256 0.154687,0.3468794 0.159375,1.0781324 0.0094,1.4062524 -0.140625,0.309373 -0.45,0.623439 -0.754687,0.768759 -0.646875,0.30468 -1.7015627,0.332813 -2.5265627,0.06093 l -0.2953125,-0.0984 0,-1.303119 0.2343751,0.168747 c 0.3046604,0.220306 0.6984105,0.356253 1.1109105,0.384373 0.4124996,0.02813 0.7171876,-0.04693 0.9046876,-0.225 0.117188,-0.107866 0.140625,-0.168746 0.140625,-0.346879 0,-0.342187 -0.196875,-0.520307 -1.0031252,-0.9140529 C 9.2218738,9.371911 8.9968739,9.2125379 8.7859364,8.9031649 8.3171864,8.2234721 8.4578113,7.1828598 9.0859363,6.7094202 9.6203113,6.3016073 10.506249,6.1516074 11.406249,6.3156606 Z"/></svg>,
            node:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>,
            sql:<svg xmlns="http://www.w3.org/2000/svg" className="py-1" fill="currentColor" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>,
            tailwind: <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>,
            github: <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/></svg>,
            next: <svg  viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"/></svg>,
            python:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 448 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>,
            restapi: <svg  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ><path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"/></svg>,
            mongo:<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ><path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path></svg>,
            express: <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>,
            bootstrap:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 576 512"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"/></svg>,
            html: <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ><path d="M6.32 5.5l1.759 19.774 7.893 2.226 7.948-2.226L25.68 5.5H6.32zm15.537 6.449H12.59l.207 2.488h8.854l-.687 7.479-4.937 1.361v.014h-.055l-4.978-1.375-.303-3.821h2.406l.179 1.925 2.695.728 2.708-.728.303-3.136h-8.415l-.645-7.341h12.155l-.22 2.406z"/></svg>,
            discord: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>,
            canva:<svg fill="CurrentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM9.281 10.24c1.005 0 1.787 0.733 1.875 1.599 0.095 0.781-0.229 1.464-1.093 1.875-0.459 0.229-0.641 0.229-0.735 0.093-0.047-0.093 0-0.181 0.093-0.276 0.824-0.681 0.824-1.233 0.729-2.009-0.047-0.505-0.411-0.824-0.776-0.824-1.604 0-3.885 3.563-3.568 6.172 0.141 1.005 0.735 2.193 2.011 2.193 0.412 0 0.871-0.136 1.281-0.317 0.667-0.355 1.068-0.625 1.464-1.068-0.099-1.183 0.937-2.729 2.468-2.729 0.688 0 1.235 0.276 1.281 0.781 0.089 0.683-0.505 0.776-0.687 0.776-0.183 0-0.505-0.047-0.505-0.229-0.041-0.183 0.411-0.093 0.369-0.505-0.047-0.276-0.323-0.364-0.593-0.364-0.964 0-1.511 1.328-1.375 2.145 0.047 0.369 0.228 0.735 0.599 0.735 0.271 0 0.683-0.412 0.817-1.005 0.093-0.412 0.459-0.688 0.781-0.688 0.136 0 0.224 0.047 0.271 0.229v0.183c-0.041 0.183-0.183 0.735-0.135 0.869 0 0.095 0.047 0.229 0.228 0.229 0.12 0 0.579-0.24 1.037-0.615 0.151-0.787 0.333-1.729 0.333-1.807 0.047-0.323 0.183-0.641 0.823-0.641 0.14 0 0.229 0.047 0.276 0.229v0.183l-0.183 0.823c0.595-0.776 1.464-1.323 2.011-1.323 0.229 0 0.412 0.135 0.412 0.364 0 0.136 0 0.365-0.095 0.595-0.181 0.5-0.411 1.281-0.547 1.963 0 0.183 0.047 0.365 0.276 0.365s0.912-0.271 1.459-1.005l0.011-0.005c0-0.089-0.011-0.177-0.011-0.265 0-0.552 0.047-1.005 0.141-1.328 0.093-0.365 0.547-0.683 0.823-0.683 0.135 0 0.276 0.088 0.276 0.224 0 0.047 0 0.14-0.047 0.183-0.183 0.599-0.324 1.145-0.324 1.692 0 0.323 0.048 0.776 0.141 1.052 0 0.047 0.041 0.093 0.088 0.093 0.095 0 0.735-0.593 1.188-1.375-0.412-0.271-0.641-0.729-0.641-1.276 0-0.963 0.6-1.464 1.147-1.464 0.459 0 0.823 0.319 0.823 0.959 0 0.412-0.136 0.871-0.364 1.281h0.135c0.292 0.011 0.579-0.109 0.776-0.317 0.047-0.073 0.109-0.125 0.183-0.156 0.448-0.568 1.104-0.989 1.88-0.989 0.64 0 1.229 0.276 1.276 0.776 0.093 0.687-0.505 0.823-0.688 0.823-0.181 0-0.504-0.047-0.504-0.229s0.411-0.093 0.369-0.5c-0.047-0.276-0.323-0.369-0.599-0.369-0.912 0-1.505 1.187-1.371 2.151 0.047 0.364 0.229 0.776 0.595 0.776 0.276 0 0.687-0.412 0.869-1.005 0.088-0.364 0.459-0.688 0.776-0.688 0.14 0 0.229 0.047 0.276 0.229 0 0.095 0 0.276-0.183 0.871-0.229 0.411-0.229 0.64-0.181 0.823 0.041 0.364 0.224 0.64 0.411 0.776 0.041 0.047 0.089 0.135 0.089 0.135 0 0.095-0.048 0.188-0.183 0.188-0.047 0-0.089 0-0.136-0.047-0.687-0.276-0.963-0.735-1.052-1.193-0.276 0.323-0.593 0.505-0.963 0.505-0.595 0-1.183-0.547-1.276-1.235-0.027-0.291 0.004-0.588 0.099-0.864-0.271 0.172-0.563 0.271-0.833 0.271h-0.224c-0.599 0.869-1.24 1.464-1.693 1.735-0.156 0.083-0.328 0.131-0.505 0.14-0.088 0-0.228-0.047-0.271-0.14-0.129-0.203-0.208-0.521-0.26-0.885-0.641 0.697-1.527 1.072-1.937 1.072-0.459 0-0.729-0.276-0.776-0.733v-0.5c0.135-1.005 0.505-1.604 0.505-1.787-0.005-0.047-0.043-0.089-0.095-0.093-0.317 0-1.369 1.099-1.552 1.833l-0.14 0.593c-0.089 0.411-0.5 0.687-0.776 0.687-0.136 0-0.229-0.047-0.271-0.228v-0.183l0.057-0.312c-0.579 0.411-1.157 0.676-1.433 0.676-0.411 0-0.64-0.229-0.681-0.552-0.276 0.371-0.595 0.552-1.005 0.552-0.475 0-0.932-0.323-1.151-0.791-0.329 0.369-0.699 0.739-1.136 1.020-0.64 0.412-1.369 0.729-2.24 0.729-0.776 0-1.463-0.412-1.828-0.776-0.552-0.505-0.869-1.281-0.916-2.011-0.271-2.239 1.099-5.12 3.197-6.401 0.505-0.276 1.011-0.457 1.511-0.457zM22.307 14.631c-0.135 0-0.228 0.229-0.228 0.452 0 0.371 0.181 0.781 0.411 1.011 0.095-0.249 0.136-0.515 0.141-0.781 0-0.452-0.183-0.681-0.324-0.681z"/></svg>,
            mysql: <svg fill="CurrentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M30.026 15.139c-0.082-0.006-0.177-0.010-0.273-0.010-0.484 0-0.947 0.090-1.373 0.254l0.026-0.009c-0.125 0.050-0.325 0.050-0.342 0.209 0.069 0.066 0.079 0.175 0.137 0.267 0.117 0.198 0.261 0.366 0.429 0.506l0.003 0.003c0.175 0.137 0.35 0.27 0.534 0.387 0.325 0.2 0.694 0.319 1.012 0.52 0.181 0.117 0.366 0.266 0.55 0.391 0.091 0.062 0.15 0.175 0.267 0.215v-0.025c-0.057-0.075-0.075-0.184-0.131-0.267-0.084-0.084-0.167-0.159-0.25-0.241-0.248-0.325-0.535-0.603-0.857-0.835l-0.012-0.008c-0.267-0.182-0.852-0.437-0.962-0.744l-0.016-0.018c0.218-0.031 0.412-0.077 0.599-0.139l-0.024 0.007c0.284-0.075 0.544-0.059 0.837-0.132 0.132-0.034 0.266-0.075 0.4-0.117v-0.075c-0.15-0.15-0.262-0.354-0.417-0.494-0.409-0.36-0.86-0.698-1.335-1.002l-0.045-0.027c-0.262-0.167-0.595-0.275-0.871-0.417-0.1-0.050-0.267-0.075-0.325-0.159-0.13-0.185-0.245-0.397-0.336-0.621l-0.008-0.022q-0.368-0.714-0.684-1.453c-0.144-0.383-0.287-0.697-0.448-1.001l0.023 0.047c-0.786-1.319-1.881-2.379-3.188-3.102l-0.043-0.022c-0.309-0.153-0.668-0.272-1.045-0.339l-0.025-0.004c-0.209-0.010-0.417-0.025-0.625-0.034-0.146-0.094-0.272-0.19-0.39-0.296l0.003 0.003c-0.475-0.3-1.704-0.95-2.054-0.090-0.225 0.542 0.334 1.077 0.527 1.352 0.154 0.183 0.294 0.388 0.415 0.605l0.010 0.020c0.059 0.145 0.075 0.294 0.134 0.445 0.145 0.452 0.292 0.823 0.459 1.182l-0.026-0.062c0.099 0.199 0.202 0.368 0.317 0.528l-0.008-0.012c0.067 0.091 0.182 0.134 0.209 0.284-0.086 0.181-0.153 0.391-0.19 0.61l-0.002 0.014c-0.108 0.332-0.171 0.715-0.171 1.112 0 0.621 0.153 1.206 0.423 1.72l-0.010-0.020c0.134 0.207 0.452 0.667 0.878 0.491 0.375-0.15 0.292-0.625 0.4-1.043 0.025-0.1 0.009-0.166 0.060-0.234v0.019c0.117 0.235 0.235 0.459 0.342 0.694 0.302 0.435 0.661 0.805 1.071 1.11l0.013 0.009c0.2 0.15 0.359 0.41 0.609 0.502v-0.025h-0.019c-0.057-0.062-0.12-0.117-0.189-0.164l-0.004-0.002c-0.155-0.152-0.299-0.316-0.429-0.489l-0.008-0.011c-0.326-0.44-0.636-0.938-0.905-1.461l-0.029-0.061c-0.137-0.262-0.252-0.545-0.362-0.804-0.050-0.1-0.050-0.25-0.134-0.3-0.148 0.166-0.281 0.351-0.392 0.55l-0.008 0.016c-0.128 0.373-0.212 0.804-0.234 1.251l-0 0.011c-0.034 0.009-0.017 0-0.034 0.018-0.267-0.065-0.359-0.342-0.459-0.575-0.136-0.366-0.215-0.79-0.215-1.231 0-0.356 0.051-0.7 0.147-1.025l-0.006 0.026c0.059-0.175 0.309-0.727 0.209-0.895-0.052-0.159-0.217-0.25-0.309-0.379-0.109-0.154-0.209-0.329-0.292-0.514l-0.008-0.020c-0.2-0.467-0.3-0.985-0.517-1.452-0.131-0.244-0.269-0.454-0.424-0.65l0.007 0.009c-0.165-0.191-0.317-0.404-0.449-0.63l-0.011-0.020c-0.041-0.091-0.1-0.242-0.034-0.342 0.012-0.058 0.058-0.103 0.117-0.112l0.001-0c0.11-0.090 0.419 0.027 0.527 0.077 0.317 0.12 0.59 0.261 0.843 0.427l-0.016-0.010c0.117 0.082 0.244 0.241 0.394 0.282h0.175c0.267 0.059 0.569 0.018 0.819 0.091 0.459 0.155 0.856 0.349 1.223 0.587l-0.021-0.013c1.104 0.713 1.988 1.677 2.586 2.816l0.020 0.041c0.1 0.192 0.144 0.369 0.235 0.569 0.175 0.412 0.391 0.829 0.569 1.227 0.169 0.428 0.369 0.798 0.607 1.139l-0.012-0.018c0.125 0.175 0.627 0.266 0.852 0.357 0.237 0.083 0.427 0.162 0.611 0.251l-0.037-0.016c0.287 0.175 0.567 0.375 0.837 0.567 0.137 0.095 0.554 0.304 0.579 0.472zM18.302 22.452c0 0.015 0.001 0.032 0.001 0.049 0 0.558-0.249 1.057-0.643 1.393l-0.003 0.002c-0.432 0.352-0.989 0.566-1.596 0.566-0.047 0-0.094-0.001-0.14-0.004l0.006 0c-0.739-0.010-1.419-0.25-1.976-0.651l0.010 0.007 0.296-0.595c0.429 0.24 0.939 0.389 1.481 0.41l0.006 0c0.027 0.002 0.058 0.003 0.090 0.003 0.332 0 0.641-0.104 0.894-0.281l-0.005 0.003c0.229-0.174 0.375-0.446 0.375-0.752 0-0.006-0-0.011-0-0.017v0.001c0-0.412-0.287-0.762-0.81-1.056-0.485-0.266-1.453-0.821-1.453-0.821-0.478-0.296-0.791-0.817-0.791-1.411 0-0.021 0-0.042 0.001-0.063l-0 0.003c-0.001-0.019-0.001-0.041-0.001-0.063 0-0.515 0.227-0.977 0.586-1.291l0.002-0.002c0.382-0.324 0.881-0.521 1.426-0.521 0.035 0 0.069 0.001 0.103 0.002l-0.005-0c0.009-0 0.020-0 0.031-0 0.639 0 1.234 0.191 1.73 0.52l-0.012-0.007-0.266 0.595c-0.391-0.176-0.847-0.282-1.327-0.287l-0.002-0c-0.024-0.002-0.051-0.003-0.079-0.003-0.28 0-0.538 0.098-0.74 0.262l0.002-0.002c-0.189 0.157-0.309 0.392-0.31 0.655v0c0 0.41 0.292 0.762 0.832 1.062 0.491 0.269 1.483 0.837 1.483 0.837 0.488 0.287 0.811 0.809 0.811 1.407 0 0.018-0 0.037-0.001 0.055l0-0.003zM20.374 22.983c-0.273-0.545-0.432-1.187-0.432-1.866 0-0.107 0.004-0.213 0.012-0.317l-0.001 0.014q0-2.611 1.587-2.612c0.026-0.002 0.057-0.003 0.089-0.003 0.475 0 0.892 0.248 1.129 0.622l0.003 0.005c0.271 0.542 0.43 1.182 0.43 1.858 0 0.104-0.004 0.207-0.011 0.309l0.001-0.014q0 2.632-1.587 2.634c-0.027 0.002-0.058 0.003-0.089 0.003-0.475 0-0.893-0.248-1.13-0.622l-0.003-0.005zM24.488 24.535l-1.27-0.625c0.116-0.097 0.22-0.199 0.316-0.309l0.003-0.003c0.513-0.692 0.821-1.563 0.821-2.505 0-0.109-0.004-0.217-0.012-0.324l0.001 0.014q0-3.43-2.693-3.432c-0.040-0.002-0.087-0.003-0.134-0.003-0.767 0-1.456 0.337-1.925 0.872l-0.002 0.003c-0.511 0.692-0.818 1.562-0.818 2.504 0 0.106 0.004 0.211 0.012 0.315l-0.001-0.014c-0.009 0.101-0.014 0.219-0.014 0.338 0 0.874 0.274 1.684 0.74 2.349l-0.009-0.013c0.449 0.478 1.086 0.776 1.791 0.776 0.066 0 0.131-0.003 0.195-0.008l-0.009 0.001c0.009 0 0.021 0 0.032 0 0.311 0 0.612-0.045 0.897-0.128l-0.022 0.006 1.656 0.965 0.45-0.777zM28.636 24.366h-3.287v-6.91h1.106v6.061h2.181zM13.235 19.268c-0.287 2.084-0.944 3.965-1.905 5.65l0.040-0.077c-0.385 0.741-1.113 1.257-1.968 1.34l-0.010 0.001c-0.259-0.014-0.5-0.076-0.719-0.177l0.012 0.005v-0.617c0.137 0.021 0.295 0.033 0.456 0.033 0.009 0 0.018-0 0.028-0h-0.001c0.016 0.001 0.034 0.001 0.052 0.001 0.289 0 0.554-0.105 0.758-0.28l-0.002 0.001c0.22-0.181 0.361-0.451 0.369-0.755l0-0.001c-0.053-0.438-0.154-0.837-0.299-1.214l0.012 0.034-1.267-3.944h1.137l0.909 2.949c0.162 0.416 0.256 0.898 0.256 1.401 0 0.001 0 0.002 0 0.002v-0c0.482-1.262 0.848-2.734 1.034-4.261l0.009-0.092zM8.215 24.366h-1.158q-0.049-2.761-0.337-5.511h-0.010l-1.762 5.511h-0.881l-1.75-5.511h-0.012q-0.205 2.751-0.244 5.511h-1.056q0.103-3.685 0.512-6.911h1.437l1.668 5.079h0.010l1.683-5.079h1.368q0.454 3.777 0.535 6.911zM21.505 7.879c-0.002 0-0.005-0-0.008-0-0.119 0-0.234 0.015-0.344 0.043l0.010-0.002v0.016h0.017c0.086 0.128 0.174 0.239 0.269 0.343l-0.002-0.002c0.067 0.134 0.125 0.267 0.192 0.4l0.017-0.019c0.109-0.086 0.178-0.218 0.178-0.366 0-0.018-0.001-0.035-0.003-0.053l0 0.002c-0.050-0.059-0.057-0.117-0.1-0.175-0.050-0.084-0.157-0.125-0.225-0.191z"></path></svg>,
            css: <svg fill="#000000"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512"><path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"></path></svg>,
            docker:<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M30.679 13.367c-0.613-0.404-1.366-0.645-2.175-0.645-0.093 0-0.185 0.003-0.276 0.009l0.012-0.001c-0.446 0.001-0.882 0.041-1.306 0.115l0.046-0.007c-0.235-1.357-1.025-2.495-2.122-3.191l-0.019-0.011-0.429-0.248-0.282 0.408c-0.336 0.512-0.599 1.108-0.756 1.745l-0.008 0.039c-0.089 0.324-0.14 0.696-0.14 1.080 0 0.831 0.24 1.605 0.654 2.258l-0.010-0.017c-0.637 0.299-1.381 0.488-2.164 0.524l-0.013 0h-19.729c-0.516 0.001-0.934 0.418-0.936 0.933v0c-0.001 0.056-0.001 0.123-0.001 0.19 0 1.751 0.317 3.428 0.897 4.977l-0.032-0.098c0.558 1.633 1.612 2.975 2.98 3.881l0.028 0.017c1.744 0.903 3.808 1.432 5.995 1.432 0.207 0 0.412-0.005 0.617-0.014l-0.029 0.001c0.018 0 0.039 0 0.060 0 1.272 0 2.515-0.121 3.72-0.352l-0.123 0.020c1.795-0.336 3.395-0.939 4.845-1.773l-0.074 0.039c1.257-0.735 2.331-1.621 3.245-2.652l0.012-0.014c1.325-1.56 2.403-3.381 3.145-5.365l0.041-0.125h0.276c0.055 0.002 0.119 0.004 0.183 0.004 1.226 0 2.34-0.481 3.163-1.265l-0.002 0.002c0.377-0.358 0.676-0.793 0.873-1.281l0.009-0.024 0.122-0.359zM3.79 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 14.849h2.644c0.127 0 0.231-0.103 0.231-0.231 0 0 0 0 0-0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0 0-0 0-0 0-0.128 0-0.232 0.104-0.232 0.232 0 0 0 0 0 0v0 2.355c0.001 0.128 0.104 0.231 0.232 0.231v0zM11.132 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0.127 0.103 0.231 0.231 0.231v0zM14.788 14.849h2.643c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 11.461h2.644c0.128-0.001 0.231-0.104 0.231-0.232 0 0 0 0 0 0v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.644c-0.128 0-0.231 0.103-0.232 0.231v2.355c0.001 0.128 0.104 0.231 0.232 0.232h0zM11.132 11.461h2.646c0.127-0.001 0.23-0.105 0.23-0.232v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0.001 0.128 0.103 0.231 0.231 0.232h0zM14.788 11.461h2.643c0.128-0.001 0.231-0.104 0.232-0.232v-2.355c-0.001-0.128-0.104-0.231-0.232-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0 0.128 0.103 0.231 0.231 0.232h0zM14.788 8.073h2.643c0 0 0 0 0 0 0.128 0 0.232-0.104 0.232-0.232 0-0 0-0 0-0v0-2.356c-0.001-0.128-0.104-0.231-0.232-0.231 0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM18.475 14.849h2.644c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.644c0 0 0 0-0 0-0.128 0-0.231 0.103-0.231 0.231v2.356c0 0.127 0.103 0.231 0.231 0.231v0z"></path></svg>,
            vue: <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="nonzero" clip-rule="nonzero" d="M11.7527 1.00003H10.4167C10.1615 1.00003 9.92378 1.1298 9.78578 1.34446L8 4.12235L6.21422 1.34446C6.07622 1.1298 5.83853 1.00003 5.58333 1.00003H0.75C0.481089 1.00003 0.232759 1.144 0.0991399 1.37737C-0.0344791 1.61073 -0.0329346 1.89777 0.103188 2.12968L7.35319 14.4815C7.48785 14.711 7.73397 14.8519 8 14.8519C8.26603 14.8519 8.51215 14.711 8.64681 14.4815L15.8968 2.12968C16.0329 1.89777 16.0345 1.61073 15.9009 1.37737C15.7672 1.144 15.5189 1.00003 15.25 1.00003H11.7668C11.7621 0.999989 11.7574 0.999989 11.7527 1.00003ZM3.80997 2.50003L8.00001 9.68295L12.19 2.50003H13.9401L8 12.6203L2.05987 2.50003H3.80997Z" fill="#000000"/></svg>,
            vscode:<svg fill="#000000" viewBox="0 0 32 32" id="Camada_1" version="1.1" ><path d="M28,25.6l-5.9,2.4l-9.7-9.6l-6.1,4.8L4,21.9V10.1l2.3-1.2l6.1,4.8L22.1,4L28,6.4V25.6z M15.7,16l6.3,5l0,0V11L15.7,16  L15.7,16z M6.3,19.7L6.3,19.7L10,16l-3.6-3.7l0,0L6.3,19.7L6.3,19.7z"/></svg>,
            gimp:<svg  viewBox="0 0 32 32" version="1.1">
            <path  d="M17.3,24.5c-4.7,0-7.7-1.1-9.6-2.6c0.4-0.1,0.8-0.3,1.2-0.6c0.8-0.8,1-1.9,0.9-2.9c0-0.2-0.1-0.4-0.1-0.6   c0.2,0,0.4,0.1,0.6,0.1c0.9,0,1.7-0.4,2.3-1c0.6,1.1,1.8,1.9,3.2,1.9c1.7,0,3.2-1.2,3.5-2.9c0-0.2,0.1-0.5,0.1-0.7   c0-0.4-0.1-0.8-0.2-1.2c-0.5-1.4-1.8-2.4-3.4-2.4c-0.9,0-1.8,0.3-2.4,0.9c-0.2,0.2-0.4,0.4-0.6,0.7c-0.2-0.2-0.4-0.5-0.6-0.6   c-0.5-0.4-1.2-0.7-1.9-0.7c-1.5,0-2.8,1.1-3,2.6c-0.3-0.2-0.5-0.4-0.8-0.5c0.2-0.8,0.7-1.6,1.3-2.1V8.1c0-0.3,0.3-0.4,0.4-0.1   l0,0.1c0.4,0.9,0.9,2.1,2,3c0.9,0,1.8,0.3,2.4,0.9c0.8-0.7,1.9-1.2,3-1.2c1.2,0,2.3,0.5,3.1,1.2c3.8-1.1,5.8-3.6,6.8-5.6   c0.1-0.3,0.7-0.2,0.7,0.1c0.6,5.9,0.3,12-2.5,15.4c-1-0.7-2-1.2-2.7-1.6c-0.1,0-0.1-0.1-0.2-0.1c0-0.1,0-0.2,0-0.2l0,0   c-0.2-0.6-0.7-1.2-1.4-1.4l0,0c-0.2-0.1-0.5,0-0.5,0.3c-0.1,0.2,0,0.5,0.3,0.5l0,0c0,0,0.1,0,0.1,0c-1.7,1.1-3.7,1.6-5.8,1.5   l-0.5,0c-0.2,0-0.4,0.2-0.5,0.4c0,0.2,0.2,0.4,0.4,0.5l0.5,0c1.8,0.1,3.7-0.2,5.3-1c0,0,0,0,0,0c0.1,0.1,0.2,0.3,0.3,0.4   c0.2,0.2,0.5,0.5,0.9,0.8c0.5,0.5,1.2,1,2,1.6C20.7,24.1,19.2,24.5,17.3,24.5L17.3,24.5z"/>
            <path  d="M22.5,23c-1.2-0.9-2.2-1.7-2.8-2.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.2-0.2-0.3-0.3-0.4c0-0.1,0-0.1,0-0.1   c0,0,0.1-0.1,0.2,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0.1,0.2,0.1c0.7,0.3,2,1,3.3,1.9c0.2,0.1,0.4,0.3,0.6,0.4c1.1,0.7,2,1.5,2.7,2   c1.2-1.3,2.7,2.2,2.7,2.2s-3.8,0.4-3.1-1.4c-0.8-0.4-1.8-1.1-2.9-1.8C23,23.4,22.7,23.2,22.5,23L22.5,23z"/>
            <path  d="M8.5,20.4c-0.1,0.1-0.2,0.2-0.3,0.3c-1.1,1-3.2,0.5-4.7-1.2c-1.5-1.7-1.9-3.8-0.8-4.8C3.6,14,5,14.1,6.3,14.9   c0.3,0.2,0.7,0.5,1,0.8c0.1,0.1,0.2,0.2,0.3,0.3c0.4,0.5,0.8,1,1,1.5c0.3,0.7,0.4,1.4,0.4,2C8.9,19.8,8.8,20.1,8.5,20.4L8.5,20.4z    M5.2,16.2c0,0.8-0.5,1.4-1.2,1.4S2.8,17,2.8,16.2c0-0.8,0.5-1.4,1.2-1.4S5.2,15.4,5.2,16.2z"/>
            <path  d="M10.9,16.8c1,0,1.7-0.8,1.7-1.7c0-1-0.8-1.7-1.7-1.7c-0.1,0-0.3,0-0.4,0c0.4,0.1,0.7,0.5,0.7,1   c0,0.6-0.5,1-1,1c-0.4,0-0.8-0.3-1-0.7c0,0.1,0,0.3,0,0.4C9.2,16,10,16.8,10.9,16.8z"/>
            <path  d="M16.4,17.6c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2c-0.1,0-0.2,0-0.3,0c0.5,0.1,0.9,0.6,0.9,1.1   c0,0.6-0.5,1.2-1.2,1.2c-0.6,0-1.2-0.5-1.2-1.2c0-0.1,0-0.1,0-0.2c-0.2,0.3-0.3,0.7-0.3,1.1C14.4,16.7,15.3,17.6,16.4,17.6   L16.4,17.6z"/></svg>,
            sql2: <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550.801 550.801"><path d="M277.425,402.116c-20.208,0-31.87,19.833-31.87,44.317c-0.2,24.88,11.853,43.934,31.681,43.934
                    c20.018,0,31.683-18.858,31.683-44.508C308.918,421.949,297.644,402.116,277.425,402.116z"/>
                    <path d="M475.095,131.992c-0.032-2.526-0.833-5.021-2.568-6.993L366.324,3.694c-0.021-0.034-0.062-0.045-0.084-0.076
                    c-0.633-0.707-1.36-1.29-2.141-1.804c-0.232-0.15-0.475-0.285-0.718-0.422c-0.675-0.366-1.382-0.67-2.13-0.892
                    c-0.19-0.058-0.38-0.14-0.58-0.192C359.87,0.114,359.037,0,358.203,0H97.2C85.292,0,75.6,9.693,75.6,21.601v507.6
                    c0,11.913,9.692,21.601,21.6,21.601H453.6c11.908,0,21.601-9.688,21.601-21.601V133.202
                    C475.2,132.796,475.137,132.398,475.095,131.992z M147.382,513.691c-14.974,0-29.742-3.892-37.125-7.979l6.022-24.485
                    c7.963,4.082,20.216,8.164,32.843,8.164c13.613,0,20.799-5.643,20.799-14.196c0-8.169-6.21-12.825-21.956-18.457
                    c-21.766-7.583-35.962-19.644-35.962-38.687c0-22.354,18.668-39.461,49.57-39.461c14.776,0,25.661,3.111,33.431,6.613
                    l-6.613,23.904c-5.244-2.521-14.575-6.207-27.4-6.207c-12.836,0-19.045,5.822-19.045,12.63c0,8.358,7.38,12.05,24.289,18.463
                    c23.127,8.553,34.024,20.608,34.024,39.076C200.253,495.023,183.336,513.691,147.382,513.691z M332.237,534.284
                    c-18.657-5.442-34.204-11.074-51.701-18.468c-2.911-1.16-6.022-1.745-9.134-1.936c-29.542-1.936-57.14-23.715-57.14-66.482
                    c0-39.261,24.877-68.808,63.942-68.808c40.047,0,62.006,30.322,62.006,66.087c0,29.742-13.796,50.735-31.104,58.504v0.785
                    c10.115,2.922,21.39,5.253,31.684,7.378L332.237,534.284z M441.492,511.745h-81.833V380.737h29.742V486.86h52.091V511.745z
                    M97.2,366.752V21.601h250.203v110.515c0,5.961,4.831,10.8,10.8,10.8H453.6l0.011,223.836H97.2z"/>
                    <path d="M334.114,171.171c0.475-1.308,0.812-2.647,0.812-4.063c0-17.386-37.568-26.765-72.924-26.765
                    c-35.321,0-72.879,9.379-72.879,26.765c0,1.416,0.33,2.761,0.81,4.074l-0.188,0.335c-1.616,2.932-2.415,5.89-2.415,8.801v21.513
                    c0,3.312,1.042,6.492,2.89,9.498l-0.242,0.411c-1.762,3.056-2.647,6.151-2.647,9.208v21.508c0,3.208,0.983,6.286,2.731,9.208
                    l-0.084,0.134c-1.762,3.051-2.647,6.152-2.647,9.202v21.51c0,19.122,32.801,34.093,74.672,34.093
                    c41.916,0,74.717-14.971,74.717-34.093v-21.51c0-3.056-0.886-6.162-2.669-9.208l-0.073-0.118c1.734-2.927,2.742-6.004,2.742-9.218
                    v-21.508c0-3.061-0.886-6.167-2.669-9.218l-0.231-0.396c1.846-3.011,2.9-6.186,2.9-9.508v-21.513c0-2.911-0.812-5.877-2.415-8.81
                    L334.114,171.171z M328.715,282.509c0,12.351-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.742-66.68-26.093v-20.231
                    c12.263,11.232,37.492,18.396,66.68,18.396c29.228,0,54.456-7.169,66.712-18.407V282.509z M328.715,242.455
                    c0,12.34-27.38,26.093-66.712,26.093c-39.295,0-66.68-13.753-66.68-26.093v-20.234c12.263,11.227,37.492,18.398,66.68,18.398
                    c29.228,0,54.456-7.172,66.712-18.409V242.455z M328.715,201.825c0,12.34-27.38,26.093-66.712,26.093
                    c-39.295,0-66.68-13.748-66.68-26.093v-17.9c11.984,10.156,39.772,15.422,66.68,15.422c26.944,0,54.72-5.266,66.712-15.422
                    V201.825z"/>
                </svg>,
        }

export default icons;