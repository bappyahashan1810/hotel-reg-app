import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { userLogOut, user } = useContext(AuthContext);
    const handlerLogOut = () => {
        userLogOut()
            .then(() => { })
            .then(error => console.log(error))

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">

                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Tenda</Link>
                    {user && user.uid && <p className='text-white'>{user.email}</p>}
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>

                                <Link to='/profile' className="justify-between">Profile<span className="badge">New</span></Link>
                            </li>
                            <li>
                                {user?.uid ? <button onClick={handlerLogOut}>LogOut</button>
                                    :
                                    <Link className='my-2' to='/login'>Login</Link>
                                }
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;