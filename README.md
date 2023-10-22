# MC_hackerthon - BlendVision X Smart Medicine
## Introduction
+ This is the repository of the project we developed in Meichu Hackathon 2023.
+ The aim of this project is to utilize [BlendVision](https://www.blendvision.com/zh-tw/) API to develop smart medicine app.
+ In this project, we developed a live stream platform where patients can see a doctor online. For patients who is not willing to show there face to doctor, we used Face detection model and Expression prediction model to predict the expression of the patient, and only show the expression to the doctor. Using this platform, patients can communicate with doctor with their privacy being keeped. 

## Website architecture
+ Below is our website architecture. Users can access the main console by entering [this website](https://kkcompanyweb.web.app)
  + User can either create the live or join an existing live.
  + Users(typically doctors) can create the live. After that, RTMP urls and stream keys will be shown. Doctor need to use some streaming tools(Ex. OBS studio) to stream.
  + Users(typically patients) can join the live. Live's name should be obtained in advance. 
  + For now, only basic streaming functions are implemented. Face detection api integration will be our future work.
  + ![image](https://github.com/shigon255/MC_hackerthon/blob/main/architecture.png)


## Future work
+ As mentioned before, Face detection api(face2emoji) have not yet be integrated.
+ Also, we want to apply react template to this project. We have done some part of the template(please refer to [this repo](https://github.com/aa35037123/medical_stream_filter_mchackathon)), but combination has not yet been done.

## Contributors
+ [@wujoe0415](https://github.com/wujoe0415) and [@aa35037123](https://github.com/aa35037123) contributed the usage of faceapi and react template. 

## Reference
+ [Face2emoji](https://github.com/yuikoito/face2emoji)

