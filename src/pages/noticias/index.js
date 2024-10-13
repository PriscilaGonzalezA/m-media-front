import {useEffect, useState} from "react";
import {getNotesRequest} from "@/utils/generateRequest";
import {Alert, Box, Container, Grid, Skeleton, Stack} from "@mui/material";
import Title from "@/components/utils/title";
import NoteList from "@/components/note/noteList";


export default function Noticias() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNewsData();
    }, []);

    const getNewsData = async () => {
        setLoading(true)
        setError(null)
        const response = await getNotesRequest();
        if (response.error) {
            setError(response.message);
        } else {
            setData(response.data)
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <Container className={"h-auto"}>
            <Title title={"Noticias de Mega Media"} />
            { error ?
                <Alert variant="filled" severity="error">
                    Ocurrió un error: {error}
                </Alert> :
                <NoteList data={data} loading={loading} />
            }
        </Container>
    );
}