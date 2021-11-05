# plant-press

Link to live web application: [Plant-Press](https://plant-press.herokuapp.com/#/)

## About Plant-Press
Plant-Press is a mobile tracking app that allows plant owners to post their plants and record any reminders neccesary for each plant's care needs. At the same time, plant owners can showcase their plant's progress to their friends through the posts feature and follow their friend's plants to gain updates as their plants grow!


![plant-press-home](https://user-images.githubusercontent.com/44277861/140561242-e9ac9b4d-b655-4d89-9c4c-03d56c9d5aae.gif)


![image](https://user-images.githubusercontent.com/44277861/140561451-ae21f2bc-bf78-408b-85a7-01cb9d246245.png)



## Technologies Used

BackEnd | Frontend
---|:--
Express | React
MongoDB | Redux
AWS S3 | JavaScript ES6
Node.js | BootStrap

## Upload plant photos

<img width="1279" alt="Screen Shot 2021-10-25 at 2 39 24 PM" src="https://user-images.githubusercontent.com/76461881/138775025-770dc436-b601-4211-9468-42a59179d916.png">


Users are able to create posts for any specific plant and upload progress images. This feature was implemented using a S3 bucket connected to AWS.
```javascript
function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}
```
The first function in this code snippet above allows for a file to be uploaded onto s3 while the second downloads a specific file from s3.

## Reminders for Plant Collection

This app allows for users to create reminders for plants that then shows up on the homepage. The reminders are sorted by the difference between the date it was last completed and the time it would be considered overdued.

<img width="1277" alt="Screen Shot 2021-10-25 at 2 54 12 PM" src="https://user-images.githubusercontent.com/76461881/138776487-726cd24d-66e5-4d2c-bed7-faa91c4743a3.png">


```javascript
  sortedReminders() {
    let { reminders } = this.props;
    let sorted = reminders.sort((a, b) => {
      const lastUpdated1 = new Date(a.completedAt);
      const lastUpdated2 = new Date(b.completedAt);
      const overdued1 = new Date( lastUpdated1.getTime() + (a.frequency * 24 * 60 * 60 * 1000)) 
      const overdued2 = new Date( lastUpdated2.getTime() + (b.frequency * 24 * 60 * 60 * 1000)) 

      const currentDate = new Date();

      if (overdued1 - currentDate <= overdued2 - currentDate ) {
        return -1;
      } else return 1
    })

    return sorted;
  }
```
## Newsfeed and searchbar

Plant owners are able to share their own plants to their followers! One can also search for a specific plant post via keywords to find plants. 

<img width="1280" alt="Screen Shot 2021-10-25 at 2 46 18 PM" src="https://user-images.githubusercontent.com/76461881/138775912-ccdc1d8a-cf6e-4a8a-a583-b5ad88af56eb.png">



```javascript
router.get("/index", (req, res) => {
  Plant.find({
    $or: [
      { name: { $regex: req.query.keyword, $options: "i" } },
      { type: { $regex: req.query.keyword, $options: "i" } },
      { info: { $regex: req.query.keyword, $options: "i" } },
      { species: { $regex: req.query.keyword, $options: "i" } },
    ],
  }).then((plants) => {
    let relativePosts = [];
    plants.forEach((plant) => {
      relativePosts.push(...plant.plantPosts);
    });

    Post.find({
      _id: { $in: relativePosts },
    })
      .sort({ updatedAt: -1 })
      .then((posts) => res.json(posts));
  });
});
```
The code snippet above displays how the backend routes were created for the logic for the searchbar feature. 

## Future Plans and Directions 

* Add a plant API for species.
* Add a tracker for plant statistics and graphs to chart growth.
* Generate playlists for plant types to stimulate growth. 
