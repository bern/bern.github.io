import React, { ReactElement, ReactNode } from "react"

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div style={{ color: 'orange', backgroundColor: 'fafafa' }}>
            {children}
        </div>
    )
}