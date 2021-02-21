import React from 'react';
import './News.css';

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const News = (props) => {
    const { title, urlToImage, description, publishedAt,url } = props.data;
    console.log(title);
    return (
        <div className="newsStyle">
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="240"
                        image={urlToImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title} </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                        <br/>
                    <p>{publishedAt}</p>
                    </CardContent>
                    
                </CardActionArea>
                
                <CardActions>
                    
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        <a href={url}></a>
                        Learn More
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default News;