import React from 'react'

export default function DateFilter(props) {
    const { date, changeDateFilter } = props
    return (
        <div className='jobs-top-note'>
            <p>Stories from {date} (UTC)</p>
            <p>Go back a <span onClick={() => {
                changeDateFilter('backward', 'days')
            }}>
                day
            </span>, <span onClick={() => {
                changeDateFilter('backward', 'months')
            }}>month</span>, or <span onClick={() => {
                changeDateFilter('backward', 'years')
            }}>year</span>. Go forward a <span onClick={() => {
                changeDateFilter('forward', 'days')
            }}>day</span>.</p>
        </div>
    )
}
