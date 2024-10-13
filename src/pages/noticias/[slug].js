import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getNoteRequest} from "@/utils/generateRequest";
import Title from "@/components/utils/title";
import {Alert, Container} from "@mui/material";

import dynamic from 'next/dynamic';
const NoteDetail = dynamic(() => import("@/components/note/noteDetail"), {
    ssr: false,
});

export default function SlugNote() {
    const {
        query: { slug },
    } = useRouter();

    const [note, setNote] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        if (slug) getNoteData();
    },[slug]);

    const getNoteData = async () => {
        setLoading(true)
        setError(null)
        const response = await getNoteRequest(slug);
        if (response.error) {
            setError(response.error);
        } else {
            setNote(response.data)
        }
        setLoading(false);
    }

    return (
        <Container className={"h-auto"}>
            <Title title={note?.title} />
            { error ?
                <Alert variant="filled" severity="error">
                    Ocurrió un error: {error}
                </Alert> :
                <NoteDetail note={note} loading={loading} />
            }
        </Container>
    )
}