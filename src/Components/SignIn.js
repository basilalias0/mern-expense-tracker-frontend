import '../public/css/AuthPage.css'
import wallet from '../public/images/wallet.png'
import * as Yup from 'yup';
import sideImg from '../public/images/pexels-dziana-hasanbekava-7063765.jpg'
import {useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { loginAPI } from '../Services/users/userServices';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { loginAction } from '../Redux/slice/userSlice';
import { useNavigate,Link } from 'react-router-dom';





const signInValidationSchema = Yup.object({
    username:Yup.string().required("Username required"),
    password:Yup.string().min(6,"Minimum 6 Characters").required("Password Required")
})

function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Mutation

    const {mutateAsync,isPending,error,isError} = useMutation({
        mutationFn:loginAPI,
        mutationKey:['login']
    })

     const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        validationSchema: signInValidationSchema,
        onSubmit:(values)=>{
            mutateAsync(values)
            .then((data)=>{
                dispatch(loginAction(data))
                localStorage.setItem('userData',JSON.stringify(data)) 
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
                            {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
                            {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
                            
                            <form onSubmit={formik.handleSubmit} action="" >
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Username</legend>
                                        <input type="text" id="name" name="username" placeholder="Your Username here!!" 
                                        {...formik.getFieldProps("username")}/>
                                    </fieldset>
                                    {formik.touched.username && formik.errors.username && (<span style={{color:"red"}}>{formik.errors.username}</span>)}
                                </div>
                                <div className="form-field">
                                    <fieldset>
                                        <legend>Password</legend>
                                        <input type="password" id="password" name="password" placeholder="Your Password here!!" 
                                        {...formik.getFieldProps("password")}/>
                                    </fieldset>
                                    {formik.touched.password && formik.errors.password && (<span style={{color:"red"}}>{formik.errors.password}</span>)}
                                </div>
                                <div className="sign-up-btn">
                                    <button type="submit">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="goto-signin-section">Have haven't an account? <Link to="/signup">Sign Up</Link></div>
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

export default SignIn;
