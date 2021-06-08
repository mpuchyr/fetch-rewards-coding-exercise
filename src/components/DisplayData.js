import React from 'react';

const DisplayData = ({ data }) => {

    let minListId = 1
    let maxListId = 0
    
    // filter out data without a name and set maxListId and minListId for use in future for loop
    const filteredData = data.filter((item) => {
        if (item.name && item.name.length > 0) {
            // set minListId and maxListId now to prevent needing another loop iteration
            if (item.listId < minListId) {
                minListId = item.listId
            }
            if (item.listId > maxListId) {
                maxListId = item.listId
            }
            return item
        } else return null
    })


    
    // sort the data by list id using previously set maxListId and minListId
    let dataToShow = []

    for (let i = minListId; i <= maxListId; i++) {
        const currentData = filteredData.filter(item => item.listId === i)
            .sort((a, b) => {
                // split the names to sort them in proper numerical order
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

    // display the data, split up into sections
    const showData = (dataToShow) => {
        return dataToShow.map(data => {
            return (
                <div className="list-container" key={data.id}>
                    <h1>List ID: {data.id}</h1>
                    <ul>
                        {data.data.map(item => <li key={item.id}>ID: {item.id} | List ID: {item.listId} | Name: {item.name}</li>)}
                    </ul>
                </div>
            )
        })
    }


    return (
        <div>
            {dataToShow.length > 0 && showData(dataToShow)}
        </div>
    )
}

export default DisplayData