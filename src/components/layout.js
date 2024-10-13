import { SideMenu } from "@/components/menu";
import {useMediaQuery} from "@mui/material";


export function Layout({ children }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            <div className="flex flex-col overflow-x-hidden">
                <div className={`flex bg-white text-black`}
                     style={{display: 'flex'}}
                >
                    <SideMenu />
                    <div
                        className={`w-full flex-col justify-center`}
                        style={{width: isMobile ? 'calc(100% - 24px)' : 'calc(100% - 232px)'}}
                    >
                        <div className={"bg-[#EBEBEB] min-h-screen"} >
                            {children}
                        </div>
                        {/*
                        <footer className="flex gap-6 flex-wrap justify-end p-6">
                            <a
                                className="flex items-center gap-2"
                                href="https://www.megamedia.cl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    aria-hidden
                                    src="https://www.megamedia.cl/themes/custom/mega-portal-drupal-theme/img/logoMegamedia.svg"
                                    alt="Window icon"
                                    width={50}
                                    height={50}
                                />
                                Go to MegaMedia →
                            </a>
                        </footer>
                        */}
                    </div>
                </div>
            </div>
        </>
    )
}