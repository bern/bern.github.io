interface IProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl?: string;
}

// highlight color: #4ecdc4

export const ProjectCard = (props: IProjectCardProps) => {
    const { title, description, imageUrl, linkUrl } = props;

    const cardContent = (
        <div className="projectCard" style={{ backgroundImage: `url("${imageUrl}")` }}>
            <div style={{ backgroundColor: 'rgba(12,13,20,0.6)', color: '#fafafa', padding: '8px 8px'}}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{title}</div>
                <div style={{ fontSize: '1.5rem' }}>{description}</div>
            </div>
        </div>
    );

    return (
        <div className="projectCardContainer">
            { linkUrl ? (<a href={linkUrl} target="_blank">{cardContent}</a>) : (<>{cardContent}</>) }
        </div>
    );
}