# Sequential Chatbot

A predictive chatbot built using a Keras Sequential model and Flask. This chatbot responds to user input using a trained deep learning model, all inside a simple web-based chat interface.

## Features

- Predictive chatbot using TensorFlow/Keras Sequential model  
- Clean web interface (HTML, CSS, JS)  
- Flask backend for chatbot logic  
- Easy to extend with new training data  

## Project Structure  
sequential-chatbot/

├── app.py              # Flask backend logic  

├── templates/  
│   └── index.html      # Frontend interface  

├── static/  
│   ├── script.js       # Handles user interaction  
│   └── style.css       # Chat UI styling  

├── requirements.txt    # Python dependencies  

## Installation

### Requirements

- Python 3.x  
- pip  

### Steps

1. Clone this repo:

```bash
git clone https://github.com/s-meher/sequential-chatbot.git
cd sequential-chatbot
```

2. Install the required libraries:

```bash
pip install -r requirements.txt
```

3. Run the app:

```bash
python app.py
```

### How it Works
You type a message in the browser.

JavaScript sends the message to the Flask backend (app.py).

The backend uses a trained Keras model to predict a response.

The message and response are shown in the chat window.
