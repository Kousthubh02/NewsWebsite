import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import { PropTypes } from 'prop-types';

export class News extends Component {
static defaultProps={
    country:'in',
    pageSize:8,
    category:"general"
    
}
static propTypes={
    country:PropTypes.string,
    pageSize: PropTypes.string,
    category:PropTypes.string,
}

    articles=[
        {
          "source": { "id": "talksport", "name": "TalkSport" },
          "author": "Jackson Cole",
          "title": "Freddie Flintoff airlifted to hospital following car crash while filming Top Gear, England cricket...",
          "description": "llllllllllllllllllllll dddddddddddddddddddddddd eeeeeee",
          "url": "https://talksport.com/sport/cricket/1276705/freddie-flintoff-airlifted-hospital-car-crash-top-gear/",
          "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2015/10/ff.jpg?strip=all&quality=100&w=700&h=420&crop=1",
          "publishedAt": "2022-12-13T22:16:01Z",
          "content": "Freddie Flintoff was airlifted to hospital following a car crash during filming for Top Gear in Surrey on Monday. \r\nThe England cricket legend was shooting an episode of the BBC series at Dunsfold Pa… [+1980 chars]"
        },
        {
          "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
          "author": "Avani Dias, Som Patidar",
          "title": "India's gender pay gap is among the worst in the world. But the women's cricket team hopes to change that",
          "description": "India is the second country in the world to introduce pay parity for its men's and women's cricket teams. Now there are calls for Australia to do the same.",
          "url": "http://www.abc.net.au/news/2022-12-14/india-womens-cricket-team-will-now-be-paid-same-as-men/101763840",
          "urlToImage": "https://live-production.wcms.abc-cdn.net.au/57f770789f82ee80dc019c26d1bd90a4?impolicy=wcms_crop_resize&cropH=1382&cropW=2458&xPos=2&yPos=158&width=862&height=485",
          "publishedAt": "2022-12-13T19:01:53Z",
          "content": "India's women's cricket captain Harmanpreet Kaur is a household name who has smashed international records, but like most women in the world, she's been underpaid.\r\nLast week, when Kaur led her team … [+9643 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    constructor(props){
        super(props);
        console.log("hello i am a constructor")
        this.state={
            articles:this.articles,
            loading:false,
            page:1
            
        }
        document.title=`${this.props.category}-NewsMonkey`;
    }

    

    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b40af49bb3c4ec3b6b262b2019bbfae&page=1&pagesize=${this.props.pageSize}`
        // let data=await fetch(url);
        // let parsedData=await data.json()
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
      this.updateNews()
      }
      // a functon to update the news
      async updateNews(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b40af49bb3c4ec3b6b262b2019bbfae&page=${this.state.page}&pagesize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({
          articles: parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false
      })
      
  
      }

     handlePrevClick=async()=>{   
      console.log("prev")
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b40af49bb3c4ec3b6b262b2019bbfae&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
      // this.setState({loading:true})
      // let data=await fetch(url);
      // let parsedData=await data.json()
      // console.log(parsedData);
      // this.setState({
      //     page:this.state.page -1,
      //     articles: parsedData.articles,
      //     loading:false
      // })
      this.setState({page: this.state.page-1});
      this.updateNews();
    
    }
     handleNextClick=async()=>{
      console.log("next")
    // console.log("next")
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b40af49bb3c4ec3b6b262b2019bbfae&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let parsedData=await data.json()
  //   this.setState({
  //     page:this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading:false
  // })
  this.setState({page: this.state.page+1})
  this.updateNews()


    
    
    
}
  render(){
    return (
      <div className='container my-4 '>
       {/* next button and prev buttons */}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      {/* heading */}
        <h2 className='text-center'>NewsApp : Top {this.props.category} headlines </h2>
        {this.state.loading&&<Spinner/>}
        <div className="row">
        {!this.state.loading &&  this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              {/* newsitem component */}
            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
        })} 
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
  
}

export default News
