# Woddle - Baby Tracking App

A React Native mobile application for tracking baby's daily activities, milestones, and development.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- React Native development environment setup

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd woddle
```

2. Install dependencies:

```bash
yarn install
```

### Running the Application

1. Start the mock backend server (JSON Server):

```bash
yarn server
```

This will start JSON Server on http://localhost:3000

2. Start the React Native development server:

```bash
yarn start
```

3. Run on specific platform:

```bash
# For iOS
yarn ios

# For Android
yarn android
```

- **iOS Simulator**: Uses `localhost` since it runs on the same machine
- **Android Emulator**: Uses `10.0.2.2` which is the special alias to reach host machine's localhost
- Both platforms will correctly connect to the JSON Server running on your development machine

## Tech Stack

### Backend Mock 

- **JSON Server**: Lightweight mock backend that transforms a JSON file into a RESTful API
  - Located in `db.json`
  - Provides endpoints for baby tracking data
  - Run with `yarn server`
