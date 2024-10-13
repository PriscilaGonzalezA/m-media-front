import {Box, Drawer, IconButton, List, ListItemButton, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {useRouter} from "next/router";
import {useState} from "react";


export function SideMenu() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const listMenu = (
        <List className={'mt-5'}>
            <ListItemButton onClick={() => router.push('/')}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
                >
                    <HomeRoundedIcon/>
                    Home
                </Box>
            </ListItemButton>
            <ListItemButton onClick={() => router.push('/noticias')}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
                >
                    <NewspaperRoundedIcon/>
                    Noticias
                </Box>
            </ListItemButton>
        </List>
        );

    return (
        <div className={'bg-[#EBEBEB]'}>
            {isMobile ? (
                <>
                    <IconButton
                        className={"items-start"}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        open={open}
                        onClose={handleDrawerToggle}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: 240,
                                backgroundColor: "#69aeec"
                            },
                        }}
                    >
                        {listMenu}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                            backgroundColor: '#69aeec'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    {listMenu}
                </Drawer>
            )}
        </div>
    )
}