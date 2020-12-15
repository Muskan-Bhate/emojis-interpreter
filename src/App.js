import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🤗": "Hugging Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else {
      setMeaning("Failure to recognize this emoji");
    }
  }

  function emojiOnClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="Header">Emopreter</h1>
      <input
        className="InputArea"
        placeholder="Enter your emoji here to know its meaning"
        onChange={emojiInputHandler}
        style={{ padding: "0.8rem", width: "80%" }}
      ></input>
      <div className="Meaning"> {meaning} </div>
      <div className="Emojis"> emojis we know </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ padding: "0.8rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiOnClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
