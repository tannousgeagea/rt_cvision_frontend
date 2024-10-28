import { useState, useEffect } from "react";
import useFetchData from "./use-fetch-data";

const useServiceData = (baseURL, serviceID) => {
    const [finalData, setFinalData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Step 1: Fetch the service API URL
    const { data: apiData, loading: apiLoading, error: apiError } = useFetchData(`${baseURL}/api/v1/instances/api/${serviceID}`);
    const api_url = apiData?.api_url;

    // Step 2: Fetch processor data once `api_url` is available
    const { data: processorData, loading: processorLoading, error: processorError } = useFetchData(api_url ? `${api_url}/api/v1/processor` : null);

    // Combine loading and error states
    useEffect(() => {
        if (apiLoading || processorLoading) {
            setLoading(true);
        } else {
            setLoading(false);
        }

        if (apiError) {
            setError(apiError);
        } else if (processorError) {
            setError(processorError);
        } else {
            setError(null);
        }

        if (processorData) {
            setFinalData(processorData);
        }
    }, [apiLoading, processorLoading, apiError, processorError, processorData]);

    return { data: finalData, loading, error };
};

export default useServiceData;
