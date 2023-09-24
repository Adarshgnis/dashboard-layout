import React from 'react'
import './PaginationGroup.css'

const PaginationGroup = () => {
    return (
        <div className="pagination-group">
            <p className='pagination-paragraph'>Showing 1 to 2 of 2 entries</p>
            <div>
                <p className='pagination-paragraph'>Previous&nbsp;&nbsp;&nbsp;&lt;</p>
                <p className='pagination-paragraph pagination-paragraph-number'>1</p>
                <p className='pagination-paragraph'>&gt;&nbsp;&nbsp;&nbsp;Next</p>
            </div>
        </div>
    )
}

export default PaginationGroup
