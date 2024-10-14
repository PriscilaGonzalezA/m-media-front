import {Skeleton, Typography} from "@mui/material";


export default function Title({title}) {
    return (
        <Typography
            variant="h2"
            className={'align-middle pt-8 pb-0.5 text-[#69aeec] text-center md:text-left'}>
            {title ?? <Skeleton />}
        </Typography>
    )
}