# Deployment Guide

## Environment Variables

### Frontend (.env file)
```
REACT_APP_API_URL=http://your-backend-url/api
REACT_APP_SOCKET_URL=http://your-backend-url
```

### Backend (.env file)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
```

## Build Process

1. Frontend:
   ```
   cd frontend
   npm install
   npm run build
   ```

2. Backend:
   ```
   cd backend
   npm install
   npm start
   ```

## Deployment Platforms

Consider deploying the frontend to platforms like Netlify or Vercel, and the backend to platforms like Heroku or DigitalOcean.

Make sure to set the environment variables in your deployment platform's settings.
