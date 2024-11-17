import React, { useState, useCallback } from "react";

// Custom hook for fetching data from an API
export default function useFetchData(url, options = {}) {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to manage the loading state of the fetch request
  const [loading, setLoading] = useState(false);
  // State to store any error encountered during the fetch
  const [error, setError] = useState(null);

  // Function to fetch data from the given URL
  const fetchData = useCallback(async () => {
    setLoading(true); // Set loading state to true when the fetch begins
    try {
      // Making a fetch request with the provided URL and options
      const response = await fetch(url, options);
      // Check if the response status is not OK (status code not 2xx)
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Throw an error if response is not ok
      }
      const result = await response.json(); // Parse the JSON response
      setData(result); // Update the data state with the fetched result
    } catch (err) {
      // Catch and handle errors during the fetch
      setError(err.message || "An error occurred while fetching data"); // Set an error message
    } finally {
      setLoading(false); // Set loading state to false when fetch is complete
    }
  }, [url, options]); // Dependencies to recompute the callback function

  // Returning the state variables and the fetch function
  return { data, loading, error, fetchData };
}
