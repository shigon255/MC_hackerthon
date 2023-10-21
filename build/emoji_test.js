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
function scoreExpression(expressions, scores){
    //console.log(scores);
    const max = Math.max.apply(null, scores);
    if(scores[0] == max)
    {
      const neutral = scores.shift();
      const second = Math.max.apply(null, scores);
      if(max/second > 2 && second != 0)
        return expressions[0];
      else
        return expressions[scores.findIndex((score) => score === second)]
    }
    else{
      const index = scores.findIndex((score) => score === max);
      return expressions[index];
    }

}
export async function emoji(){
    await loadModels();
    await handleLoadWaiting();

    const detectionsWithExpressions = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
          let expressions;
        if (detectionsWithExpressions.length > 0) {
            for (let i = 0; i < detectionsWithExpressions.length ; i++) {
                const Array = Object.entries(detectionsWithExpressions[i].expressions);
                const expressionsArray = Array.map((j) => j[0]);
                const scoresArray = Array.map((i) => i[1]);
                const max = Math.max.apply(null, scoresArray);
                const index = scoresArray.findIndex((score) => score === max);
                const expression = scoreExpression(expressionsArray, scoresArray);
                expressions.push(expression);
                // const log = scoresArray.map((element, index)=>{
                //   return `${expressionsArray[index]} : ${element}`
                //});
            }
        }
    return expressions;
};