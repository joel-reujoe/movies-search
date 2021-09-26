import 'antd/dist/antd.css' 
import { Card} from 'antd';
import { StarFilled,ReadOutlined} from '@ant-design/icons';
import React from 'react';
const { Meta } = Card;

class MoviesCards extends React.Component{
render(){
    return (
        <Card
        style={{ width: 300 }}
        cover={
        <img
            alt="example"
            src={this.props.poster}
        />
        }
        actions={[
        <StarFilled key="setting" style={{color:"yellow"}}/>,
        <Meta description={this.props.ratings}/>,
        <Meta description={this.props.language}/>,
        <Meta description={this.props.location}/>,
        <ReadOutlined key="edit"  />,
        ]}>
        <Meta
        title={this.props.title}
        />
        </Card>
    )
    }
}

export default MoviesCards