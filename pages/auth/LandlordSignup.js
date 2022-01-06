import Image from 'next/image'
import Landlord from '../../public/images/Landlord.png'
import Home_fill from '../../public/images/Home_fill.png'
import Ellipse47 from '../../public/images/Ellipse47.png'

function Lsignup() {
    return (
        <>
            <div className="main">
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossOrigin="anonymous" />
                <link rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"
                />
                <section className="signup">
                    <div className="container pr_container praj">
                        <div className="fish">
                            <Image src={Home_fill} alt="sub" />
                        </div>
                        <div className="fishes">
                            <Image src={Ellipse47} alt="sub" />
                        </div>
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title pr_form-title">Landlord Sign up</h2>
                                <form method="POST" className="register-form" id="register-form">
                                    <div className="form-group pr_form-group">
                                        <label for="name"><i className="fas fa-user"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group pr_form-group">
                                        <label for="email"><i className="fas fa-envelope"></i></label>
                                        <input type="text" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group pr_form-group">
                                        <label for="contact"><i className="fas fa-phone-square-alt"></i></label>
                                        <input type="text" name="contact" id="contact" placeholder="Your Contact" />
                                    </div>
                                    <div className="form-group pr_form-group">
                                        <label for="pass"><i className="fas fa-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
                                    </div>
                                    <div className="form-group pr_form-group">
                                        <label for="re-pass"><i className="fas fa-lock"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Re-enter password" />
                                    </div>
                                    <div className="custom-control custom-checkbox pt-5">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label p_agree" for="customCheck1">I agree to all <a href="#" className='terms'>Terms and Conditions</a></label>
                                    </div>
                                    <div className="form-group pr_form-group form-button pr_form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Sign Up" />
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><Image src={Landlord} height={550} width={750} alt="tenant" /> </figure>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Lsignup