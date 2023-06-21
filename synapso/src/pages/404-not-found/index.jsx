import illuCache from "../../assets/illuCache";
import {Link} from "react-router-dom";

export default function NotFoundPage(){
    import("./index.css");
    return (
    <div className="page-error-404">
        <header className="center-page-error-404">
            <img className="img-to-show-error-404" src={illuCache(12)} alt="404 page not found" />
            <div className="text-spacing">
                <h1 className="title-page-not-found">Page not found</h1>
                <Link to="/home" className="return-home-page-not-found">Return to home</Link>
            </div>
        </header>
    </div>
    )
}