import {Box, Skeleton, Stack} from "@mui/material";
import NoteBox from "@/components/note/noteBox";
import NoteSkeleton from "@/components/note/noteSkeleton";


export default function NoteList({data, loading}) {
    console.log("DATOS",data)
    return (
        <>
            <Stack
                spacing={{ xs: 1, sm: 4 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
            { loading ?
                (
                    [...Array(4)].map((x, i) =>
                        <NoteSkeleton key={i} />
                    )
                ) : (data.length === 0 ? (
                    <div>No hay noticias</div>
                ) : (
                    data.map((note, index)=> {
                        return (
                            <NoteBox
                                key={index}
                                id={note._id}
                                title={note.title}
                                urlImage={note.image}
                                description={note.description}
                        />)
                    })
                ))

            }
            </Stack>
        </>
    )
}