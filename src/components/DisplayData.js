import React, { useState} from 'react';

const DisplayData = ({ data }) => {

    let minListId = 1
    let maxListId = 0
    const filteredData = data.filter((item) => {
        if (item.name && item.name.length > 0) {
            if (item.listId < minListId) {
                minListId = item.listId
            }
            if (item.listId > maxListId) {
                maxListId = item.listId
            }
            return item
        }
    })

    let dataToShow = []

    for (let i = minListId; i <= maxListId; i++) {
        const currentData = filteredData.filter(item => item.listId === i)
            .sort((a, b) => {
                a = a.name.split(' ')
                b = b.name.split(' ')

                let c = parseInt(a[a.length - 1])
                let d = parseInt(b[b.length - 1])
                
                if (c < d) {
                    return - 1
                } else if (c > d) {
                    return 1
                } else {
                    return 0
                }
            })
        dataToShow = [...dataToShow, {id: i, data: currentData}]
    }

    const showData = (dataToShow) => {
        return dataToShow.map(data => {
            return (
                <div>
                    <h1>List Id: {data.id}</h1>
                    <ul>
                        {data.data.map(item => <li>Id: {item.id} List Id:{item.listId} Name:{item.name}</li>)}
                    </ul>
                </div>
            )
        })
    }






    return (
        <div>
            Display Data Placeholder
            {showData(dataToShow)}
        </div>
    )
}

export default DisplayData