import ReactMarkdown from 'react-markdown';
import { Link, Route, Routes, useMatch, useParams } from 'react-router-dom';
import { IVSPost, IVSPostMetadata } from './Blog/Posts/IVSPost';
import { TechnicalInterviewPost, TechnicalInterviewPostMetadata } from './Blog/Posts/TechnicalInterviewPost';
import { Layout } from './Layout';

const BlogPosts = [
    IVSPostMetadata,
    TechnicalInterviewPostMetadata
];

export function Blog() {
    const { postName } = useParams();

    const postNameToComponent = new Map<string, JSX.Element>();
    postNameToComponent.set(IVSPostMetadata.key, <IVSPost/>);
    postNameToComponent.set(TechnicalInterviewPostMetadata.key, <TechnicalInterviewPost/>);
    

    if (postName && postNameToComponent.get(postName)) {
        return postNameToComponent.get(postName)!;
    }

    return (
        <Layout>    
            <div>
                Here is some writing I've done in the past:
                {BlogPosts.map((blogPostMetadata) => (
                    <p>
                        {blogPostMetadata.date.toLocaleDateString('en-US')} -{' '}
                        <Link to={blogPostMetadata.key}>
                            {blogPostMetadata.name}
                        </Link>
                    </p>
                ))}
            </div>
        </Layout>
    );
}
