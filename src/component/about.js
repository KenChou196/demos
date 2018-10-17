import React, { Component } from 'react';
export default class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Our Story</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-12 text-center"> <img src="../img/about.jpg" className="img-responsive" alt="" /> </div>
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <h3>Về Chúng Tôi</h3>
                                <p>Việt Hải Contructions có nhiều năm kinh nghiệm trong lĩnh vực xây dựng và thi công trang trí nội thất nhà hàng, văn phòng, chung cư
                                </p>
                                <h3>Vì sao chọn chúng tôi</h3>
                                <p>Đội ngũ kiến trúc sư và nhân viên nhiệt huyết và lành nghề, được đào tạo bài bản và có kinh nghiệm thực hiện các công trình nước ngoài. Sản phẩm 
                                của chúng tôi được sản xuất trên nhà xưởng đầy đủ trang thiết bị, kĩ thuật tiên tiến nhất và luôn đạt được các tiêu thẩm mỹ theo yêu cầu của khách hàng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
