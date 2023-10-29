import { useState } from 'react';

export function useData<T>(action: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const runAction = () => {
        setLoading(true);
        action()
            .then((res) => {
                setData(res);
                setLoading;
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    };

    return { data, loading, runAction };
}
