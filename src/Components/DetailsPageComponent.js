import { Layout, Menu } from 'antd';
import { Row } from 'antd';
import { Input } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import movies from '../movies';
import { Carousel } from 'antd';
import { StarFilled} from '@ant-design/icons';
const { Header, Content } = Layout;
const { Search } = Input;

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#1f2e2e',
};

function DetailsPageComponent()
{
    let { id } = useParams();

    let data = movies.movies.filter(item=>{
        return item.imdbID === id
    })
    console.log(data)
    return (
        <div>
            <Layout>
                <Header className="header">
                <div className="logo" />
                </Header>
            </Layout>
            <Layout>
                <Content style={{ backgroundColor:"#404040" ,padding: '0 50px', marginTop: 64 }}>
                   
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380}}>
                        <img style={{float:'left'}} src={data[0].Poster}></img>
                    </div>
                    <div style={{float:"left",marginLeft:"30px",marginTop:"-290px",textAlign:"left",width:"310px"}}>
                        <h1 style={{fontSize:"3em",color:"white"}}>{data[0].Title}</h1>
                        <div>
                            <h4 style={{fontSize:"16px",color:"white"}}>Language: {data[0].Language}</h4>
                            <h4 style={{fontSize:"16px",color:"white"}}>Location: {data[0].Location}</h4>
                            <h4 style={{float:"left",color:"white"}} >Sound Effects:</h4>{data[0].SoundEffects.map((item,i)=>(<h4 style={i==data[0].SoundEffects-1 ? {float:"left",color:"white"}:{float:"",color:"white"}}>{item}{i==data[0].SoundEffects.length-1 ? "":", "}</h4>))}
                            <h4 style={{fontSize:"16px",color:"white"}}>Status: {data[0].listingType}</h4>
                            <h4 style={{color:"white",float:"left"}}>IMDb Rating: {data[0].imdbRating}</h4>
                            <StarFilled key="setting" style={{color:"yellow"}}/>,
                        </div>
                    </div>
                </Content>
                <Content>
                    <div  style={{textAlign:"left",fontSize:"2em",marginLeft:"90px",marginTop:"20px"}}>
                        About the Movie
                        <div style={{fontSize:"20px"}}>
                            {data[0].Plot}
                        </div>
                    </div>
                </Content>
                <Content>
                    <div  style={{textAlign:"left",fontSize:"2em",marginLeft:"90px",marginTop:"20px"}}>
                        Stills from the Movie
                        <div>
                        {data[0].Stills.map(item=>(
                            <img src={item} style={{width:"500px",marginLeft:"20px",marginTop:"20px"}}></img>
                        ))}
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default DetailsPageComponent