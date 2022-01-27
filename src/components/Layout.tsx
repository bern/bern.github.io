import React, { ReactElement, ReactNode } from "react"

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <div style={{ padding: '0px 15%', marginTop: '32px' }}>
                {children}
            </div>
        </div>
    )
}