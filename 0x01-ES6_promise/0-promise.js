export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const apiResponse = "Sample API response"; // Replace with actual API response
      const success = true; // Replace with logic to determine success or failure

      if (success) {
        resolve(apiResponse); // Resolve the promise with the API response
      } else {
        reject(new Error("API request failed")); // Reject the promise with an error
      }
    }, 2000); // Simulated delay of 2 seconds
  });
}