import React, {Component} from 'react';

class LeftBar extends Component {
    render() {
        return(
            <div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Danh mục</h2>
						<div className="panel-group category-products" id="accordian">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Nội thất
										</a>
									</h4>
								</div>
								<div id="sportswear" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a href="">Nội thất gia đình </a></li>
											<li><a href="">Nội thất văn phòng </a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#mens">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Thi công xây dựng
										</a>
									</h4>
								</div>
								<div id="mens" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a href="">Nhà ở</a></li>
											<li><a href="">Văn phòng</a></li>
											<li><a href="">Sửa chữa</a></li>
											<li><a href="">Tư vấn</a></li>
										</ul>
									</div>
								</div>
							</div>

						</div>
					
						<div className="brands_products">
							<h2>Sản Phẩm</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
									<li><a href=""> <span className="pull-right">(50)</span>Bàn</a></li>
									<li><a href=""> <span className="pull-right">(56)</span>Ghế</a></li>
									<li><a href=""> <span className="pull-right">(27)</span>Tủ</a></li>
									<li><a href=""> <span className="pull-right">(32)</span>Đèn</a></li>
									<li><a href=""> <span className="pull-right">(5)</span>Linh Phụ kiện</a></li>
									<li><a href=""> <span className="pull-right">(9)</span>Dịch vụ</a></li>	
								</ul>
							</div>
						</div>
					
					</div>
				</div>
        )
    }
}

export default LeftBar;