
import React, { useEffect, useState } from 'react'
import { IProduct, IProps } from '../../../interface/product';
import { Link } from 'react-router-dom';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useForm } from 'react-hook-form';
import { getAll } from '../../../api/product';

const ProductsManagement = (props: IProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const columns: ColumnsType<IProduct> = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Image',
            dataIndex: '',
            key: '',
            render: (record: IProduct) => <img src={`${record.images}`} alt="no image" width={150} height={100}/>
        },
        {
            title: 'Category',
            dataIndex: '',
            key: '',
            render: (record: IProduct) => <p key={record._id}>{record.name}</p>
        },

        {
            title: 'Action',
            dataIndex: '',
            key: 'action',
            render: (record) => (
                <Space size={'middle'}>
                    <Button type="primary" danger ghost onClick={() => Remove(record._id)}>Delete</Button>
                    <Button type="primary" ghost><Link to={`/admin/products/update/${record._id}`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    
    const Remove = (id: number) => {
        props.onRemove(id)
        console.log(id)
    }
    //   Search
    const [product, setProduct] = useState<IProduct[]>([]);
    useEffect(() => {
        setProduct(props.products);
    }, [props.products])
    const fethData = (value: any) => {
        getAll().then(({ data }) =>
       
        {
            const results = data.filter((data: any) => {
                return (value && data && data.name.toLowerCase().includes(value))
            })
            setProduct(results)
        })
    }
    const [input, setInput] = useState([]);
    // console.log(input);
    const handleChange = (value: any) => {
        // setInput(value);
        setInput(value);
        if (value === "") {
            setProduct(props.products)
        } else {
            fethData(value);
        }
        // fethData(value)

    }
    const products: IProduct[] = product.map((item: IProduct) => {
        // console.log(item)
        return {
            key: item._id,
            ...item
        }
    });
    return (
        <div>
            <Link to={'/admin/products/add'}>Add new product</Link>
            <form>
                <input className="my-3" placeholder='Search...' value={input} onChange={(e) => handleChange(e.target.value)}>
                </input>
            </form>
            {/* </form> */}
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.desc}</p>,
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={products}
            />

        </div>
    )
}

export default ProductsManagement