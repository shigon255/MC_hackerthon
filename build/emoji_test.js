import * as faceapi from "face-api.js";

export const emoji = async ()=>{
    const MODEL_URL = `/models`;

    await Promise.all([
        faceapi.nets.tinyFaceDetector.load(MODEL_URL),
        faceapi.nets.faceExpressionNet.load(MODEL_URL),
    ]);
};