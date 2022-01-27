import { Link } from "react-router-dom"
import { Layout } from "./Layout"

import '../App.css';

export const HomeTab = () => {
    return (
        <Layout>
            <div style={{ fontSize: '2rem' }}>
                <p>Hey there! 👋</p>
                <p>I'm Bernie (he/him). I'm currently living in Brooklyn, NY, USA.</p>
                <p>I describe myself as a <Link className="homeLink" to="/stories">storyteller</Link>, a <Link to="/community" className="homeLink">community</Link> and <Link to="/events" className="homeLink">event organizer</Link>, and as someone who excels at <Link to="/contact" className="homeLink">building relationships.</Link></p>
                <p>I've worked professionally as a Software Engineer for the past 5+ years in the <Link to="/social" className="homeLink">social</Link>, <Link to="/entertainment" className="homeLink">entertainment</Link>, and <Link to="/education" className="homeLink">education</Link> spaces.</p>
                <p>Interested in hiring me? Interested in collaborating on a project? Anything else? <Link to='/contact' className="homeLink">Get in touch!</Link></p>
                <p>If you're still curious to learn more, check out what I've been <Link to='/reading' className="homeLink">reading lately</Link>, some of my go-to <Link to='/drinks' className="homeLink">cocktail recipes</Link>, or one of my favorite <a href="https://www.youtube.com/watch?v=c1-Oep9uNwM" target="_blank" className="homeLink">Youtube videos.</a></p>
            </div>
        </Layout>
    )
}