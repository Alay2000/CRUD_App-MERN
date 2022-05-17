import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
const AddUser = () => {
    const navigate=useNavigate();
    const{fullname,email,
    userpassword,
    userphone,
    usergender}=useSelector((state)=>state)
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        const userData={
            
                "fullname":fullname,
                "email":email,
                "gender":usergender,
                "phone":userphone,
                "password":userpassword
            
        }
        UserService.postUser(userData).then((res)=>{
            console.log(res);
            if(res.status==200){
                navigate("/list");
            }
        })
        
    }
    return (
        <div className="container m-2">
            <h3>Create New User</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="form-control"
                    placeholder="Enter Name"
                    value={fullname}
                    onChange={(e)=>dispatch({type:'fullname',value:e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>dispatch({type:'email',value:e.target.value})}
                    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userpassword}
                    onChange={(e)=>dispatch({type:'userpassword',value:e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    value={userphone}
                    onChange={(e)=>dispatch({type:'userphone',value:e.target.value})}
                    
                    />
                </div>
                <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="form-check-input"
                    value="Male"
                    checked={usergender==='Male'}
                    onChange={(e)=>dispatch({type:'usergender',value:e.target.value})}
                    
                    />
                    <label htmlFor="gender" className="form-check-label">Male</label>

                </div>
                <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="form-check-input"
                    value="Female"
                    checked={usergender==='Female'}
                    onChange={(e)=>dispatch({type:'usergender',value:e.target.value})}
                    
                    />
                    <label htmlFor="gender" className="form-check-label">Female</label>

                </div>
                <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="form-check-input"
                    value="Others"
                    checked={usergender==='Others'}
                    onChange={(e)=>dispatch({type:'usergender',value:e.target.value})}
                    
                    />
                    <label htmlFor="gender" className="form-check-label">Others</label>

                </div>
                <div className="form-group">
                    <input type="submit" value="Add User" className="btn btn-primary">
                    </input>
                </div>
            </form>

        </div>
    )
}
export default AddUser