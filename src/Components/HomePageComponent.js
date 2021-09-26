import { Layout, Menu } from 'antd';
import MoviesCards from './MovieCards';
import movies from '../movies';
import { Row } from 'antd';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import Fuse from "fuse.js";
import { Dropdown, Button,Select } from 'antd';


const { Header, Content } = Layout;
const { Search } = Input;

const { Option } = Select;




class HomePageComponent extends React.Component{

 
   
  constructor()
  {
    super()
    this.state={
      sortOrder:"default",
      filterByLanguage:"default",
      filterByLocation:"default",
      currentData:[...movies.movies],
      sortText:"Sort",
      filterByLanguageText:"Filter By Language",
      filterByLocationText:"Filter By Location",
      fuse:new Fuse(movies.movies, {keys: ["Title"],})
    }
  }

  
   
    getFilterByLangauge(filterByLanguage){
      let data = [...movies.movies];
      console.log(filterByLanguage)
      if(filterByLanguage==="default")
      {
        this.setState({
          currentData:[...movies.movies],
          filterByLanguageText:"Filter By Language"
        })
        return;
      }
      data = data.filter((item)=>{
        return item.Language===filterByLanguage
      })
      this.setState({
        currentData:data,
        filterByLanguageText:filterByLanguage
      })
    }

    getFilterByLocation(filterByLocation){
      let data = [...movies.movies];
      if(filterByLocation==="default")
      {
        this.setState({
          currentData:[...movies.movies],
          filterByLocationText:"Filter by Location"
        })
        return;
      }
      data = data.filter((item)=>{
        return item.Location===filterByLocation
      })
      this.setState({
        currentData:data,
        filterByLocationText:filterByLocation
      })
    }

    getSortOrder(sortOrder)
    {
      let data = this.state.currentData;
      if(sortOrder==="lowToHigh")
      {
        data.sort((a,b)=>{
          return a.imdbRating - b.imdbRating
        });
        this.setState({
          currentData:data,
          sortText:"Low to High Rating"
        })
      }
      if(sortOrder==="highToLow")
      {
        data.sort((a,b)=>{
          return b.imdbRating - a.imdbRating
        });
        this.setState({
          currentData:data,
          sortText:"High to Low Rating"
        })
      }

      if(sortOrder === "default")
      {
        this.setState({
          currentData:[...movies.movies],
          sortText:"Sort"
        })
      }
      
    }

    onSort(sortOrder){
      this.setState({
        sortOrder:sortOrder
      })
      this.getSortOrder(sortOrder)
    }

    onFilterByLanguage(filterByLanguage){
      console.log(filterByLanguage)
      this.setState({
        filterByLanguage:filterByLanguage
      })
      this.getFilterByLangauge(filterByLanguage)
    }

    onFilterByLocation(filterByLocation){
      this.setState({
        filterByLocation:filterByLocation
      })
      this.getFilterByLocation(filterByLocation)
    }

    onSearch(pattern)
    {
      if(pattern){
        let result = this.state.fuse.search(pattern)
        let data = []
        result.forEach(item=>{
          data.push(item.item)
        })
        console.log(data)
        this.setState({
          currentData:data
        })
      }else{
        this.setState({
          currentData:[...movies.movies]
        })
      }
    }


    render(){
     
      let languages = []
      
      let location = []
      
      const menuSort = (
        <Menu>
          <Menu.Item onClick={()=>{this.onSort("lowToHigh")}}>
            <a target="_blank" rel="noopener noreferrer">
              Low to High Rating
            </a>
          </Menu.Item>
          <Menu.Item onClick={()=>{this.onSort("highToLow")}} >
            <a target="_blank" rel="noopener noreferrer">
              High to Low Rating
            </a>
          </Menu.Item>
          <Menu.Item onClick={()=>{this.onSort("default")}} >
            <a target="_blank" rel="noopener noreferrer">
              Remove Sort
            </a>
          </Menu.Item>
        </Menu>
      ); 
    
      

  
      movies.movies.map(item=>{
        if(!languages.includes(item.Language)){
        languages.push(item.Language)
        }
      })

      movies.movies.map(item=>{
        if(!location.includes(item.Location)){
        location.push(item.Location)
        }
      })
      
      const menuFilterLanguage = (
        <Menu>
          {
          languages.map(item=>(
            <Menu.Item value={item} label={item} onClick={()=>{this.onFilterByLanguage(item)}}>
              {item}
            </Menu.Item>))
          }
          <Menu.Item onClick={()=>{this.onFilterByLanguage("default")}}>
            <a target="_blank" rel="noopener noreferrer">
              Remove Filter
            </a>
          </Menu.Item>
        </Menu>
      );
      
      const menuFilterLocation = (
        <Menu>
          {
          location.map(item=>(
            <Menu.Item value={item} label={item} onClick={()=>{this.onFilterByLocation(item)}}>
              {item}
            </Menu.Item>))
          }
          <Menu.Item  onClick={()=>{this.onFilterByLocation("default")}}>Remove Filter</Menu.Item>
        </Menu>
      );
        
        return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Row gutter={[10, 50]}>
                <div style={{marginBottom:"10px",marginTop:"20px",marginLeft:"35px",width:"600px"}}>
                <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(e)=>this.onSearch(e)}
                />
                </div>
                <div style={{marginBottom:"10px",marginTop:"20px",marginLeft:"20px"}}>
                <Dropdown overlay={menuSort} placement="topCenter" arrow>
                  <Button style={{width:"200px",height:"42px",fontSize:"20px",textAlign:"left"}}>
                    {this.state.sortText}
                  </Button>
                </Dropdown>
                </div>
                <div style={{marginBottom:"10px",marginTop:"20px",marginLeft:"20px"}}>
                <Dropdown overlay={menuFilterLanguage} placement="topCenter" arrow>
                  <Button style={{width:"200px",height:"42px",fontSize:"20px",textAlign:"left"}}>
                    {this.state.filterByLanguageText}
                  </Button>
                </Dropdown>
                </div>
                <div style={{marginBottom:"10px",marginTop:"20px",marginLeft:"20px"}}>
                <Dropdown overlay={menuFilterLocation} placement="topCenter" arrow>
                  <Button style={{width:"200px",height:"42px",fontSize:"20px",textAlign:"left"}}>
                    {this.state.filterByLocationText}
                  </Button>
                </Dropdown>
                </div>
            </Row>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
                <Row gutter={[16, 16]}>
                {this.state.currentData.map((objectItem)=>(
                    <a style={{marginBottom:"10px",marginLeft:"20px"}} href={`details/${objectItem.imdbID}`}>
                    <MoviesCards poster={objectItem.Poster} title={objectItem.Title} ratings={objectItem.imdbRating} language={objectItem.Language} location={objectItem.Location}/>
                    </a>
                ))}
                </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>)
  }
}
export default HomePageComponent