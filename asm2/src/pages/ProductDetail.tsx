import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { get } from '../api/product'
import { useParams } from 'react-router-dom'

interface IProps {
  products: IProduct[]
}
// const [product, setProduct] = useState<IProduct[]>([])

const ProductDetailPage = (props: IProps) => {
  // console.log(typeof _id);
  // const Product = product.find((products: IProduct) => products._id === +_id);
  // console.log(Product)
  const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        const currentProduct = props.products.find(item => item._id === id)
        setProduct(currentProduct)
    })
  return (
    <div>
      <div className="single_product">
        <div className="container">
          <div className="row">

            {/* <!-- Images --> */}
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="images/single_4.jpg"><img src={`${product?.images}`} alt="" /></li>
                <li data-image="images/single_2.jpg"><img src={`${product?.images}`} alt="" /></li>
                <li data-image="images/single_3.jpg"><img src={`${product?.images}`} alt="" /></li>
              </ul>
            </div>

            {/* <!-- Selected Image --> */}
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="image_selected">  <img src={`${product?.images}`} alt="" /></div>
            </div>

            {/* <!-- Description --> */}
            <div className="col-lg-5 order-3">
              <div className="product_description">
                <div className="product_category">Laptops</div>
                <div className="product_name">{product?.name}</div>
                <div className="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div>
                <div className="product_text"><p>{product?.desc}</p></div>
                <div className="order_info d-flex flex-row">
                  <form action="#">
                    <div className="clearfix" >

                      {/* <!-- Product Quantity --> */}
                      <div className="product_quantity clearfix">
                        <span>Quantity: </span>
                        <input id="quantity_input" type="text" pattern="[0-9]*" value="1" />
                        <div className="quantity_buttons">
                          <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up"></i></div>
                          <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down"></i></div>
                        </div>
                      </div>

                      {/* <!-- Product Color --> */}
                      <ul className="product_color">
                        <li>
                          <span>Color: </span>
                          <div className="color_mark_container"><div id="selected_color" className="color_mark"></div></div>
                          <div className="color_dropdown_button"><i className="fas fa-chevron-down"></i></div>

                          <ul className="color_list">
                            <li><div className="color_mark_1"></div></li>
                            <li><div className="color_mark_2" ></div></li>
                            <li><div className="color_mark_3 "></div></li>
                          </ul>
                        </li>
                      </ul>

                    </div>

                    <div className="product_price">${product?.price}</div>
                    <div className="button_container">
                      <button type="button" className="button cart_button">Add to Cart</button>
                      <div className="product_fav"><i className="fas fa-heart"></i></div>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <!-- Recently Viewed --> */}

      <div className="viewed">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="viewed_title_container">
                <h3 className="viewed_title">Recently Viewed</h3>
                <div className="viewed_nav_container">
                  <div className="viewed_nav viewed_prev"><i className="fas fa-chevron-left"></i></div>
                  <div className="viewed_nav viewed_next"><i className="fas fa-chevron-right"></i></div>
                </div>
              </div>

              <div className="viewed_slider_container">

                {/* <!-- Recently Viewed Slider --> */}

                <div className="owl-carousel owl-theme viewed_slider">

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_1.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$225<span>$300</span></div>
                        <div className="viewed_name"><a href="#">Beoplay H7</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_2.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$379</div>
                        <div className="viewed_name"><a href="#">LUNA Smartphone</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_3.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$225</div>
                        <div className="viewed_name"><a href="#">Samsung J730F...</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_4.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$379</div>
                        <div className="viewed_name"><a href="#">Huawei MediaPad...</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_5.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$225<span>$300</span></div>
                        <div className="viewed_name"><a href="#">Sony PS4 Slim</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Recently Viewed Item --> */}
                  <div className="owl-item">
                    <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                      <div className="viewed_image"><img src="images/view_6.jpg" alt="" /></div>
                      <div className="viewed_content text-center">
                        <div className="viewed_price">$375</div>
                        <div className="viewed_name"><a href="#">Speedlink...</a></div>
                      </div>
                      <ul className="item_marks">
                        <li className="item_mark item_discount">-25%</li>
                        <li className="item_mark item_new">new</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Brands --> */}

      <div className="brands">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="brands_slider_container">

                {/* <!-- Brands Slider --> */}

                <div className="owl-carousel owl-theme brands_slider">

                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_1.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_2.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_3.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_4.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_5.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_6.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_7.jpg" alt="" /></div></div>
                  <div className="owl-item"><div className="brands_item d-flex flex-column justify-content-center"><img src="images/brands_8.jpg" alt="" /></div></div>

                </div>

                {/* <!-- Brands Slider Navigation --> */}
                <div className="brands_nav brands_prev"><i className="fas fa-chevron-left"></i></div>
                <div className="brands_nav brands_next"><i className="fas fa-chevron-right"></i></div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}

      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                <div className="newsletter_title_container">
                  <div className="newsletter_icon"><img src="images/send.png" alt="" /></div>
                  <div className="newsletter_title">Sign up for Newsletter</div>
                  <div className="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
                </div>
                <div className="newsletter_content clearfix">
                  <form action="#" className="newsletter_form">
                    <input type="email" className="newsletter_input" placeholder="Enter your email address" />
                    <button className="newsletter_button">Subscribe</button>
                  </form>
                  <div className="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage