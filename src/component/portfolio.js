import React, {Component} from 'react';
import dataImage from './dataImage';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImage: dataImage
        }
    }

    portfolioItem() {
        return this.state.dataImage.map((value, index) => {
            // console.log('value is =========> ', value)
            return (
                <div className={`col-sm-6 col-md-4 col-lg-4 ${value.classFilter}`} key={index}>
                    <div className="portfolio-item">
                        <div className="hover-bg"><a href={`${value.src}`} title={value.alt}
                                                     data-lightbox-gallery="gallery1">
                            <div className={`hover-text`}>
                                <h4>{value.ProjectName}</h4>
                            </div>
                            <img src={`${value.src}`} className="img-responsive" alt={value.alt}/> </a></div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Các Dự Án đã thực hiện</h2>
                        <hr/>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="" data-filter="*" className="active">Tất cả</a></li>
                                    <li><a href="" data-filter=".home">Nhà ở</a></li>
                                    <li><a href="" data-filter=".office">Văn Phòng</a></li>
                                    <li><a href="" data-filter=".restaurant">Nhà Hàng - Khách Sạn</a></li>
                                    <li><a href="" data-filter=".accessories">Phụ kiện, thiết bị, nội thất</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {this.portfolioItem()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
