import React from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { IPropsAddUser } from '../interface/auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import 'bootstrap/dist/css/bootstrap.min.css'

const { Title } = Typography;



const Signin = (props) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onHandleSubmit = async (data: any) => {
    const { data: user } = await login(data);
    localStorage.setItem("user", JSON.stringify(user))
    console.log("user", user)
    navigate('/')
  }
  return (
    <div className=''>
      {/* <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="email" placeholder='Email' {...register("email")} />
        <input type="password" placeholder='Password' {...register("password")} />
        <button>Login</button>
      </form> */}
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='Email' {...register("email")} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input type="password" className="form-control" placeholder='Password' {...register("password")} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    
  )
}

export default Signin