import React, { useRef, useState } from "react";

export default function Recorder() {
    const recorderRef = useRef(null);
    const chunksRef = useRef([]);
    const [audioURL, setAudioURL] = useState(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorderRef.current = new MediaRecorder(stream);

        recorderRef.current.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunksRef.current.push(e.data)
            }
        }


        recorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "audio/webm" })
            const url = URL.createObjectURL(blob);
            setAudioURL(url)
            chunksRef.current = []
        }
        recorderRef.current.start();
        console.log("Recording started...")
    }

    const stopRecording = () => {
        recorderRef.current.stop();
        console.log("Recording stopped...")
    };

    return (
        <div>
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>

            {audioURL && (
                <div>
                    <h3>Playback</h3>
                    <audio controls src={audioURL}></audio>
                </div>
            )}
        </div>
    );
}
