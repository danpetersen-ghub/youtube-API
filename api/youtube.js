const youtubeAPI = {
    baseURL:'https://www.googleapis.com/youtube/v3/search',
    queryparams: `part=snippet&maxResults=10&q=`,
    meta: {
                headers: {
                "Method": "GET",
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:5173/",
            }
        },
    key: 'AIzaSyDlBcMlPbiSqLd1lQmqciaxDG51ks9pzlE',
    documentation: {
        project: 'https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project',
        url: 'https://developers.google.com/youtube/v3/docs/',

    }
    
    
}

export default youtubeAPI ;