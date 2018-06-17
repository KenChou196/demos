import React, { Component } from 'react';

class Slider extends Component {
    render(){
        return(
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                                    <li data-target="#slider-carousel" data-slide-to="3"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-sm-6">
                                            <h2>Chuyên thiết kế nội thất và thi công xây dựng</h2>
                                            <p>Đội ngũ kiến trúc sư được đào tạo chuyên nghiệp, giàu kinh nghiệm. </p>
                                            <button type="button" className="btn btn-default get">Xem thêm</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="img/banner1.jpeg" className="girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h2>Tư vấn miễn phí</h2>
                                            <p>Tư vấn thiết kế nội thất và kiến trúc xây dựng phù hợp với nhu cầu.</p>
                                            <button type="button" className="btn btn-default get">Xem thêm</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="img/banner6.png" className="girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h2>Thi công chuyên nghiệp</h2>
                                            <p>Đội ngũ công nhân thi công lành nghề, tay nghề cao.</p>
                                            <button type="button" className="btn btn-default get">Xem thêm</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="img/banner2.jpg" className="girl img-responsive" alt="" />
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h2>Nội thất hiện đại</h2>
                                            <p>Kho nội thất phong phú và hiện đại.</p>
                                            <button type="button" className="btn btn-default get">Xem thêm</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="img/banner3.jpg" className="girl img-responsive" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider;