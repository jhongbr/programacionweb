import React, { useEffect, useState } from "react";
import '../content/Content.css'
import axios from "axios"
import mock from './mock.json'

export const Content = () => {

    const [data, setData] = useState([]);

    /*const handleClik = () => {
    setData("Señor Elis")*/ //es para setear la informacion

    const handleGetData = () => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=DEMO_KEY")
            .then((response => {
                console.log(response)
                setData(response.data.photos)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        handleGetData()
        setData(mock)
        console.log(data)
    }, [])

    return (
        <>
            <div className="container_content">
                {
                    data.map((elemento) => {
                        return <div className='content_img'><img src={elemento.img_src} /></div>
                    })
                }
            </div>

        </>
    )
}