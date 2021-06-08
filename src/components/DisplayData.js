import React, { useState} from 'react';

const DisplayData = ({ data }) => {
    let maxListId = 0
    const sortedData = data.sort((a, b) => {
        // determines the largest list id while sorting to prevent having to iterate through the list of data more times
        if (a.listId > maxListId) {
            maxListId = a.listId
        }
        if (a.listId > b.listId) {
            return 1
        } else if (a.listId < b.listId) {
            return -1
        } else {
            return 0
        }
    }) 

    console.log(sortedData)
    console.log(maxListId)




    return (
        <div>
            Display Data Placeholder
        </div>
    )
}

export default DisplayData