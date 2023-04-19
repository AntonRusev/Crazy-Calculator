import { useState } from "react";

export default function Timer() {

    const [time, setTime]= useState(0);

    // setTimeout(() => {
    //     setTime(state => state + 1)
    // }, 1000)

    return (
        <div>
            Time: {time}
        </div>
    )
}