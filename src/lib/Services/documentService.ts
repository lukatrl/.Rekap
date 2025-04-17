import { supabase } from '@/lib/supabase';

interface Document {
    id: string;
    title: string;
    transmitter: string;
}

export const getDocumentData = async (): Promise<Document[] | null> => {
    try {
        const { data, error } = await supabase
            .from('document')
            .select('*');


        if (error) {
            throw new Error(error.message);
        }


        return data;
    } catch (error) {
        console.log('Erreur lors de la récupération des documents:', error);
        return null;
    }
};
