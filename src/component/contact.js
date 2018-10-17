import React, { Component } from 'react';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImage: [
                { src: "img/product1.jpeg", alt: "Project Title", ProjectName: 'Project Name1' },
                { src: "img/product2.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product3.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product4.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product5.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product6.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product7.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product8.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product9.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product10.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product11.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product12.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product13.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product13.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product16.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product17.jpeg", alt: "Project Title", ProjectName: 'Project Name2' },
                { src: "img/product18.jpeg", alt: "Project Title", ProjectName: 'Project Name2' }
            ]
        }
    }
    portfolioItem() {
        return this.state.dataImage.map((value, index) => {
            console.log('value is =========> ', value)
            return (
                <div className="col-sm-6 col-md-4 col-lg-4 residential" key={index}>
                    <div className="portfolio-item">
                        <div className="hover-bg"> <a href={`${value.src}`} title={value.alt} data-lightbox-gallery="gallery1">
                            <div className="hover-text">
                                <h4>{value.ProjectName}</h4>
                            </div>
                            <img src={`${value.src}`} className="img-responsive" alt={value.alt} /> </a> </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Liên Hệ với chúng tôi</h2>
                        <hr />
                        <p>Hãy nhấc máy liên hệ với chúng tôi ngay để được sự tư vấn và thiết kế chuyên nghiệp, hiện đại và "chất" nhất </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Thông tin liên hệ</h3>
                        <div className="contact-item"> <span>Địa chỉ</span>
                            <p>Nguyễn Quảng,<br /> Trụ sở chính : Số 18 phố Nguyễn Lương Bằng, khu 8, Phường Việt Hoà, Thành phố Hải Dương, Tỉnh Hải Dương, Việt Nam</p>
                        </div>
                        <div className="contact-item"> <span>Email</span>
                            <p>viethaiconstruction@gmail.com</p>
                        </div>
                        <div className="contact-item"> <span>Đi Động</span>
                            <p> 0973 481 556 -- 0934 540 128 -- 0936 724 559</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>Để lại tin nhắn cho chúng tôi</h3>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Tên" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Nội dung tin nhắn" required></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-custom btn-lg">Gửi tin nhắn</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
