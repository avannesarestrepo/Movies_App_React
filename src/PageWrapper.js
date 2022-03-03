import Login from './components/login'
import SignUp from './components/SignUp';

function PageWrapper(props) {

    return (
      <div>
        <Login />
        <SignUp />
  
        <header className="ht-header">
          <div className="container">
            <nav className="navbar navbar-default navbar-custom">
              <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav flex-child-menu menu-right">  
                  <li className="loginLink"><a href="#">LOG In</a></li>
                  <li className="btn signupLink"><a href="#">sign up</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
  
        <div className="hero common-hero"></div>
        
        <div className="page-single movie_list">
          <div className="container">
            <div className="row ipad-width2">
              <div className="col-md-8 col-sm-12 col-xs-12">
                {props.children}
              </div>
            </div>
          </div>
        </div>

        <footer className="ht-footer">
          <div className="ft-copyright">
            <div className="ft-left">
              <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
            </div>
            <div className="backtotop">
              <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  export default PageWrapper;