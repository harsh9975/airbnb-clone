import React, { useState } from 'react'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import "./DatePicker.css"
import { Button } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"

function DatePicker(){  

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="date-picker">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of guests <PeopleIcon/></h2>
            <input type="number"/>
            <Button>Search Airbnb </Button>
        </div>
    )
}

export default DatePicker
 