import React, { ReactElement, ReactNode } from "react"

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}