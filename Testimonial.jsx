import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-01.jpg'
import ava02 from '../../assets/images/ava-02.jpg'
import ava03 from '../../assets/images/ava-03.jpg'


const Testimonials =() => {

    const settings= {
        dots: true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">John Don</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">Manisha Rani</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">Abdul Sheik</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, officia! Similique quas consectetur repellendus. Delectus ut odit culpa voluptatem possimus soluta facilis illo obcaecati repellendus provident. Modi cupiditate porro nobis ex aperiam labore neque iure est vitae ad, commodi id accusamus placeat aspernatur facilis!</p>
        </div>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
        </div>
    </Slider>
}