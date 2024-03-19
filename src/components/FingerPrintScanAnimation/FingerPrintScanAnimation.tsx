const FingerPrintScanAnimation = () => {
    return (
        <>
            <div className="scan">
                <div className="fingerprint">
                    <div className="fingerprint-before"></div>
                    <div className="fingerprint-after"></div>
                </div>
                <br />
                <h3>identifying...</h3>
                <br /><br />
            </div>
            <style>{`
                .scan {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: 30vh;
                    background-color: #111;
                }

                .fingerprint {
                    position: relative;
                    width: 225px;
                    height: 285px;
                    background-image: url(./src/assets/images/fingerPrint_01.png);
                    background-size: 225px;
                }

                .fingerprint-before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url(./src/assets/images/fingerPrint_02.png);
                    background-size: 225px;
                    animation: animate 4s ease-in-out infinite;
                }

                .fingerprint-after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 8px;
                    background-color: #3fefef;
                    border-radius: 8px;
                    filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
                    animation: animate-line 4s ease-in-out infinite;
                }

                h3 {
                    text-transform: uppercase;
                    font-size: 1.2em;
                    letter-spacing: 3px;
                    margin-top: 20px;
                    color: #3fefef;
                    filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
                    animation: animate-text 0.5s steps(1) infinite;
                }

                @keyframes animate {
                    0%, 100% {
                        height: 0%;
                    }
                    50% {
                        height: 100%;
                    }
                }

                @keyframes animate-line {
                    0%, 100% {
                        top: 0%;
                    }
                    50% {
                        top: 100%;
                    }
                }

                @keyframes animate-text {
                    0%, 100% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default FingerPrintScanAnimation;
