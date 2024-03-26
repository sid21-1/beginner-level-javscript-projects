// Construct the API request URL with query parameters

//https://opentdb.com/api.php?amount=1
const apiUrl = "https://the-trivia-api.com/v2/questions";
const queryParams = {
  category: "history",
  difficulty: "medium",
  limit: 10,
};
const queryString = new URLSearchParams(queryParams).toString();
const requestUrl = `${apiUrl}?${queryString}`;

// Make the API request
fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved questions data
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching questions:", error);
  });
