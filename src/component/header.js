import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
            <header id="header">

                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href=""><i className="fa fa-phone"></i> +84 973 48 15 56</a></li>
                                        <li><a href=""><i className="fa fa-envelope"></i> Mr.Quang@viethai.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="">
                                    <a href="index.html"><img id ="logo" src="./img/logo.png" alt="" /></a>
                                    <h1 className="slogan">Công ty TNHH Việt Hải </h1>
                                    <h4 className="desc"> Chuyên thiết kế, thi công xây dựng, trang trí nội thất </h4>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="shop-menu pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href=""><i className="fa fa-user"></i> Tài khoản</a></li>
                                        <li><a href=""><i className="fa fa-star"></i> Ưa thích</a></li>
                                        <li><a href=""><i className="fa fa-crosshairs"></i> Kiểm tra</a></li>
                                        <li><a href=""><i className="fa fa-shopping-cart"></i> Giỏ hàng</a></li>
                                        <li><a href=""><i className="fa fa-lock"></i> Đăng nhập</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><a href="index.html" className="active">Trang Chủ</a></li>
                                        <li className="dropdown"><a href="">Cửa Hàng<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><a href="">Sản Phẩm</a></li>
                                                <li><a href="">Chi tiết sản phẩm</a></li> 
                                                <li><a href="">Kiểm tra đơn hàng</a></li> 
                                                <li><a href="">Giỏ hàng</a></li> 
                                                <li><a href="">Đăng nhập</a></li> 
                                            </ul>
                                        </li> 
                                        <li className="dropdown"><a href="">Tin tức<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><a href="">Danh sách tin tức</a></li>
                                                <li><a href="">Tin đơn</a></li>
                                            </ul>
                                        </li> 
                                        <li><a href="contact-us.html">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="search_box pull-right">
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
        )
    }
}

export default Header;