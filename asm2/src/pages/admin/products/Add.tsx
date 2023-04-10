import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, Input, Select, InputNumber, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
// import type { UploadFile } from 'antd/es/upload/interface';
import { IPropsAdd } from '../../../interface/product';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import { getAllCategory } from '../../../api/category';
import axios from 'axios';
// import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile } from 'antd/es/upload/interface';
import instance from '../../../api/instance';

// import {yupResolver} from '@hookform/resolvers/yup'
// import * as Yup from "yup";

// const schema = Yup.object({
//   name: Yup.string().required(),
//   price: Yup.number().required(),
//   images: Yup.string().required(),
//   desc: Yup.string().required(),
//   categoryId: Yup.number().positive().integer().required(),
// }).required();
// type TCheck = Yup.InferType<typeof schema>;



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};






const Add = (props: IPropsAdd) => {
    // const [loading, setLoading] = useState(false);
    // const [imageUrl, setImageUrl] = useState<string>();

    const [images, setImages] = useState("");
    console.log(images)
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        getAllCategory().then(({ data }) => {
            // categories.filter((item) => !categories.includes(item))
            setCategories(data)
        })
    }, [])
    // console.log("categories", categories)

    const navigate = useNavigate();



    const uploadFiles = async () => {
        // if () {

        const CLOUD_NAME = "duqn6uvp2";
        const PRESET_NAME = "asm2-TypeScript";
        const FOLDER_NAME = "ASM-TypeScript";
        const urls = [];

        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
        // const api = `http://localhost:8080/api/image/upload`;
        const formData = new FormData();

        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);
        // for (const images of files) {
        formData.append("file", images);

        const response = await axios.post(api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
            // ).then((response) => console.log(response)
        )
        .then(({ data }) => setImages(data.secure_url))
        // .then(( data ) => urls.push(data.secure_url))
// console.log("response", response);

        // urls.push(response.data.secure_url)

        console.log("URL", urls)
        return urls;
    }


    // }

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const onFinish = (values: any) => {
        console.log("Them thanh cong: ", values);
        const urls = uploadFiles();
        // instance.post('/image/upload', urls);
        props.onAdd(values);
        navigate('/admin/products')
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();

    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    return (
        <div>
            <h1>Add new product</h1>
            <form

                {...layout}
                name="nest-messages"

                onSubmit={handleSubmit(onFinish)}
                style={{ maxWidth: 600 }}
                defaultValue={`${validateMessages}`}
            >
                <Form.Item label="Name" rules={[{ required: true, message: "Ten khong duoc de trong" }]}>
                    <input {...register("name", { required: true, })} />

                </Form.Item>

                <Form.Item label="Price" rules={[{ required: true }]}>
                    <input type='number' {...register("price")}
                    />


                </Form.Item>

                <Form.Item
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    label="Image"

                // rules={[{ required: true }]}
                >

                    <input type='file'{...register("images")} multiple onChange={(event: any) => setImages(event.target.files[0])} />


                </Form.Item>

                <Form.Item label="Category" rules={[{ required: true }]}>
                    <select
                        {...register("categoryId")}
                    // value={categories}
                    >
                        {categories.map((item) => (
                            <option key={item._id} value={item._id} > {item.name}</option>

                        ))}
                    </select>


                </Form.Item>

                <Form.Item label="Description" rules={[{ required: true }]}>
                    <textarea  {...register("desc")} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={uploadFiles} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </form>
        </div >
    )
}

export default Add