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
            <div className="projectCard__content">
                <div className="projectCard__title">{title}</div>
                <div className="projectCard__desc">{description}</div>
            </div>
        </div>
    );

    return (
        <div className="projectCardContainer">
            { linkUrl ? (<a href={linkUrl} target="_blank">{cardContent}</a>) : (<>{cardContent}</>) }
        </div>
    );
}