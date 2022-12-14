import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
   let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
        <div className="card my-3" style={{width:"18 rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toUTCString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary brn-sm">Read More</a>
        </div>
      </div>
    )
  }
 
}

export default NewsItem
