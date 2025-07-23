# Food Genius

A smart food suggestion web application that learns your taste preferences over time.

## Features

- **Smart Suggestions**: Get personalized food recommendations based on your previous choices
- **Learning Algorithm**: The app learns your preferences and adapts its suggestions accordingly
- **Context Awareness**: Takes into account time of day and day of the week for better suggestions
- **Manual Logging**: Log foods you're eating outside of suggestions to help train the system
- **Data Management**: Export, import, and clear your preference data
- **Offline Capability**: Works even without an internet connection (PWA)
- **Responsive Design**: Works on mobile devices and desktops

## How It Works

### Learning Mechanism

1. **Base Score**: Each food item starts with a base score of 1.0
2. **Accepting Suggestions**: 
   - When you accept a food suggestion (click "Accept"), the score increases by 0.2 (capped at 5.0)
   - Your accept count for that food increases by 1
   - A timestamp of when you last accepted that food is recorded
3. **Declining Suggestions**:
   - When you decline a food suggestion (click "Decline"), the score decreases by 0.1 (with a minimum of 0.1)
   - Your decline count for that food increases by 1
4. **Manual Logging**:
   - When you manually log a food choice, it's treated the same as accepting a suggestion

### Context Awareness

The system tracks:
- Time of day preferences (morning, lunch, afternoon, dinner)
- Day of week preferences (Monday through Sunday)

These patterns provide bonuses to the score during relevant times.

### Recency Penalty

To avoid repetition:
- Foods accepted within the last day get a 70% reduction in their selection weight
- Foods accepted within the last 3 days get a 30% reduction

## Usage

1. **Add Foods**: Use the input field to add food options you like
2. **Get Suggestions**: Click "Get Food Suggestion!" to receive a personalized recommendation
3. **Provide Feedback**: Accept or decline suggestions to train the system
4. **Manual Logging**: Use the dropdown to log foods you're eating outside of suggestions
5. **View Stats**: Toggle the stats panel to see your preference data and recent decisions
6. **Manage Data**: Use the data management section to export, import, or clear your data

## Data Management

- **Export Data**: Download your food preferences and history as a JSON file
- **Import Data**: Restore your preferences from a previously exported JSON file
- **Clear Storage**: Remove all stored data and reset to defaults

## Installation

As a Progressive Web App (PWA), Food Genius can be installed on your device:

1. Open the app in a modern browser (Chrome, Edge, Firefox, Safari)
2. Look for the install prompt or use your browser's menu to install
3. The app will work offline after installation

## Technical Details

- Uses localStorage for data persistence
- Implements a weighted random selection algorithm for suggestions
- Built with vanilla HTML, CSS, and JavaScript (no frameworks)
- Fully responsive design
- Offline capability through service worker implementation

## Privacy

All data is stored locally in your browser's localStorage. No data is sent to any server or third party.