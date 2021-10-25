# plant-press

## Link to live web application: [Plant-Press](https://plant-press.herokuapp.com/#/)

Plant-Press is a mobile tracking app that allows plant owners to post their plants and record any reminders neccesary for each plant's care needs. At the same time, plant owners can showcase their plant's progress to their friends through the posts feature and follow their friend's plants to gain updates as their plants grow!

<img width="1280" alt="Screen Shot 2021-10-25 at 2 41 42 PM" src="https://user-images.githubusercontent.com/76461881/138775196-0f3091c6-22f9-4655-8820-ce94284d5de5.png">


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

## Reminders for plant care

This app allows for users to create reminders for plants that then shows up on the homepage. A user is able to click on each reminder to note that they have completed the task for the day. 

<img width="1277" alt="Screen Shot 2021-10-25 at 2 54 12 PM" src="https://user-images.githubusercontent.com/76461881/138776487-726cd24d-66e5-4d2c-bed7-faa91c4743a3.png">


```javascript
handleClick() {
    this.setState({
      completed: true,
    });
    console.log(this.state);
    this.props.updateReminder(this.state);
  }

  render() {
    let { reminder, plant } = this.props;
    if (!reminder || !plant) return null;

    let date = new Date(reminder.updatedAt);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    return (
      <div
        className={
          this.state.completed
            ? "row d-flex justify-content-center reminder-row done"
            : "row d-flex justify-content-center reminder-row"
        }
      >
        <div className="col-9">
          {plant.name}
          <br />
          <span className="note">{reminder.reminderText}</span>
          <br />
          <span className="note">
            Complete every {reminder.frequency} day(s)
          </span>
          <br />
          <span className="note">Last completed: {m + "/" + d}</span>
        </div>
        <div
          className={
            this.state.completed
              ? "col-3 d-flex justify-content-end align-items-center"
              : "col-3 d-flex justify-content-end align-items-center"
          }
          onClick={this.handleClick}
        >
          {this.state.completed ? (
            <ImCheckboxChecked />
          ) : (
            <ImCheckboxUnchecked />
          )}
        </div>
      </div>
    );
  }
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


