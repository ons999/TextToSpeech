"use client"

import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

export default function TextToSpeech() {
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [text, setText] = useState("")

  const handleSpeedChange = (e) => {
    setPlaybackSpeed(e.target.value)
  }

  // Function to convert text to speech
  const handleTextToSpeech = () => {
    if (text.trim() === "") {
      alert("Please enter some text to convert to speech.");
      return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = text;  // Set the text to speak
    speech.rate = playbackSpeed;  // Set playback speed
    speech.volume = 1;  // Set volume level (0 to 1)
    speech.pitch = 1;   // Set pitch (0 to 2)
    
    // Speak the text
    window.speechSynthesis.speak(speech);
  }

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-vh-100 text-center py-5 main-container">
      <div className="container">
        <h1 className="display-4 text-white mb-5 glow-text">Text to Speech Converter</h1>

        <div className="card custom-card mx-auto">
          <div className="card-body p-4">
            <textarea
              className="form-control custom-textarea mb-4"
              rows="6"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <span className="text-white">Playback Speed:</span>
              <div className="slider-container">
                <input
                  type="range"
                  className="form-range custom-range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={playbackSpeed}
                  onChange={handleSpeedChange}
                />
              </div>
              <span className="text-white">{playbackSpeed}x</span>
            </div>

            <button
              className="btn custom-btn w-100"
              onClick={handleTextToSpeech}  // Trigger text-to-speech on click
            >
              Convert to Speech
            </button>
          </div>
        </div>

        <footer className="mt-5">
          <h2 className="text-white h4 glow-text">Debasish</h2>
          <p className="text-white">© {currentYear}. All rights reserved</p>

          <div className="social-icons mt-4">
            <a href="https://github.com/ons999/" className="text-decoration-none mx-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://instagram.com/deba_963" className="text-decoration-none mx-3">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
