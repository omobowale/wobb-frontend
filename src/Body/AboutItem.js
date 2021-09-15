import { Box, Link} from '@material-ui/core'
import React from 'react'

export default function AboutItem({line1, line2, line3}) {
    return (
        <Box flexGrow={1} border="1px solid lavender" borderRadius="5px" padding={2}>
            <Box style={{opacity: 0.6}}>{line1 === "" ? <span>&nbsp;</span> : line1}</Box>
            <Box>{line2}</Box>
            <Box fontWeight={"bold"}><Link href="/">{line3}</Link></Box>
        </Box>
    )
}
