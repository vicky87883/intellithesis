import axios from 'axios';

// Hardcode production URLs to override any localhost environment variables
const API_BASE_URL = 'https://intellithesis.com/api';
const AI_BACKEND_URL = 'https://intellithesis.com/ai';

// Create axios instance with default config
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create AI backend axios instance
const aiApi = axios.create({
  baseURL: `${AI_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Helper function to get user ID from localStorage (fallback)
const getUserId = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      const userData = JSON.parse(user);
      return userData.id || 'eb5dba5c-ab36-4469-a169-bb987d61f67a'; // fallback for testing
    } catch (e) {
      return 'eb5dba5c-ab36-4469-a169-bb987d61f67a'; // fallback for testing
    }
  }
  return 'eb5dba5c-ab36-4469-a169-bb987d61f67a'; // fallback for testing
};

// API endpoints
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data),
};

export const documentAPI = {
  upload: (formData: FormData) => api.post('/documents/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getAll: () => api.get('/documents'),
  getById: (id: string) => api.get(`/documents/${id}`),
  update: (id: string, data: any) => api.put(`/documents/${id}`, data),
  delete: (id: string) => api.delete(`/documents/${id}`),
  analyze: (id: string) => api.post(`/documents/${id}/analyze`),
};

export const chatAPI = {
  // Updated to accept user_id parameter for NextAuth compatibility
  sendMessage: (message: string, context: string = '', sessionId: string = '', userId?: string) => 
    aiApi.post('/research-assistant/chat/json', { 
      message, 
      user_id: userId || getUserId(),
      context,
      session_id: sessionId
    }),
  
  // Get chat sessions for user
  getHistory: (userId?: string) => aiApi.get(`/research-assistant/sessions/${userId || getUserId()}`),
  
  // Alternative JSON endpoint for history
  getHistoryJSON: (userId?: string) => aiApi.post('/research-assistant/history', { user_id: userId || getUserId() }),
  
  // Get messages for specific session
  getSessionMessages: (sessionId: string) => aiApi.get(`/research-assistant/session/${sessionId}/messages`),
  
  // Delete a session
  deleteSession: (sessionId: string) => aiApi.delete(`/research-assistant/session/${sessionId}`),
  
  // Health check
  getHealth: () => aiApi.get('/research-assistant/health'),
};

export const researchAssistantAPI = {
  // Upload and analyze document
  uploadDocument: (file: File, sessionId: string = '', documentType: string = 'general', userId?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId || getUserId());
    formData.append('session_id', sessionId);
    formData.append('document_type', documentType);
    return aiApi.post('/research-assistant/upload-document', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  // Upload and process image
  uploadImage: (file: File, sessionId: string = '', task: string = 'describe', userId?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId || getUserId());
    formData.append('session_id', sessionId);
    formData.append('task', task);
    return aiApi.post('/research-assistant/upload-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  // Process voice message
  processVoice: (audioFile: File, sessionId: string = '', userId?: string) => {
    const formData = new FormData();
    formData.append('audio_file', audioFile);
    formData.append('user_id', userId || getUserId());
    formData.append('session_id', sessionId);
    return aiApi.post('/research-assistant/voice', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  // Health check
  getHealth: () => aiApi.get('/research-assistant/health'),
  
  // Legacy endpoints for compatibility
  analyzeDocument: (file: File, userId?: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId || getUserId());
    return aiApi.post('/research-assistant/upload-document', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  getAnalysis: (documentId: string) => aiApi.get(`/research-assistant/analysis/${documentId}`),
  generateSummary: (documentId: string) => aiApi.post(`/research-assistant/summary/${documentId}`),
  getSuggestions: (documentId: string) => aiApi.get(`/research-assistant/suggestions/${documentId}`),
};

export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getRecentActivity: () => api.get('/dashboard/activity'),
};

export default api;