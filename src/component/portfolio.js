import React, {Component} from 'react';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataImage: [ // dữ liệu ảnh
                {
                    src: "img/product1.jpeg", // duong dan
                    alt: "Gemek Premium Thiên đường Bảo Sơn - Mr Dương", // mo ta
                    ProjectName: 'Gemek Premium Thiên đường Bảo Sơn', //ten du an
                    classFilter: 'home'// phan loai
                },
                {
                    src: "img/product2.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'home'
                },
                {
                    src: "img/product3.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'home'
                },
                {
                    src: "img/product4.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product5.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product7.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product8.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product9.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/product10.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product11.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/product12.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'office'
                },
                {
                    src: "img/product13.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/product14.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'home'
                },
                {
                    src: "img/product16.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/product17.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/product18.jpeg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design1.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design2.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design3.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design4.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design5.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/design6.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'restaurant'
                },
                {
                    src: "img/3d.jpg",
                    alt: "Project Title",
                    ProjectName: 'Project Name2',
                    classFilter: 'home'
                }
            ]
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
