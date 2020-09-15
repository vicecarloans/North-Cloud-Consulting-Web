import React from 'react'
import { Result, Button } from 'antd';
import { navigate } from 'gatsby'
export default function PageNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={() => {navigate("/")}} type="primary">Back Home</Button>}
        />
    )
}