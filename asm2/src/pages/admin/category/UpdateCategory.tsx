import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICategory, IPropsCat } from '../../../interface/category';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateCategory = (props) => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm<ICategory>()

    const navigate = useNavigate()

    const { id } = useParams();
  useEffect(() => {
    const currentCategory = props.categorys.find((cat) => cat._id == id);
    console.log("currentCategory", currentCategory)
    reset(currentCategory)
  }, [props])
    const onSubmit: SubmitHandler<ICategory> = data => {
        console.log(data)
        props.onUpdateCat(data)
        navigate('/admin/category')
    }
    return (
        <div>
            <h1>Add new category</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" {...register("name", { required: true })} />
                </div>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </form>
        </div>

    )

}
export default UpdateCategory;