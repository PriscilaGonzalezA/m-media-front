import {useEffect, useState} from "react";
import {getNotesRequest} from "@/utils/generateRequest";
import {Alert, Container} from "@mui/material";
import Title from "@/components/utils/title";

import dynamic from 'next/dynamic';
const NoteList = dynamic(() => import("@/components/note/noteList"), {
    ssr: false,
});

export default function Noticias() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNotesData();
    }, []);

    const getNotesData = async () => {
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