import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosClient } from '../../Axios/AxiosCLient';
import { BACKEND_URLS } from '../../Routes/Routes';
import Menu from './SubjectComponents/Menu';
import Content from './SubjectComponents/Content';
import Header from './SubjectComponents/Header';
import { LuBookOpen } from 'react-icons/lu'
import { BiLabel } from 'react-icons/bi';
import MenuContent from './SubjectComponents/MenuContent';


const Subject = () => {
    const { subject_node_id } = useParams()
    const [data, setData] = useState()
    const [isIndex, setIsIndex] = useState(true)


    useEffect(
        () => {
            const localData = localStorage.getItem('@subject')
            if (localData) {
                setData(JSON.parse(localData))
            }
            else {
                AxiosClient.post(
                    BACKEND_URLS.SUBJECT_DATA_API,
                    {
                        node_id: Number(subject_node_id),
                    }
                ).then(
                    (result) => {
                        if (result.data.success) {
                            console.log('result', result.data.data)
                            localStorage.setItem('@subject', JSON.stringify(result.data.data))
                            setData(result.data.data)
                        }
                    }
                )
            }
        }, []
    )
    return (
        <>
            <div className='main-grid-container Home'>

                {
                    data
                        ?
                        <>
                            <div className='IsPhoneAndTab'>
                                {isIndex && <div className='Floating-class Floating-Subject-Menu-But Floating-Subject-Menu-Text pseudo-button' onClick={() => {
                                    console.log("Index is Clicked.")
                                    setIsIndex(false)
                                }}>
                                    <div><LuBookOpen size={20} /></div>
                                    &nbsp; Index
                                </div>}

                                {
                                    !isIndex &&
                                    <>
                                        <div className='Floating-class Floating-Subject-Menu-Content' >
                                            {data &&
                                                <MenuContent data={data.node_content_tree} setIsIndex={setIsIndex} />
                                            }
                                        </div>

                                        <div className='overlay-2'></div>
                                    </>
                                }
                            </div>

                            <>
                                < div className='menu Home-menu' >
                                    <Menu data={data.node_content_tree} />
                                </div >

                                <div className='content main-grid-vertical-container'>

                                    <div className='grid-navbar Home-NavBar'>
                                        <Header />
                                    </div>

                                    <div className='grid-content Subject-Content'>
                                        <Content data={data.node_content_tree} />
                                    </div>
                                </div >
                            </>
                        </>
                        :
                        <>
                            Loading...
                        </>
                }
            </div>
        </>
    );
};

export default Subject;