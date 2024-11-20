import React from "react";

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen bg-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24">
                {/* Círculo 1 */}
                <circle cx="12" cy="3" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle0"
                        attributeName="r"
                        begin="0;svgSpinners6DotsScaleMiddle2.end-0.5s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 2 */}
                <circle cx="16.5" cy="4.21" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle1"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle0.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 3 */}
                <circle cx="7.5" cy="4.21" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle2"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle4.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 4 */}
                <circle cx="19.79" cy="7.5" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle3"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle1.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 5 */}
                <circle cx="4.21" cy="7.5" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle4"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle6.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 6 */}
                <circle cx="21" cy="12" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle5"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle3.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 7 */}
                <circle cx="3" cy="12" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle6"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle8.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 8 */}
                <circle cx="19.79" cy="16.5" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle7"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle5.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 9 */}
                <circle cx="4.21" cy="16.5" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle8"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddlea.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 10 */}
                <circle cx="16.5" cy="19.79" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddle9"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle7.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 11 */}
                <circle cx="7.5" cy="19.79" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddlea"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddleb.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>

                {/* Círculo 12 */}
                <circle cx="12" cy="21" r="0" fill="#003070">
                    <animate
                        id="svgSpinners6DotsScaleMiddleb"
                        attributeName="r"
                        begin="svgSpinners6DotsScaleMiddle9.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                        values="0;2;0"
                    />
                </circle>
            </svg>
        </div>
    );
};

export default LoadingSpinner;
