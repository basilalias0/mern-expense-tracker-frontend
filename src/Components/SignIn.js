import '../public/css/AuthPage.css'
import wallet from '../public/images/wallet.png'
import sideImg from '../public/images/pexels-dziana-hasanbekava-7063765.jpg'

function SignIn() {
  return (
    <div>
            <div className="containerLog">
                <div className="login-section">
                    <div className="logo-section">
                        <div className="logo">
                            <img src={wallet} alt="wallet-png" />
                        </div>
                        <div className="app-name">IE Tracker</div>
                    </div>
                    <div className="signup-section">
                        <div className="f-line">Start your journey</div>
                        <div className="s-line">Sign Up to IE Tracker</div>
                        <div className="form">
                            <form action="" method="post">
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Email</legend>
                                        <input type="text" id="name" name="email" placeholder="Your Email here!!"/>
                                    </fieldset>
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Password</legend>
                                        <input type="password" id="password" name="password" placeholder="Your Password here!!"/>
                                    </fieldset>
                                </div>
                                <div className="sign-up-btn">
                                    <button type="submit">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="goto-signin-section">Have haven't an account? <a href="./SignUp.js">Sign Up</a></div>
                </div>
                <div className="image-section">
                    <div className="image">
                        <img src={sideImg} alt="Image not Found" />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default SignIn;
