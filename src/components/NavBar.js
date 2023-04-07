import React, {Component} from 'react';

class NavBar extends Component {

    render() {

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                   <a className="navbar-brand js-scroll-trigger" href="#page-top">
                     <span className="d-block d-lg-none">Juan Bautista Lozano</span>
                     <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/Profile.jpg" alt="..." /></span>
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                   <div className="collapse navbar-collapse" id="navbarResponsive">
                       <ul className="navbar-nav">
                         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#certificates">Certificates</a></li>
                       </ul>
                  </div>
              </nav>
              {this.props.children}
          </div>
        );
    }
}

export default NavBar;

