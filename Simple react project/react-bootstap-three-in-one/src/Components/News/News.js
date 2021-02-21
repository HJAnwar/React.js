import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    const { News, urlToImage, url, title, description, publishedAt, content } = props.news;
    console.log(News);
    return (
        <div className='newsStyle'>
            {/* <Card >
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                
                    <Card.Title>{title}</Card.Title>
                    <Card.Text></Card.Text>
                   
                    <Button variant="primary"> <a href={url}></a> Go somewhere</Button>
                </Card.Body>
            </Card> */}

            <Card style={{ width: '55rem' }}>
            <Card.Img variant="top" src={urlToImage} />
                <Card.Header>{content}<p>{publishedAt}</p></Card.Header>
                
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default News;