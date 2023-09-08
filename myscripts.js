// API key to access the YouTube Data API
const APIKey = 'AIzaSyBfnD0hcj0Xr1SUQ0LNE9U7kRHDRh8N6Zw';

// User ID of the YouTube channel
const Userid = 'UCWxlUwW9BgGISaakjGM37aw';

// DOM elements to display the subscriber, view, and video counts
const subscriberCount = document.getElementById('subCount');
const viewCount = document.getElementById('viewCount');
const videoCount = document.getElementById('vidCount');

// Function to fetch data from the YouTube Data API
let getdata = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      // Update the DOM elements with the fetched data
      subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
      viewCount.innerHTML = data["items"][0].statistics.viewCount;
      videoCount.innerHTML = data["items"][0].statistics.videoCount;
    });
};

// Call the getdata function to fetch and display the YouTube channel statistics
getdata();
