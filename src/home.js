import chalk from 'chalk';
import dotenv from 'dotenv';
import Together from 'together-ai'; // Import Together SDK


const API_KEY = "0a632eb7ef38d9c31ebb7739dc1ed7cec9befe43455b0d536c1d97ef36c4d4ab"; // Add your Automate API key in the .env file

async function sendPrompt(prompt) {
  console.log('Sending request to Automate API...');

  try {
    const response = await axios({
      method: 'post',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      data: {
        prompt: prompt
      }
    });

    const responseData = response.data;
    console.log('Response received from Automate API:', responseData);

    return responseData.result; // Assuming the API returns the result in a field named 'result'
  } catch (error) {
    console.error('Error from Automate API:', error.message);
    throw error;
  }
}

export { sendPrompt };