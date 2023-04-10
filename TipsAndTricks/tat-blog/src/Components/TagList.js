import { Link } from "react-router-dom";

const  TagList = ({ TagList}) =>{
    if (TagList && Array.isArray(TagList) && TagList.length > 0)
    return (
        <>
        {TagList.map((item, indexs) => {
            return (
                <Link to={'/blog/tag?slug=${item.name}'}
                key={item.name}>
                    {item.name}
                </Link>
            )
        })}
        </>
    );
    else
        return(
            <></>
        );
};

export default TagList;