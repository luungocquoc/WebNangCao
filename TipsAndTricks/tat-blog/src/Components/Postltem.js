import TagList from "./TagList";    
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";    
import { isEmptyOrSpaces } from "../Utils/Utils";

const PostList = ({ PostItem })  => {

let imageUrl = isEmptyOrSpaces(postItem.imageUrl)
    ? ProcessingInstruction.env.PUBLIC_URL  +'./images/image_1.jpg.jpg'
    : '${postItem.imageUrl}';

let posstedDate = new Date(postItem.posstedDate);

return (
    <article className="blog-entry mb-4">
        <Card>
            <div className="row g_0">
                <div className="col-md-4">
                    <Card.Img variant="top" src={imageUrl} alt={postItem}/>
                </div>
                <div className="col-md-8">
                    <Card.Body>
                        <Card.Title>{postItem.Title}</Card.Title>
                        <Card.Text>
                            <small className='text-muted'>Tác giả:</small>
                            <span className='tex-primary m-1'>{postItem.author.fullname}</span>
                            <small className='text-muted'>Chủ đề:</small>
                            <span className='tex-primary m-1'>{postItem.category.name}</span>
                        </Card.Text>
                        <Card.Text>{postItem.shortDescription}</Card.Text>
                        <div className="tag-list"><TagList TagList={postItem.tags}/></div>
                        <div className="text-end">
                            <lin to={'/blog/post?'}></lin>k
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    </article>
)
}