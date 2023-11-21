import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }

    return (
        <div className="pb-8 mx-auto">
            <div className="divider">or</div>
            <div>
                <button onClick={handleGoogle} className="btn btn-secondary btn-sm"><FaGoogle className="mr-2"></FaGoogle>Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;