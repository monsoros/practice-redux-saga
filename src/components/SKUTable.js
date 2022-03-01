import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSKU } from '../actions'
import { Row, Col, Typography, Input, Button, Table, Form } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
const { Title } = Typography

const SKUTable = () => {
    const dispatch = useDispatch()
    const skus = useSelector(state => state.SKU)
    const columns = [
        {
            title: 'ไอดี',
            dataIndex: 'uid',
            width: 400
        },
        {
            title: 'ไอดีเจ้าของ',
            dataIndex: 'owner_id',
            width: 400
        },
        {
            title: 'รหัสสินค้า',
            dataIndex: 'code'
        },
        {
            title: 'ชื่อสินค้า',
            dataIndex: 'name'
        },
        {
            title: 'หน่วย',
            dataIndex: 'unit'
        },
        {
            title: 'คำอธิบายสินค้า',
            dataIndex: 'description'
        }
    ]

    const [search, setSearch] = useState({
        code: '',
        name: '',
        unit: '',
        desc: ''
    })

    useEffect(() => {
        dispatch(getSKU(0, skus.pageSize, search))
    }, [dispatch, skus.pageSize, search])

    const handleFormValueChange = (changedValues, allValues) => {
        setSearch({
            code: allValues.code || '',
            name: allValues.name || '',
            unit: allValues.unit || '',
            desc: allValues.desc || ''
        })
    }

    return (
        <div className='container'>
            <Row gutter={8}>
                <Col span={8}>
                    <Title level={3}>ข้อมูลสินค้า</Title>
                </Col>
                <Col span={14}>
                    <Form layout='inline' onValuesChange={handleFormValueChange}>
                        <Form.Item name='code'>
                            <Input
                                placeholder='รหัสสินค้า'
                                size='large'
                                prefix={
                                    <SearchOutlined style={{ color: '#7A7A7A' }} />
                                }
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item name='name'>
                            <Input
                                placeholder='ชื่อสินค้า'
                                size='large'
                                prefix={
                                    <SearchOutlined style={{ color: '#7A7A7A' }} />
                                }
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item name='unit'>
                            <Input
                                placeholder='หน่วยสินค้า'
                                size='large'
                                prefix={
                                    <SearchOutlined style={{ color: '#7A7A7A' }} />
                                }
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item name='desc'>
                            <Input
                                placeholder='คำอธิบายสินค้า'
                                size='large'
                                prefix={
                                    <SearchOutlined style={{ color: '#7A7A7A' }} />
                                }
                                allowClear
                            />
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={2}>
                    <Button type="primary" size='large' block>
                        <PlusOutlined /> สร้างสินค้า
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table 
                        loading={skus.loading} 
                        columns={columns} 
                        dataSource={skus.skus}
                        rowKey='uid'
                        pagination={{
                            total: skus.total,
                            onChange: (page, pageSize) => {
                                dispatch(getSKU((page*pageSize)-pageSize, pageSize, search))
                            },
                            onShowSizeChange: (current, size) => {
                                dispatch(getSKU((current*size)-size, size, search))
                            }
                        }} />
                </Col>
            </Row>
        </div>
    )
}

export default SKUTable