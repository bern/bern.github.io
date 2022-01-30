import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export const BlogPost = ({postMarkdown}: {postMarkdown: string}) => {
    return (
        <>
          <div>
            <Link to="/blog">Back to Blog</Link>
          </div>
          <div>
            <ReactMarkdown className="blogContent">
              {postMarkdown}
            </ReactMarkdown>
          </div>
          <div>
            <Link to="/blog">Back to Blog</Link>
          </div>
        </>
      );
}
