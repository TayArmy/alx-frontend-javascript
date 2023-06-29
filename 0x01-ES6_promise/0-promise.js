function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here

    // Simulating an asynchronous operation with a setTimeout
    setTimeout(() => {
      const data = "Response data from API"; // Replace with actual API response data

      // Resolve the promise with the data
      resolve(data);
    }, 2000); // Simulating a delay of 2 seconds
  });
}

export default getResponseFromAPI;