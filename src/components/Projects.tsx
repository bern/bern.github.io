import { Layout } from "./Layout"
import { ProjectCard } from "./Projects/ProjectCard"

export const Projects = () => {
    return (
        <Layout>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-evenly', gap: '16px' }}>
                <ProjectCard
                    title="Storybook.ink"
                    description="Tackling the representation problem in children's books by allowing you to customize the main character in every story."
                    imageUrl="https://blog-post-assets.s3.amazonaws.com/storybook.jpg"
                    linkUrl="https://www.facebook.com/storybookink/"
                />
                <ProjectCard
                    title="OmegaLOL"
                    description="Improving the League of Legends viewer experience by showing a streamer's last 24 hours of match history, plus auto-clipping from chat."
                    imageUrl="https://blog-post-assets.s3.amazonaws.com/omegalol.jpg"
                    linkUrl="https://www.riotgames.com/en/DevRel/hackathon-2018#docs-internal-guid-fcbb0c55-7fff-369b-7c37-207bc58c0b50"
                />
                <ProjectCard
                    title="Kanashi"
                    description="Protecting your IoT network by using pattern recognition to intercept malicious packets that pass through a router."
                    imageUrl="https://blog-post-assets.s3.amazonaws.com/kanashi.jpg"
                    linkUrl="https://devpost.com/software/kanashi"
                />
                <ProjectCard
                    title="Gun Loc"
                    description="Giving gun owners peace-of-mind by alerting them whenever their firearm is tampered with while they aren't at home."
                    imageUrl="https://blog-post-assets.s3.amazonaws.com/gun_loc.jpg"
                    linkUrl="https://devpost.com/software/gun-loc"
                />
            </div>
        </Layout>
    )
}