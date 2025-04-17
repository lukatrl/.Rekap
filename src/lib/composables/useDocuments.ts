import { useEffect, useState } from 'react';
import { getDocumentData } from '../Services/documentService';

export const useCompsableDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]  = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const data : any = await getDocumentData();
                setDocuments(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []); 

    return { documents, loading, error };
};