
import Head from 'next/head';

const LineEffect = () => {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <style jsx>{`
                .eltdf-btn-first-line, .eltdf-btn-second-line {
                    transition: transform 0.5s ease;
                    transform-origin: left;
                    background-color: #C9AB81;
                    transform: scaleX(0);
                }
                .eltdf-btn-second-line {
                    transition-delay: 0.1s;
                }
                a:hover .eltdf-btn-first-line, a:hover .eltdf-btn-second-line {
                    transform: scaleX(1);
                }
                a .eltdf-btn-first-line, a .eltdf-btn-second-line {
                    transform: scaleX(0);
                }
                /* Ensure no default list styles are applied */
                a {
                    text-decoration: none;
                }
            `}</style>

            <a className="inline-block text-center py-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/QodeInteractive/">
                Facebook
                <span className="eltdf-btn-first-line border border-[#C9AB81] mt-1 block w-full"></span>
                <span className="eltdf-btn-second-line border border-[#C9AB81] mt-1 block w-full"></span>
            </a>

        </>
    );
}

export default LineEffect;
