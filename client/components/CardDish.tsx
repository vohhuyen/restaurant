<<<<<<< HEAD
// import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

import Head from 'next/head';

const CardDish = () => {
    return (
        <>
        
         <Head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        </Head>
            <style jsx>{`
                .card:hover .overlay {
                    transform: translateY(0);
                }

                .overlay {
                    transition: transform 0.5s ease;
                    transform: translateY(-100%);
                }
            `}</style>
            <article className="eltdf-pl-item eltdf-item-space post-942 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty eltdf-item-show eltdf-item-shown">
                <div className="w-[33.33333%] bg-[#000000] eltdf-pl-item-inner">
                    <div className="relative bg-cover bg-center card">
                        <img
                            className="card attachment-full size-full wp-post-image"
                            alt="d"
                            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-673x1024.jpg"
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                        <div className="absolute m-[10%] inset-0 bg-black bg-opacity-80 overlay">
                            <div>
                                <div className="wpb_text_column wpb_content_element">
                                    <div className="my-[10%] wpb_wrapper text-[#C9AB81] text-4xl text-center items-center">
                                        <h3 className="text-center items-center">Flavor</h3>
                                    </div>
                                </div>
                                <div className="wpb_text_column wpb_content_element">
                                    <div className="my-[10%] mx-[8%] wpb_wrapper text-[#DEDFDF] text-xl">
                                        <p>Lorem ipsum dolor sit amet, consectet urta dipis isu cingelit, sed do eiusmodsl ntetm mpor incida idunt utvlabore eti.</p>
                                    </div>
                                </div>
                                <div className="wpb_text_column wpb_content_element">
                                    <div className="mx-[8%] wpb_wrapper text-[#DEDFDF] text-xl">
                                        <p> aliqua. Ut enim ad minim danor venia quisno strud exercitation ullamco labor nisiutse ns aliquip ex ea commodo labr.</p>
                                    </div>
                                </div>
                            </div>
                          
                            
                        </div>
                    </div>
                    <div className="text-center my-[10%] eltdf-pli-text-wrapper">
                        <div className="justify-center eltdf-pli-text">
                            <h5 itemProp="name" className="text-[#C9AB81] text-xl eltdf-pli-title entry-title">STARTERS</h5>
                            <div className="eltdf-pli-category-holder">
                                <a itemProp="url" className="text-[#DEDFDF] eltdf-pli-category" href="">Specialties</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default CardDish;
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const CardDish = () => {
    return (
        <>
            <style jsx>{`
                .card {
                    max-width: 28%; 
                    position: relative;
                    background-color: #000000;
                    overflow: hidden;
                    border-radius: 8px; 
                    box-sizing: border-box; 
                }
                .card img {
                    width: 100%;
                    height: auto;
                }
                .overlay {
                    transition: transform 0.5s ease;
                    transform: translateY(-100%);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                    color: #DEDFDF;
                    text-align: center;
                }
                .card:hover .overlay {
                    transform: translateY(0);
                }
                .text-[#C9AB81] {
                    color: #C9AB81;
                }
                .text-[#DEDFDF] {
                    color: #DEDFDF;
                }
                .text-xl {
                    font-size: 1.25rem;
                }
                .text-4xl {
                    font-size: 2.25rem; 
                }
            `}</style>
            <div className="container flex justify-around p-4 max-w-7xl mx-auto">
                <article className="card flex-1 max-w-[28%] relative bg-black overflow-hidden rounded-lg box-border">
                    <img
                        className="card-img"
                        alt="Dish"
                        src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-673x1024.jpg"
                        sizes="(max-width: 800px) 100vw, 800px"
                    />
                    <div className="overlay">
                        <h3 className="text-[#C9AB81] text-4xl">Flavor</h3>
                        <p>Lorem ipsum dolor sit amet, consectet urta dipis isu cingelit, sed do eiusmodsl ntetm mpor incida idunt utvlabore eti.</p>
                        <p>aliqua. Ut enim ad minim danor venia quisno strud exercitation ullamco labor nisiutse ns aliquip ex ea commodo labr.</p>
                    </div>
                </article>
                <article className="card">
                    <img
                        className="card-img"
                        alt="Dish"
                        src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-673x1024.jpg"
                        sizes="(max-width: 800px) 100vw, 800px"
                    />
                    <div className="overlay">
                        <h3 className="text-[#C9AB81] text-4xl">Flavor</h3>
                        <p>Lorem ipsum dolor sit amet, consectet urta dipis isu cingelit, sed do eiusmodsl ntetm mpor incida idunt utvlabore eti.</p>
                        <p>aliqua. Ut enim ad minim danor venia quisno strud exercitation ullamco labor nisiutse ns aliquip ex ea commodo labr.</p>
                    </div>
                </article>
                <article className="card">
                    <img
                        className="card-img"
                        alt="Dish"
                        src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-673x1024.jpg"
                        sizes="(max-width: 800px) 100vw, 800px"
                    />
                    <div className="overlay">
                        <h3 className="text-[#C9AB81] text-4xl">Flavor</h3>
                        <p>Lorem ipsum dolor sit amet, consectet urta dipis isu cingelit, sed do eiusmodsl ntetm mpor incida idunt utvlabore eti.</p>
                        <p>aliqua. Ut enim ad minim danor venia quisno strud exercitation ullamco labor nisiutse ns aliquip ex ea commodo labr.</p>
                    </div>
                </article>
            </div>
        </>
    );
};

export default CardDish;
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
