import * as faceapi from "face-api.js";

const loadModels = async () => {
    const MODEL_URL = `/models`;

    await Promise.all([
        faceapi.nets.tinyFaceDetector.load(MODEL_URL),
        faceapi.nets.faceExpressionNet.load(MODEL_URL),
    ]);
}
const handleLoadWaiting = async () => {
    return new Promise((resolve) => {
      const timer = setInterval(() => {
        if (webcamRef.current?.video?.readyState == 4) {
            resolve(true);
            clearInterval(timer);
          }
    }, 500);
  });
};
export async function emoji(){
    await loadModels();
    await handleLoadWaiting();

    const detectionsWithExpressions = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
        if (detectionsWithExpressions.length > 0) {
            console.log(detectionsWithExpressions.map(detectionsWithExpression).expressions);
        }
    let images;
    expressions.forEach((element) => images.push(`/emojis/`+element+`.png`));
    return images;
};