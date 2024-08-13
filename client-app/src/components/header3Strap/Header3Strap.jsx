function Header3Strap() {
    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <a href="index.html">Blog site exam</a>
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div id="navigation" className="collapse navbar-collapse flex-column">
                    <div className="profile-section pt-3 pt-lg-0">
                        {/* <img
                            className="profile-image mb-3 rounded-circle mx-auto"
                            src="public/images/profile.png"
                            alt="profile picture"

                            // here you can add users profile image
                        /> */}
                        <div className="bio mb-3">
                            Hi, my name is Anthony Doe. Briefly introduce yourself here. You can
                            also provide a link to the about page.
                            <br />
                            <a href="about.html">Find out more about me</a>
                        </div>
                        {/*//bio*/}

                        {/*//social-list*/}
                        <hr />
                    </div>
                    {/*//profile-section*/}
                    <ul className="navbar-nav flex-column text-left">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-home fa-fw mr-2" />
                                Blog Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog-post.html">
                                <i className="fas fa-bookmark fa-fw mr-2" />
                                Blog Post
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">
                                <i className="fas fa-user fa-fw mr-2" />
                                About Me
                            </a>
                        </li>
                    </ul>
                    <div className="my-2 my-md-3">
                        <a
                            className="btn btn-primary"
                            href="https://themes.3rdwavemedia.com/"
                            target="_blank"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header3Strap;