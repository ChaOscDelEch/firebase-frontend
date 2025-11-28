# ⚛️ Firebase Frontend - Notes Application

React frontend for the WBS Module Certification System with Firebase integration.

## 🏗️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool & dev server
- **TanStack Query** - Data fetching & caching
- **Firebase SDK** - Backend communication
- **TailwindCSS + DaisyUI** - Styling

## 📁 Project Structure

```
firebase-frontend/
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point with QueryProvider
│   ├── firebase.js          # Firebase configuration
│   ├── ModuleDetail.jsx     # Module details component
│   ├── App.css              # App styles
│   └── index.css            # Global styles
├── public/                  # Static assets
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Backend running (firebase-backend emulators or deployed)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev

# Access app at http://localhost:5173
```

The dev server will automatically:
- Hot reload on file changes
- Show TanStack Query DevTools (bottom-left corner)
- Connect to Firebase emulators (if running)

## 🔥 Firebase Configuration

The app connects to Firebase Functions and Firestore:

**Development** (Emulators):
```javascript
connectFunctionsEmulator(functions, '127.0.0.1', 5001);
connectFirestoreEmulator(db, '127.0.0.1', 8080);
```

**Production**: Update `firebase.js` with your production Firebase config.

## 📦 Key Features

### TanStack Query Integration

- **Automatic Caching**: Data cached for 5 minutes
- **Smart Refetching**: Only refetch when data is stale
- **Optimistic Updates**: UI updates before server confirms
- **DevTools**: Inspect queries and cache in development

## 🛠️ Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Features

- ✅ View all notes (with caching)
- ✅ Create new notes
- ✅ Real-time updates
- ✅ Form validation
- ✅ Error handling
- 🔍 TanStack Query DevTools

## 🔗 Backend Integration

**Functions Used**:
- `readNotes()` - Fetch all notes
- `createNote(data)` - Create new note

## 🚢 Deployment

```bash
npm run build
firebase deploy --only hosting
```

## 🔗 Related

- Backend: [firebase-backend repository]

---

**Built for WBS Coding School Certification Module**
