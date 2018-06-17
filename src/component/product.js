import React, {Component} from 'react';

class ProductList extends Component {
	constructor(props){
		super(props);
		this.state= {
			product : [
				{id:0,url:'img/ANH DUONG 1_preview.jpeg',des:'Mr Duong - GeMek Premium - Thien Duong Bao Son'},
				{id:1,url:'img/ANH HUAN_preview.jpeg',des:'Mr Huan 920 - Vinaconex2 - Kim Van - Kim Lu'},
				{id:2,url:'img/ANH THONG_preview.jpeg',des:'Mr Thong - Imperia - Nguyen Tuan'},
				{id:3,url:'img/BIDV TOWER_preview.jpeg',des:'BIDV Tower - 197 Tran Quang Khai'},
				{id:4,url:'img/BORNGA RESTAURANT_preview.jpeg',des:'BORNGA RESTAURANT - My Dinh - Ha Noi'},
				{id:5,url:'img/DAEHAN MOTORS OFFICE_preview.jpeg',des:'DAEHAN MOTORS OFFICE - 26FL - Handeco tower'},
				{id:6,url:'img/KORYO RESTAURANT_preview.jpeg',des:'KORYO RESTAURANT - Trung Hoa - Cau Giay'},
				{id:7,url:'img/SERIM VIETNAM_preview.jpeg',des:'Công ty TNHH SERIM VIET NAM'},
				{id:8,url:'img/VAN XUAN OFFICE_preview.jpeg',des:'VAN XUAN OFFICE - Phan Trong Tue - Thanh Tri'},
				{id:9,url:'img/IPHONE SHOP_preview.jpeg',des:'I Garden - 10 Ton That Tung'},
			],
			recomendItem: [
				{id:0,url:'img/ban1.jpg'},
				{id:1,url:'img/ban2.jpg'},
				{id:2,url:'img/ban3.jpg'},
			],
			recomendItem1: [
				{id:0,url:'img/tu1.jpg'},
				{id:1,url:'img/ghe1.jpg'},
				{id:2,url:'img/tu2.jpg'},
			],
			chair : [
				{id:0,url:'img/ghe1.jpg'},
				{id:1,url:'img/ghe2.jpg'},
				{id:2,url:'img/ghe3.jpg'}
			],
			table : [
				{id:0,url:'img/ban1.jpg'},
				{id:1,url:'img/ban2.jpg'},
				{id:2,url:'img/ban3.jpg'},
			],
			cabinet : [
				{id:0,url:'img/tu1.jpg'},
				{id:1,url:'img/tu2.jpg'},
				{id:2,url:'img/tu3.jpg'},
			]
		}
	}
    render() {
        return(
            <div className="col-sm-9 padding-right">
					<div className="features_items">
						<h2 className="title text-center">Sản Phẩm Khách Hàng</h2>
						{this.state.product.map( data => (
								<div className="col-sm-12" key={data.id}>
									<div className="product-image-wrapper">
										<div className="single-products">
												<div className="productinfo text-center">
													<img className="myImg" src={data.url} alt="" />
												</div>
												<div className="product-overlay">
													<div className="overlay-content">
														<h2>{data.des}</h2>
													</div>
												</div>
										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href=""><i className="fa fa-plus-square"></i>Thêm vào DS</a></li>
												<li><a href=""><i className="fa fa-plus-square"></i>So Sánh</a></li>
											</ul>
										</div>
									</div>
								</div>
							)
						)}
					</div>
					<h2 className="title text-center">Cửa hàng nội thất</h2>
					<div className="category-tab">
						<div className="col-sm-12">
							<ul className="nav nav-tabs">
								<li className="active"><a href="#tshirt" data-toggle="tab">Bàn</a></li>
								<li><a href="#blazers" data-toggle="tab">Ghế</a></li>
								<li><a href="#sunglass" data-toggle="tab">Tủ</a></li>
								{/* <li><a href="#kids" data-toggle="tab">Phụ kiện</a></li> */}
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade active in" id="tshirt" >
								{this.state.table.map(data => (
									<div className="col-sm-3" key={data.id}>
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src={data.url} alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div>
								))}
							</div>
							
							<div className="tab-pane fade" id="blazers" >
								{this.state.chair.map(data => (
										<div className="col-sm-3" key={data.id}>
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src={data.url} alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
								))}								
							</div>
							
							<div className="tab-pane fade" id="sunglass" >
								{this.state.cabinet.map(data => (
										<div className="col-sm-3" key={data.id}>
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src={data.url} alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
												</div>
												
											</div>
										</div>
									</div>
								))}		
								
							</div>
							
							<div className="tab-pane fade" id="kids" >

								{/* <div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="img/ban2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
											</div>
											
										</div>
									</div>
								</div> */}
							
							</div>
							
						</div>
					</div>
					
					<div className="recommended_items">
						<h2 className="title text-center">Sản phẩm bán chạy</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">

									{this.state.recomendItem.map(data => (
										<div className="col-sm-4" key ={data.id}>
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src={data.url} alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
												</div>
											</div>
										</div>
									))}
									
								</div>
								<div className="item">	

									{this.state.recomendItem1.map(data => (
										<div className="col-sm-4" key ={data.id}>
											<div className="product-image-wrapper">
												<div className="single-products">
													<div className="productinfo text-center">
														<img src={data.url} alt="" />
														<h2>$56</h2>
														<p>Easy Polo Black Edition</p>
														<a href="" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
													</div>
												</div>
											</div>
										</div>
									))}
									
								</div>
							</div>
							<a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							</a>
							<a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							</a>			
						</div>
					</div>
					
				</div>
        )
    }
}

export default ProductList;