import React, { FunctionComponent } from 'react'

export const Centered: FunctionComponent = ({ children }) => {
    return <div className="row center-xs middle-xs" style={{ height: '100vh', margin: 0 }}>
        {children}
    </div>
}
