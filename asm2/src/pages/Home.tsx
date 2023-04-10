import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ProductPage from './Products'
import { IProduct } from '../interface/product'
import ProductsList from './layout/ProductsList'
import { Pagination } from 'antd'

type Props = {}

const HomePage = (props: Props) => {
    const [product, setProduct] = useState<IProduct[]>([]);

    return (
        <div>

            {/* <!-- Banner --> */}

            <div className="banner">
                <div className="banner_background"></div>
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="banner_product_image"><img src="images/banner_product.png" alt="" /></div>
                        <div className="col-lg-5 offset-lg-4 fill_height">
                            <div className="banner_content">
                                <h1 className="banner_text">new era of smartphones</h1>
                                <div className="banner_price"><span>$530</span>$460</div>
                                <div className="banner_product_name">Apple Iphone 6s</div>
                                <div className="button banner_button"><a href="#">Shop Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Characteristics --> */}

            <div className="characteristics">
                <div className="container">
                    <div className="row">

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_1.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_2.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src="images/char_3.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Char. Item --> */}
                        <div className="col-lg-3 col-md-6 char_col">

                            <div className="char_item d-flex flex-row align-items-center justify-content-start">
                                <div className="char_icon"><img src=".../../assets/images/char_4.png" alt="" /></div>
                                <div className="char_content">
                                    <div className="char_title">Free Delivery</div>
                                    <div className="char_subtitle">from $50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="deals_featured">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">

                            {/* <!-- Deals --> */}

                            <div className="deals">
                                <div className="deals_title">Deals of the Week</div>
                                <div className="deals_slider_container">

                                    {/* <!-- Deals Slider --> */}
                                    <div className="owl-carousel owl-theme deals_slider">

                                        {/* <!-- Deals Item --> */}
                                        <div className="owl-item deals_item">
                                            <div className="deals_image">
                                                <img src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677193002/THITHU/ehrgfuailahevhct3abq.jpg" alt="" />
                                            </div>
                                            <div className="deals_content">
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div className="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_name">Beoplay H7</div>
                                                    <div className="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div className="available">
                                                    <div className="available_line d-flex flex-row justify-content-start">
                                                        <div className="available_title">Available: <span>6</span></div>
                                                        <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div className="available_bar"><span></span></div>
                                                </div>
                                                <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div className="deals_timer_title_container">
                                                        <div className="deals_timer_title">Hurry Up</div>
                                                        <div className="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div className="deals_timer_content ml-auto">
                                                        <div className="deals_timer_box clearfix" data-target-time="">
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer1_hr" className="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer1_min" className="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer1_sec" className="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Deals Item --> */}
                                        <div className="owl-item deals_item">
                                            <div className="deals_image"><img src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677193002/THITHU/ehrgfuailahevhct3abq.jpg" alt="" /></div>
                                            <div className="deals_content">
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div className="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_name">Beoplay H7</div>
                                                    <div className="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div className="available">
                                                    <div className="available_line d-flex flex-row justify-content-start">
                                                        <div className="available_title">Available: <span>6</span></div>
                                                        <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div className="available_bar"><span className='style' ></span></div>
                                                </div>
                                                <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div className="deals_timer_title_container">
                                                        <div className="deals_timer_title">Hurry Up</div>
                                                        <div className="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div className="deals_timer_content ml-auto">
                                                        <div className="deals_timer_box clearfix" data-target-time="">
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer2_hr" className="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer2_min" className="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer2_sec" className="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Deals Item --> */}
                                        <div className="owl-item deals_item">
                                            <div className="deals_image"><img src="https://res.cloudinary.com/duqn6uvp2/image/upload/v1677193002/THITHU/ehrgfuailahevhct3abq.jpg" alt="" /></div>
                                            <div className="deals_content">
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_category"><a href="#">Headphones</a></div>
                                                    <div className="deals_item_price_a ml-auto">$300</div>
                                                </div>
                                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="deals_item_name">Beoplay H7</div>
                                                    <div className="deals_item_price ml-auto">$225</div>
                                                </div>
                                                <div className="available">
                                                    <div className="available_line d-flex flex-row justify-content-start">
                                                        <div className="available_title">Available: <span>6</span></div>
                                                        <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                                    </div>
                                                    <div className="available_bar"><span ></span></div>
                                                </div>
                                                <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                                    <div className="deals_timer_title_container">
                                                        <div className="deals_timer_title">Hurry Up</div>
                                                        <div className="deals_timer_subtitle">Offer ends in:</div>
                                                    </div>
                                                    <div className="deals_timer_content ml-auto">
                                                        <div className="deals_timer_box clearfix" data-target-time="">
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer3_hr" className="deals_timer_hr"></div>
                                                                <span>hours</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer3_min" className="deals_timer_min"></div>
                                                                <span>mins</span>
                                                            </div>
                                                            <div className="deals_timer_unit">
                                                                <div id="deals_timer3_sec" className="deals_timer_sec"></div>
                                                                <span>secs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="deals_slider_nav_container">
                                    <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto"></i></div>
                                    <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto"></i></div>
                                </div>
                            </div>

                            {/* <!-- Featured --> */}
                            <div className="featured">
                                <div className="tabbed_container">
                                    <div className="tabs">
                                        <ul className="clearfix">
                                            <li className="active">Featured</li>
                                            <li>On Sale</li>
                                            <li>Best Rated</li>
                                        </ul>
                                        <div className="tabs_line"><span></span></div>
                                    </div>

                                    {/* <!-- Product Panel --> */}
                                    <div className="product_panel panel active">
                                        <ProductsList />
                                    </div>
                                    {/* <!-- Product Panel --> */}
                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <!-- Slider Item --> */}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                                <input type="radio" name="product_color" />
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>
                                    {/* <!-- Product Panel --> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default HomePage
