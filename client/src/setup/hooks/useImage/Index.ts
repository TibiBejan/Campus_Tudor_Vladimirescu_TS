import { useState, useEffect } from 'react';

const useImage = (fileName: string): {loading: boolean, error: string | null, image: string | null} => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        const fetchImage = async () => {
            try{
                const repsonse = await import(`../../../assets/${fileName}`);
                setImage(repsonse.default);
            }
            catch(err: any) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchImage();
    }, [fileName]);

    return {
        loading,
        error,
        image
    }
}

export { useImage };