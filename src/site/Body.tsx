import React from "react"

type BodyType = {
    titleFofBody: string
}

export const Body=(props:BodyType)=> {
    return (
        <>{props.titleFofBody}</>
    )
}