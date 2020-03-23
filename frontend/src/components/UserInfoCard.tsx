import React from 'react'

type UserInfoCard = {
    value: number;
    title: string;
}

const CardStyle: React.CSSProperties = {
    border: '1px solid #FFFFFF',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)"
}

export const UserInfoCard = (props: UserInfoCard) => {
    const prettyValue = (value: number): string => {
        return value.toLocaleString();
    }
    return (
        <div className="col-xs" style={CardStyle}>
            <strong><span style={{ fontSize: 20 }}>{prettyValue(props.value)}</span></strong>
            <br />
            <span>{props.title}</span>
        </div>
    )
}
