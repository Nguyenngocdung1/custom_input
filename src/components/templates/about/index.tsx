import React, { useEffect, useState } from 'react';
import { Input, Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const options = [
    {
        key: 'lv1',
        value: 1,
        label: 'name'
    },
    {
        key: 'lv1',
        value: 2,
        label: 'class'
    },
    {
        key: 'lv1',
        value: 3,
        label: 'dob'
    },
];

const comparator = [
    {
        key: 'lv2',
        value: 1,
        label: '='
    },
    {
        key: 'lv2',
        value: 2,
        label: '>'
    },
    {
        key: 'lv2',
        value: 3,
        label: '<'
    },
];

const value = [
    {
        key: 'lv3',
        value: 1,
        label: 'Dung'
    },
    {
        key: 'lv3',
        value: 2,
        label: 'hiii'
    },
    {
        key: 'lv3',
        value: 3,
        label: 'Hooo'
    },
];

const muti = [
    {
        key: 'lv4',
        value: 1,
        label: 'And'
    },
    {
        key: 'lv4',
        value: 2,
        label: 'Or'
    },

];

const App: React.FC = () => {

    const [text, setText] = useState('')
    const [level, setLevel] = useState('lv4')
    const [menu, setMenu] = useState<any>([])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (level === 'lv1') {
            setMenu(comparator)
        } else if (level === 'lv2') {
            setMenu(value)
        } else if (level === 'lv4') {
            setMenu(options)
        } else {
            setMenu(muti)
        }
    }, [level])

    console.log(menu)

    const handleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent> ,value: string, arr: any) => {
      console.log(`selected ${value}`);
      const _text = text + ' ' + arr.label
      setText(_text)
      setLevel(arr.key)
    //   setIsOpen(false)
      e.stopPropagation()
    };

    return (
    <div className='mx-[100px] px-[100px] mt-10'>
        <Space style={{ width: '80%' }} direction="vertical">
            <Select
                open={isOpen}
                allowClear
                value={text}
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={handleChange}
                onClick={() => setIsOpen(true)}
                options={menu}
                dropdownRender={() => menu.map((item: any, index: any) => (
                    <div onClick={(e) => handleChange(e, item.value, item)} key={item.label} style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                        {item.label}
                    </div>
                ))}
            />
        </Space>
    </div>
  
)};

export default App;