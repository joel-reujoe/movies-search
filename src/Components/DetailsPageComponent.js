import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StarFilled} from '@ant-design/icons';
import { getMovieDetails } from '../Utitilities/Utitlites';
const { Header, Content } = Layout;

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
    const [data, setData] = useState('data')
    useEffect(()=>{
        getMovieDetails(id).then(response=>{
            setData(response)
        })
    },[])

    console.log(data)

    if(data==='data'){
        return(
            <div>
                Loading....
            </div>
        )
    }else{

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
                        <img style={{float:'left'}} src={data.Poster}></img>
                    </div>
                    <div style={{float:"left",marginLeft:"30px",marginTop:"-290px",textAlign:"left",width:"310px"}}>
                        <h1 style={{fontSize:"3em",color:"white"}}>{data.Title}</h1>
                        <div>
                            <h4 style={{fontSize:"16px",color:"white"}}>Language: {data.Language}</h4>
                            <h4 style={{fontSize:"16px",color:"white"}}>Location: {data.Location}</h4>
                            <h4 style={{float:"left",color:"white"}} >Sound Effects:</h4>{data.SoundEffects.map((item,i)=>(<h4 style={i==data.SoundEffects-1 ? {float:"left",color:"white"}:{float:"",color:"white"}}>{item}{i==data.SoundEffects.length-1 ? "":", "}</h4>))}
                            <h4 style={{fontSize:"16px",color:"white"}}>Status: {data.listingType}</h4>
                            <h4 style={{color:"white",float:"left"}}>IMDb Rating: {data.imdbRating}</h4>
                            <StarFilled key="setting" style={{color:"yellow"}}/>,
                        </div>
                    </div>
                </Content>
                <Content>
                    <div  style={{textAlign:"left",fontSize:"2em",marginLeft:"90px",marginTop:"20px"}}>
                        About the Movie
                        <div style={{fontSize:"20px"}}>
                            {data.Plot}
                        </div>
                    </div>
                </Content>
                <Content>
                    <div  style={{textAlign:"left",fontSize:"2em",marginLeft:"90px",marginTop:"20px",marginBottom:"90px"}}>
                        Stills from the Movie
                        <div>
                        {data.Stills.map(item=>(
                            <img src={item} style={{width:"500px",marginLeft:"20px",marginTop:"20px"}}></img>
                        ))}
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
    }
}

export default DetailsPageComponent