import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
		
            <div className="footer-widget">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="companyinfo">
                                <a href="index.html"><img id ="logoFooter" src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>Dịch vụ</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="">Tư vấn trực tuyến</a></li>
                                    <li><a href="">Liên hệ</a></li>
                                    <li><a href="">Trạng thái đơn hàng</a></li>
                                    <li><a href="">Đổi địa điểm</a></li>
                                    <li><a href="">FAQ’s</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-sm-offset-1">
                            <div className="single-widget">
                                <h2>Viet Hai Contruction</h2>
                                <form action="#" className="searchform">
                                    <input type="text" placeholder="Your email address" />
                                    <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                                    <p>Hãy để lại Email <br />chúng tôi sẽ liên hệ với bạn sớm nhất có thể</p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="address">
                                <img src="img/map.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <p className="pull-left">Copyright © 2018 Viet Hai Contruction . All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
        )
    }
}

export default Footer;