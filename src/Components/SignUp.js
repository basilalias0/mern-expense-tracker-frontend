import '../public/css/AuthPage.css'
import wallet from '../public/images/wallet.png'
import sideImg from '../public/images/pexels-dziana-hasanbekava-7063765.jpg'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom'
import { useMutation } from '@tanstack/react-query';
import { registerAPI } from '../Services/users/userServices';
import { useDispatch } from 'react-redux';
import { loginAction } from '../Redux/slice/userSlice';
import Alert from 'react-bootstrap/Alert';


const SignupSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name Required'),
    username:Yup.string()
    .lowercase("All Lowercase")
    .min(3,"Too Short!")
    .max(15,"Maximum 15 characters")
    .required("Username Required"),
    email:Yup.string()
    .email("Invalid Email")
    .required("Email required"),
    password:Yup.string()
    .min(6,"Minimum 6 Characters")
    .required("Password Required"),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref("password"),null],"Passwords must match!")
    .required("Need confirm password")
  });


function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {mutateAsync,isPending,isError,error}= useMutation({
        mutationFn:registerAPI,
        mutationKey:['register']
    })

    const formik = useFormik({
        initialValues:{
            name:"",
            username:"",
            email:"",
            password:""
        },
        validationSchema:SignupSchema,
        onSubmit:(values)=>{
            mutateAsync(values)
            .then((data)=>{
                localStorage.setItem('userData',JSON.stringify(data))
                dispatch(loginAction(data))
                navigate('/home')
            })
            .catch((e)=>console.log(e))
        }
    })

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
                        {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
                        {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
                            <form onSubmit={formik.handleSubmit} action="" method="post">
                            <div className="form-field">
                                    <fieldset>
                                        <legend>Name</legend>
                                        <input type="text" id="name" name="name" placeholder="Enter your Name!!! "
                                         {...formik.getFieldProps("name")}/>
                                    </fieldset>
                                    {formik.touched.name && formik.errors.name && (<span style={{color:"red"}}>{formik.errors.name}</span>)}
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Username</legend>
                                        <input type="text" id="username" name="username" placeholder="Enter a unique Username" 
                                        {...formik.getFieldProps("username")} />
                                    </fieldset>
                                    {formik.touched.username && formik.errors.username && (<span style={{color:"red"}}>{formik.errors.username}</span>)}
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Email</legend>
                                        <input type="text" id="email" name="email" placeholder="Enter your Email" {...formik.getFieldProps("email")}/>
                                    </fieldset>
                                    {formik.touched.email && formik.errors.email && (<span style={{color:"red"}}>{formik.errors.email}</span>)}
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Password</legend>
                                        <input type="password" id="password" name="password" placeholder="Enter a Password" 
                                        {...formik.getFieldProps("password")}/>
                                    </fieldset>
                                    {formik.touched.password && formik.errors.password && (<span style={{color:"red"}}>{formik.errors.password}</span>)}
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Confirm Password</legend>
                                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-Enter password" 
                                        {...formik.getFieldProps("confirmPassword")}/>
                                    </fieldset>
                                    {formik.touched.confirmPassword&& formik.errors.confirmPassword && (<span style={{color:"red"}}>{formik.errors.confirmPassword}</span>)}
                                </div>
                                <div className="sign-up-btn">
                                    <button type="submit">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="goto-signin-section">Have an account? <Link to="/">Sign In</Link></div>
                </div>
                <div className="image-section">
                    <div className="image">
                        <img src={sideImg} alt="not Found" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
