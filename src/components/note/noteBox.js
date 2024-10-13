import { useRouter } from 'next/router';
import { Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";


export default function NoteBox({ title, urlImage, description, id }) {
    const router = useRouter();
    const url = `${process.env.NEXT_PUBLIC_BACK_IMAGES_URL}/${urlImage}`;

    return (
        <Card sx={{ width: 280, my: 2, height: 350 }}>
            <CardMedia
                component="img"
                alt={title}
                image={url}
                sx={{height: "157px"}}
            />
            <CardContent sx={{height: 144}}>
                <Typography gutterBottom variant="h5" component="div"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                            }}
                >
                    {title}
                </Typography>
                <Typography variant="body2"
                            sx={{
                                color: 'text.secondary',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                            }}
                >

                    {description}
                </Typography>
            </CardContent>
            <CardActions className={"float-right"}>
                <Button
                    sx={{backgroundColor: '#69aeec', color: 'white'}}
                    size="small"
                    onClick={()=> router.push(`/noticias/${id}`)}>
                    Leer más
                </Button>
            </CardActions>
        </Card>
    );
}