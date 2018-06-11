import React, { Component } from 'react';
class Section extends Component {
    constructor(props){
        super(props);
        this.state = {
          data:[
              {id:0,url:'http://placehold.it/700x400',title:'item title',price:'90 usd',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'},
              {id:1,url:'http://placehold.it/700x400',title:'item title',price:'90 usd',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'},
              {id:2,url:'http://placehold.it/700x400',title:'item title',price:'90 usd',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'},
              {id:3,url:'http://placehold.it/700x400',title:'item title',price:'90 usd',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'},
              {id:4,url:'http://placehold.it/700x400',title:'item title',price:'90 usd',detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'},
          ]
        }
    }
    render () {
        return(
            <div className="row">
                {this.state.data.map(data => (
                    <div className="col-lg-4 col-md-6 mb-4" key={data.id}>
                        <div className="card h-100">
                        <a href=""><img className="card-img-top" src={data.url} alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="">{data.title}</a>
                            </h4>
                            <h5>{data.price}</h5>
                            <p className="card-text">{data.detail}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                        </div>
                    </div>
                    // <div className="row itemList"  key={data.code}>
                    //     <p className="col-md-1 code">{data.code}</p>
                    //     <p className="col-md-4 company">{data.company}</p>
                    //     <p className="col-md-1 price">{data.price}</p>
                    //     <p className="col-md-2 listRight value">{Math.floor(data.volume*data.price)}</p>
                    //     <p id = {data.id} className="col-md-2 listRight">{parseFloat(data.change).toFixed(2)}</p>
                    //     <p className="col-md-2 listRight">{parseFloat(data.perChange).toFixed(2)}%</p>
                    // </div>
                ))}
                
              </div>

        )
    }
 
}
export default Section;