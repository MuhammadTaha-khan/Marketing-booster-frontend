import React from 'react'
import SEO01 from './images/SEO01.avif';
// import blog01 from './images/blog01.jpg';
import blog02 from './images/blog02.avif';
import blog04 from './images/blog04.avif';
// import blog06 from './images/blog06.avif';
import { Container } from 'react-bootstrap';
import './component/Blogg.css'

function Blog() {
    return (
        <div className='Blog'>
            <Container fluid='lg'>
                <div className='row'>
                    <div className="blog-right col-md-6 mb-5 mt-5">
                        <img src={SEO01} alt="Image Blog Post" width={500} height={250} />
                    </div>
                    <div className="blog-left col-md-6 mb-3 mt-5">
                        <h1>BEST PRACTICES FOR ON-PAGE SEO</h1>
                        <p>what is on-page seo? (importance and key elements) in the vast digital landscape, your website’s visibility is similar to a beacon in the night, guiding lost souls toward their desired destinations. this beacon is none other than on-page seo, a potent tool that propels your web content to the forefront of search engine results.  it’s […]</p>
                        {/* <button class="button mt-3">READ MORE</button> */}
                    </div>
                </div>

            </Container>
            <div className="container fluid='lg'">
                <div className="row">
                    <h1 className="title">TheGem Wordpress Theme for Blogger</h1>
                    <p className="subtitle">Explore the most amazing WordPress theme for bloggers</p>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <div class="flip-card">
                                    <div class="flip-card-inner card">
                                        <div class="flip-card-front card-content">
                                            <img src={blog04} alt="Blog post" />
                                            <h2 class="title-card">FLIP CARD</h2>
                                            <p>Description of the blog post goes here...</p>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={blog02} alt="Blog post" />
                                            <h2 class="title-back">BACK</h2>
                                            <p>Leave Me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <div class="flip-card">
                                    <div class="flip-card-inner card">
                                        <div class="flip-card-front card-content">
                                            <img src={blog04} alt="Blog post" />
                                            <h2 class="title-card">FLIP CARD</h2>
                                            <p>Description of the blog post goes here...</p>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={blog02} alt="Blog post" />
                                            <h2 class="title-back">BACK</h2>
                                            <p>Leave Me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <div class="flip-card">
                                    <div class="flip-card-inner card">
                                        <div class="flip-card-front card-content">
                                            <img src={blog04} alt="Blog post" />
                                            <h2 class="title-card">FLIP CARD</h2>
                                            <p>Description of the blog post goes here...</p>
                                        </div>
                                        <div class="flip-card-back">
                                            <img src={blog02} alt="Blog post" />
                                            <h2 class="title-back">BACK</h2>
                                            <p>Leave Me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <div class="flip-card">
                                    <div class="flip-card-inner card">
                                        <div class="flip-card-front card-content">
                                            <img src={blog04} alt="Blog post" />
                                            <h2 class="title-card">FLIP CARD</h2>
                                            <p>Description of the blog post goes here...</p>
                                        </div>
                                        <div class="flip-card-back">
                                            {/* <img src={blog02} alt="Blog post" /> */}
                                            <h2 class="title-back">BACK</h2>
                                            <p>Leave Me Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum quam nam facere quaerat temporibus deserunt nobis maiores similique velit, autem tempora qui nesciunt nihil dolores sunt illo deleniti consequatur.
                                            Dicta delectus mollitia et a ipsum voluptate corporis nemo? Asperiores recusandae ab cupiditate vero assumenda, quos, enim deserunt eum sequi ut itaque illo, 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more timeline items as needed */}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Blog
