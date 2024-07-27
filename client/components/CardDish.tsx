// import { FC } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

// const CardDish: FC = () => {
//     return (
//         <>
//             <style jsx>{`
//                 .card:hover .overlay {
//                     transform: translateY(0);
//                 }

//                 .overlay {
//                     transition: transform 0.5s ease;
//                     transform: translateY(-100%);
//                 }
//             `}</style>
//             <article className="eltdf-pl-item eltdf-item-space post-942 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty eltdf-item-show eltdf-item-shown">
               
//                 <div className="w-[33.33333%] bg-[#000000] eltdf-pl-item-inner">
//                     <div className="relative bg-cover bg-center card">
//                         <img
//                             className="attachment-full size-full wp-post-image"
//                             alt="d"
//                             src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-673x1024.jpg"
//                             sizes="(max-width: 800px) 100vw, 800px"
//                         />
//                         <div className=" m-[10%] absolute inset-0 bg-black bg-opacity-80 overlay">
//                             <div className="">
//                                 <div className="wpb_text_column wpb_content_element">
//                                     <div className=" wpb_wrapper text-[#C9AB81] text-4xl text-center items-center">
//                                         <h3 className="text-center items-center">Flavor</h3>
//                                     </div>
//                                 </div>
//                                 <div className="wpb_text_column wpb_content_element">
//                                     <div className=" mx-[8%] wpb_wrapper text-[#DEDFDF] text-xl">
//                                         <p>Lorem ipsum dolor sit amet, consectet urta dipis isu cingelit, sed do eiusmodsl ntetm mpor incida idunt utvlabore eti.</p>
//                                     </div>
//                                 </div>
//                                 <div className="wpb_text_column wpb_content_element">
//                                     <div className="mx-[8%] wpb_wrapper text-[#DEDFDF] text-xl">
//                                         <p> aliqua. Ut enim ad minim danor venia quisno strud exercitation ullamco labor nisiutse ns aliquip ex ea commodo labr.</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex eltdf-ps-info-item eltdf-ps-categories">
//                                     <h6 className="text-[#C9AB81]  eltdf-ps-info-title">Category:</h6>
//                                     <a itemProp="url" className="text-white eltdf-ps-info-category" href="https://laurent.qodeinteractive.com/portfolio-category/specialties/">Specialties</a>
//                                 </div>
//                                 <div className="flex eltdf-ps-info-item eltdf-ps-date">
//                                     <h6 className="text-[#C9AB81]  eltdf-ps-info-title">Date:</h6>
//                                     <p itemProp="dateCreated" className="text-white eltdf-ps-info-date entry-date updated">November 1, 2019</p>
//                                     <meta itemProp="interactionCount" content="UserComments: 0" />
//                                 </div>
//                                 <div className="flex eltdf-ps-info-item eltdf-ps-tags">
//                                     <h6 className="text-[#C9AB81]  eltdf-ps-info-title">Tags:</h6>
//                                     <a itemProp="url" className="text-white eltdf-ps-info-tag" href="https://laurent.qodeinteractive.com/portfolio-tag/recipes/">Recipes</a>, 
//                                     <a itemProp="url" className="text-white eltdf-ps-info-tag" href="https://laurent.qodeinteractive.com/portfolio-tag/sweet/">Sweet</a>, 
//                                     <a itemProp="url" className="text-white eltdf-ps-info-tag" href="https://laurent.qodeinteractive.com/portfolio-tag/tasty/">Tasty</a>
//                                 </div>
//                                 <div className="eltdf-ps-info-item eltdf-ps-social-share">
//                                     <div className="eltdf-social-share-holder eltdf-list">
//                                         <p className="text-[#C9AB81]  eltdf-social-title">Share:</p>
//                                         <ul>
//                                             <li className=" eltdf-facebook-share">
//                                                 <a
//                                                     itemProp="url"
//                                                     className="bg-[#C9AB81]  eltdf-share-link w-[5px] text-[#C9AB81] "
//                                                     href="#"
//                                                     onClick={() =>
//                                                         window.open(
//                                                             'https://www.facebook.com/sharer.php?u=https%3A%2F%2Flaurent.qodeinteractive.com%2Fportfolio-item%2Fstarters%2F',
//                                                             'sharer',
//                                                             'toolbar=0,status=0,width=620px,height=280px'
//                                                         )
//                                                     }
//                                                 >
//                                                     <FontAwesomeIcon icon={faFacebookF} />
//                                                 </a>
//                                             </li>
//                                             <li className="eltdf-twitter-share">
//                                                 <a
//                                                     itemProp="url"
//                                                     className="eltdf-share-link"
//                                                     href="#"
//                                                     onClick={() =>
//                                                         window.open(
//                                                             'https://twitter.com/intent/tweet?text= https://laurent.qodeinteractive.com/portfolio-item/starters/',
//                                                             'popupwindow',
//                                                             'scrollbars=yes,width=800,height=400'
//                                                         )
//                                                     }
//                                                 >
//                                                     <FontAwesomeIcon icon={faTwitter} />
//                                                 </a>
//                                             </li>
//                                             <li className="eltdf-tumblr-share">
//                                                 <a
//                                                     itemProp="url"
//                                                     className="eltdf-share-link"
//                                                     href="#"
//                                                     onClick={() =>
//                                                         window.open(
//                                                             'https://www.tumblr.com/share/link?url=https%3A%2F%2Flaurent.qodeinteractive.com%2Fportfolio-item%2Fstarters%2F&amp;name=Starters&amp;description=',
//                                                             'popupwindow',
//                                                             'scrollbars=yes,width=800,height=400'
//                                                         )
//                                                     }
//                                                 >
//                                                     <FontAwesomeIcon icon={faTumblr} />
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="text-center  eltdf-pli-text-wrapper">
//                         <div className="justify-center eltdf-pli-text">
//                             <h5 itemProp="name" className="text-[#C9AB81]  text-xl eltdf-pli-title entry-title">STARTERS</h5>
//                             <div className="eltdf-pli-category-holder">
//                                 <a itemProp="url" className="text-lightGray eltdf-pli-category" href="">Specialties</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </article>
           
//         </>
//     );
// };

// export default CardDish;

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
