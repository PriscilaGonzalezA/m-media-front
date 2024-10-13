import {Box, Skeleton} from "@mui/material";


export default function NoteSkeleton() {
    return (
        <Box sx={{ width: 280, height: 350, my: 2 }}>
            <Skeleton variant="rectangular" width={280} height={157} />
            <Skeleton />
            <Skeleton />
            <Skeleton width="80%" />
            <Skeleton width="70%" />
            <Skeleton width="60%" />
        </Box>
    )
}