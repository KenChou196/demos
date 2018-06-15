import React, { Component } from 'react';
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 1, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 2, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 3, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 4, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 5, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 6, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 7, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 8, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 9, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 10, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
                { id: 11, url: 'http://placehold.it/700x400', title: 'item title', price: '90 usd', detail: 'Lorem ipsum ' },
            ]
        }
    }
    render() {
        return (
            // <div className="row">
            //     {this.state.data.map(data => (
            //         <div className="col-lg-2 col-md-2" key={data.id}>
            //             <div className="">
            //             <a href=""><img className="" src={data.url} alt=""/></a>
            //             <div className="">
            //                 <h4 className="">
            //                 <a href="">{data.title}</a>
            //                 </h4>
            //                 <h5>{data.price}</h5>
            //                 <p className="">{data.detail}</p>
            //             </div>
            //             <div className="">
            //                 <small className="">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            //             </div>
            //             </div>
            //         </div>
            //     ))}
            // </div>
            <div className="row">
                {this.state.data.map(data => (
                    <div className="col-lg-2 col-md-2" key={data.id}>
                        <div className="card card-1">
                            <div className="">
                                <a href="">img here</a>
                                <div className="">
                                    <h4 className="">
                                        <a href="">{data.title}</a>
                                    </h4>
                                    <h5>{data.price}</h5>
                                    <p className="">{data.detail}</p>
                                </div>
                                <div className="">
                                    <small className="">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}
export default Section;