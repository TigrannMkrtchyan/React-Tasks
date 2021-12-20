import "./FooterBlogPost.css"

const FooterBlogPost = ({link,topic,text}) => {
    return (
        <div className="FooterBlogPost">
            <img className="FooterBlogPostsimg" src={link}></img>
            
            <div><span className="FooterBlogPostspan">{topic}</span><p>{text}</p></div>
        </div>
    )
}

export default FooterBlogPost
