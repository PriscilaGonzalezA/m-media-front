import {Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function NoteDetail({note, loading}) {
    const router = useRouter();
    const [urlEmded, setUrlEmbed] = useState('');
    const urlImage = `${process.env.NEXT_PUBLIC_BACK_IMAGES_URL}/${note?.image}`;

    useEffect(() => {
        if (note) {
            const youtubeUrl = note?.url;
            const youtubeUrlEmbed = youtubeUrl?.replace("watch?v=", "embed/") + '?autoplay=1&mute=1';
            setUrlEmbed(youtubeUrlEmbed);
        }
    }, [note]);

    return (
        <>
            {loading ?
                (<Box className={"text-center mt-24"}>
                    <CircularProgress size="3rem" />
                </Box>) : null
            }
            { note ?
                <Card className={"md:m-8 m-2"}>
                    <CardMedia
                        component="img"
                        alt={note.title}
                        image={urlImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle2" component="div"
                                    sx={{ color: 'text.secondary', marginBottom: 2 }}
                        >
                            Escrito por: {note.author}
                        </Typography>
                        <Typography variant="body2" className={"text-justify"}>
                            <div dangerouslySetInnerHTML={{__html: note.description}}/>
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component='iframe'
                        alt={note.title}
                        src={urlEmded}
                        autoPlay
                        className={"p-8 h-[500px]"}
                    />
                    <CardActions className={"float-right"}>
                        <Button
                            sx={{backgroundColor: '#69aeec', color: 'white'}}
                            size="small"
                            onClick={()=> router.push(`/noticias`)}>
                            Volver
                        </Button>
                    </CardActions>
                </Card>
                :
                <>No hay nota</>
            }

        </>
    )

}