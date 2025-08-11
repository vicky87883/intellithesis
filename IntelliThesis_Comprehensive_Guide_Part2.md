# IntelliThesis Comprehensive Tech Stack Interview Guide
## 50+ Questions from Basic to Advanced - Part 2

---

## Table of Contents
6. [Database & ORM](#database-orm)
7. [Authentication & Security](#authentication-security)
8. [Python & FastAPI](#python-fastapi)
9. [AI/ML Integration](#ai-ml-integration)
10. [DevOps & Deployment](#devops-deployment)
11. [System Design](#system-design)
12. [Testing & Quality Assurance](#testing-qa)
13. [Performance & Optimization](#performance-optimization)
14. [Real-time & WebSockets](#realtime-websockets)
15. [Advanced Concepts](#advanced-concepts)

---

## Database & ORM <a name="database-orm"></a>

### Basic Level

**Q36: What are the differences between SQL and NoSQL databases?**

**Answer:**
- **SQL**: Structured, relational, ACID properties, fixed schema
- **NoSQL**: Flexible schema, horizontal scaling, eventual consistency

**Q37: How do you connect to MongoDB in Node.js?**

**Answer:**
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

**Q38: How do you implement database indexing?**

**Answer:**
```javascript
// MongoDB indexing
db.users.createIndex({ email: 1 }, { unique: true });
db.posts.createIndex({ title: "text", content: "text" });

// Mongoose
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true },
  name: { type: String, index: true }
});
```

### Intermediate Level

**Q39: How do you implement database transactions?**

**Answer:**
```javascript
// MongoDB transactions
const session = await mongoose.startSession();
session.startTransaction();

try {
  await User.create([{ name: 'John' }], { session });
  await Account.create([{ userId: 'john-id', balance: 100 }], { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

**Q40: How do you optimize database queries?**

**Answer:**
```javascript
// Use projection to select only needed fields
const users = await User.find({}, 'name email');

// Use aggregation for complex queries
const result = await User.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: '$city', count: { $sum: 1 } } }
]);

// Use lean() for read-only operations
const users = await User.find({}).lean();
```

### Advanced Level

**Q41: How do you implement database sharding?**

**Answer:**
```javascript
// MongoDB sharding configuration
sh.enableSharding("mydb")
sh.shardCollection("mydb.users", { "email": "hashed" })

// Application-level sharding
function getShardKey(userId) {
  return userId % 4; // 4 shards
}

function getShardConnection(shardKey) {
  const connections = [
    'mongodb://shard1:27017',
    'mongodb://shard2:27017',
    'mongodb://shard3:27017',
    'mongodb://shard4:27017'
  ];
  return connections[shardKey];
}
```

---

## Authentication & Security <a name="authentication-security"></a>

### Basic Level

**Q42: How does JWT authentication work?**

**Answer:**
JWT (JSON Web Token) consists of three parts: header, payload, and signature. The server creates a signed token containing user data, which the client stores and sends with requests.

**Q43: How do you hash passwords securely?**

**Answer:**
```javascript
const bcrypt = require('bcryptjs');

// Hash password
const hashedPassword = await bcrypt.hash(password, 12);

// Verify password
const isValid = await bcrypt.compare(password, hashedPassword);
```

**Q44: How do you implement session-based authentication?**

**Answer:**
```javascript
const session = require('express-session');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true }
}));

app.post('/login', (req, res) => {
  // Verify credentials
  req.session.userId = user.id;
  res.json({ success: true });
});
```

### Intermediate Level

**Q45: How do you implement role-based access control (RBAC)?**

**Answer:**
```javascript
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

app.get('/admin', checkRole(['admin']), (req, res) => {
  res.json({ message: 'Admin access granted' });
});
```

**Q46: How do you implement API key authentication?**

**Answer:**
```javascript
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }
  
  // Validate API key
  const isValidKey = validateApiKey(apiKey);
  if (!isValidKey) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  
  next();
};

app.use('/api/', apiKeyAuth);
```

### Advanced Level

**Q47: How do you implement OAuth 2.0?**

**Answer:**
```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Handle user authentication
  return done(null, profile);
}));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/dashboard')
);
```

**Q48: How do you implement two-factor authentication (2FA)?**

**Answer:**
```javascript
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

// Generate secret
const secret = speakeasy.generateSecret({
  name: 'MyApp'
});

// Generate QR code
const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);

// Verify token
const verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: userProvidedToken
});
```

---

## Python & FastAPI <a name="python-fastapi"></a>

### Basic Level

**Q49: What are the advantages of FastAPI over Flask?**

**Answer:**
- Better performance (built on Starlette)
- Automatic API documentation
- Type hints and validation
- Modern async support
- Built-in data validation with Pydantic

**Q50: How do you create a basic FastAPI application?**

**Answer:**
```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/items/")
def create_item(item: Item):
    return item
```

### Intermediate Level

**Q51: How do you implement dependency injection in FastAPI?**

**Answer:**
```python
from fastapi import Depends

def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/")
def read_users(db: Database = Depends(get_db)):
    return db.get_users()
```

**Q52: How do you handle file uploads in FastAPI?**

**Answer:**
```python
from fastapi import File, UploadFile

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    # Process file contents
    return {"filename": file.filename}
```

### Advanced Level

**Q53: How do you implement custom middleware in FastAPI?**

**Answer:**
```python
from fastapi import Request
import time

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```

**Q54: How do you implement background tasks in FastAPI?**

**Answer:**
```python
from fastapi import BackgroundTasks

def send_email(email: str, message: str):
    # Send email logic
    pass

@app.post("/send-notification/")
async def send_notification(
    email: str, 
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_email, email, "Hello!")
    return {"message": "Notification sent in background"}
```

---

## AI/ML Integration <a name="ai-ml-integration"></a>

### Basic Level

**Q55: How do you integrate OpenAI API in a FastAPI application?**

**Answer:**
```python
from openai import OpenAI
from fastapi import FastAPI

client = OpenAI(api_key="your-api-key")

@app.post("/analyze")
async def analyze_text(content: str):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": content}]
    )
    return {"analysis": response.choices[0].message.content}
```

**Q56: How do you implement prompt engineering for better AI responses?**

**Answer:**
```python
def create_analysis_prompt(document_content: str) -> str:
    return f"""
    Analyze the following academic document and provide:
    1. Key themes and concepts
    2. Citation suggestions
    3. Writing quality assessment
    4. Research gaps identified
    
    Document: {document_content}
    
    Please provide a structured analysis with clear sections.
    """

@app.post("/analyze-document")
async def analyze_document(document: Document):
    prompt = create_analysis_prompt(document.content)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return {"analysis": response.choices[0].message.content}
```

### Intermediate Level

**Q57: How do you implement AI response caching and rate limiting?**

**Answer:**
```python
import redis
from functools import lru_cache

redis_client = redis.Redis(host='localhost', port=6379, db=0)

@app.post("/analyze-cached")
async def analyze_with_cache(content: str):
    # Generate cache key
    cache_key = f"analysis:{hash(content)}"
    
    # Check cache first
    cached_result = redis_client.get(cache_key)
    if cached_result:
        return {"analysis": cached_result.decode(), "cached": True}
    
    # Call AI API
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": content}]
    )
    
    result = response.choices[0].message.content
    
    # Cache result for 1 hour
    redis_client.setex(cache_key, 3600, result)
    
    return {"analysis": result, "cached": False}
```

**Q58: How do you implement streaming AI responses?**

**Answer:**
```python
from fastapi import StreamingResponse
import asyncio

async def generate_streaming_response(prompt: str):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )
    
    for chunk in response:
        if chunk.choices[0].delta.content:
            yield f"data: {chunk.choices[0].delta.content}\n\n"
    
    yield "data: [DONE]\n\n"

@app.post("/stream-analyze")
async def stream_analyze(content: str):
    return StreamingResponse(
        generate_streaming_response(content),
        media_type="text/plain"
    )
```

### Advanced Level

**Q59: How do you implement fine-tuning for custom AI models?**

**Answer:**
```python
def prepare_training_data(documents: List[Document]) -> List[dict]:
    training_data = []
    for doc in documents:
        training_data.append({
            "messages": [
                {"role": "system", "content": "You are an academic writing assistant."},
                {"role": "user", "content": f"Analyze this document: {doc.content}"},
                {"role": "assistant", "content": doc.analysis}
            ]
        })
    return training_data

@app.post("/fine-tune")
async def create_fine_tune(training_data: List[dict]):
    # Upload training data
    with open("training_data.jsonl", "w") as f:
        for item in training_data:
            f.write(json.dumps(item) + "\n")
    
    # Create fine-tuning job
    response = client.fine_tuning.jobs.create(
        training_file="training_data.jsonl",
        model="gpt-3.5-turbo"
    )
    
    return {"job_id": response.id}
```

---

## DevOps & Deployment <a name="devops-deployment"></a>

### Basic Level

**Q60: How do you create a Dockerfile for a Node.js application?**

**Answer:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Q61: How do you create a multi-stage Docker build?**

**Answer:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Intermediate Level

**Q62: How do you implement CI/CD with GitHub Actions?**

**Answer:**
```yaml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
      - name: Deploy to staging
        if: github.ref == 'refs/heads/main'
        run: |
          # Deployment logic
```

**Q63: How do you implement blue-green deployment?**

**Answer:**
```yaml
# Docker Compose for blue-green deployment
version: '3.8'
services:
  app-blue:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3

  app-green:
    build: .
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 0

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

### Advanced Level

**Q64: How do you implement infrastructure as code with Terraform?**

**Answer:**
```hcl
# main.tf
provider "aws" {
  region = "us-west-2"
}

resource "aws_ecs_cluster" "main" {
  name = "intellithesis-cluster"
}

resource "aws_ecs_service" "app" {
  name            = "intellithesis-app"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 3

  load_balancer {
    target_group_arn = aws_lb_target_group.app.arn
    container_name   = "app"
    container_port   = 3000
  }
}
```

---

## System Design <a name="system-design"></a>

### Basic Level

**Q65: How would you design a scalable microservices architecture?**

**Answer:**
- **Service Decomposition**: Break down by business capabilities
- **API Gateway**: Centralized routing and authentication
- **Service Discovery**: Dynamic service registration
- **Load Balancing**: Distribute traffic across instances
- **Database per Service**: Independent data storage

**Q66: How do you implement service discovery?**

**Answer:**
```javascript
// Using Consul for service discovery
const consul = require('consul')();

// Register service
consul.agent.service.register({
  name: 'user-service',
  address: 'localhost',
  port: 3001,
  check: {
    http: 'http://localhost:3001/health',
    interval: '10s'
  }
});

// Discover service
consul.catalog.service.nodes('user-service', (err, result) => {
  if (err) throw err;
  console.log('Available instances:', result);
});
```

### Intermediate Level

**Q67: How do you implement distributed tracing?**

**Answer:**
```javascript
// Using OpenTelemetry
const { trace } = require('@opentelemetry/api');

const tracer = trace.getTracer('my-service');

app.get('/api/users', async (req, res) => {
  const span = tracer.startSpan('get-users');
  try {
    const users = await User.find();
    span.setStatus({ code: SpanStatusCode.OK });
    res.json(users);
  } catch (error) {
    span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    res.status(500).json({ error: error.message });
  } finally {
    span.end();
  }
});
```

### Advanced Level

**Q68: How do you implement event-driven architecture?**

**Answer:**
```javascript
// Using EventEmitter
const EventEmitter = require('events');

class OrderService extends EventEmitter {
  createOrder(orderData) {
    // Process order
    const order = this.processOrder(orderData);
    
    // Emit events
    this.emit('order.created', order);
    this.emit('inventory.updated', order.items);
    this.emit('notification.sent', order.userId);
    
    return order;
  }
}

// Event listeners
orderService.on('order.created', (order) => {
  // Handle order creation
});

orderService.on('inventory.updated', (items) => {
  // Update inventory
});
```

**Q69: How do you implement circuit breaker pattern?**

**Answer:**
```javascript
class CircuitBreaker {
  constructor(failureThreshold = 5, timeout = 60000) {
    this.failureThreshold = failureThreshold;
    this.timeout = timeout;
    this.failures = 0;
    this.state = 'CLOSED';
    this.lastFailureTime = null;
  }

  async call(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }

  onFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();
    
    if (this.failures >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }
}
```

---

## Testing & Quality Assurance <a name="testing-qa"></a>

### Basic Level

**Q70: How do you write unit tests for React components?**

**Answer:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Intermediate Level

**Q71: How do you implement integration tests for API endpoints?**

**Answer:**
```javascript
// Using Jest and Supertest
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users returns users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBe(true);
  });
});
```

### Advanced Level

**Q72: How do you implement end-to-end testing?**

**Answer:**
```javascript
// Using Playwright
import { test, expect } from '@playwright/test';

test('user can create an account', async ({ page }) => {
  await page.goto('/signup');
  await page.fill('[data-testid="email"]', 'test@example.com');
  await page.fill('[data-testid="password"]', 'password123');
  await page.click('[data-testid="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('[data-testid="welcome"]')).toContainText('Welcome');
});
```

---

## Performance & Optimization <a name="performance-optimization"></a>

### Basic Level

**Q73: How do you optimize React component rendering?**

**Answer:**
```javascript
// Use React.memo for component memoization
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{expensiveCalculation(data)}</div>;
});

// Use useMemo for expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// Use useCallback for function memoization
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### Intermediate Level

**Q74: How do you implement caching strategies?**

**Answer:**
```javascript
// Redis caching
const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key) {
  const cached = await client.get(key);
  if (cached) {
    return JSON.parse(cached);
  }
  
  const data = await fetchDataFromDatabase();
  await client.setex(key, 3600, JSON.stringify(data)); // Cache for 1 hour
  return data;
}

// CDN caching
app.use('/static', express.static('public', {
  maxAge: '1d',
  etag: true
}));
```

### Advanced Level

**Q75: How do you implement lazy loading and code splitting?**

**Answer:**
```javascript
// React lazy loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Dynamic imports
const loadModule = async (moduleName) => {
  const module = await import(`./modules/${moduleName}`);
  return module.default;
};
```

---

## Real-time & WebSockets <a name="realtime-websockets"></a>

### Basic Level

**Q76: How do you implement WebSocket connections?**

**Answer:**
```javascript
// Server-side with Socket.IO
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Client-side
const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('Connected to server');
});
```

### Intermediate Level

**Q77: How do you implement real-time chat functionality?**

**Answer:**
```javascript
// Server
io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });
  
  socket.on('send-message', (data) => {
    io.to(data.roomId).emit('new-message', {
      user: data.user,
      message: data.message,
      timestamp: new Date()
    });
  });
});

// Client
socket.emit('join-room', roomId);
socket.on('new-message', (data) => {
  addMessageToChat(data);
});
```

### Advanced Level

**Q78: How do you implement real-time collaboration features?**

**Answer:**
```javascript
// Operational Transformation for real-time editing
class Document {
  constructor() {
    this.content = '';
    this.operations = [];
  }
  
  applyOperation(operation) {
    // Apply operational transformation
    const transformedOp = this.transformOperation(operation);
    this.content = this.applyToContent(this.content, transformedOp);
    this.operations.push(transformedOp);
    return transformedOp;
  }
  
  transformOperation(newOp) {
    // Implement operational transformation algorithm
    // This is a simplified version
    return newOp;
  }
}
```

---

## Advanced Concepts <a name="advanced-concepts"></a>

### Advanced Level

**Q79: How do you implement a custom state management solution?**

**Answer:**
```javascript
class Store {
  constructor(reducer, initialState = {}) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
  }
  
  getState() {
    return this.state;
  }
  
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

// Usage
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const store = new Store(reducer, { count: 0 });
```

**Q80: How do you implement a custom router?**

**Answer:**
```javascript
class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
  }
  
  addRoute(path, component) {
    this.routes.set(path, component);
  }
  
  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }
  
  handleRoute() {
    const path = window.location.pathname;
    const component = this.routes.get(path);
    
    if (component) {
      this.currentRoute = component;
      this.render();
    }
  }
  
  render() {
    const root = document.getElementById('root');
    root.innerHTML = this.currentRoute();
  }
}
```

**Q81: How do you implement a custom hook for API calls?**

**Answer:**
```javascript
function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  return { data, loading, error };
}
```

**Q82: How do you implement a custom form validation library?**

**Answer:**
```javascript
class FormValidator {
  constructor(schema) {
    this.schema = schema;
    this.errors = {};
  }
  
  validate(data) {
    this.errors = {};
    
    Object.keys(this.schema).forEach(field => {
      const rules = this.schema[field];
      const value = data[field];
      
      rules.forEach(rule => {
        if (!this.validateRule(rule, value)) {
          if (!this.errors[field]) {
            this.errors[field] = [];
          }
          this.errors[field].push(rule.message);
        }
      });
    });
    
    return Object.keys(this.errors).length === 0;
  }
  
  validateRule(rule, value) {
    switch (rule.type) {
      case 'required':
        return value !== undefined && value !== null && value !== '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'minLength':
        return value.length >= rule.value;
      case 'maxLength':
        return value.length <= rule.value;
      default:
        return true;
    }
  }
  
  getErrors() {
    return this.errors;
  }
}
```

**Q83: How do you implement a custom animation library?**

**Answer:**
```javascript
class AnimationEngine {
  constructor() {
    this.animations = new Map();
    this.isRunning = false;
  }
  
  animate(element, properties, duration, easing = 'linear') {
    const animation = {
      element,
      properties,
      duration,
      easing,
      startTime: null,
      startValues: {},
      endValues: properties
    };
    
    // Get current values
    Object.keys(properties).forEach(prop => {
      animation.startValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
    });
    
    this.animations.set(element, animation);
    
    if (!this.isRunning) {
      this.start();
    }
  }
  
  start() {
    this.isRunning = true;
    this.animate();
  }
  
  animate() {
    const now = performance.now();
    
    this.animations.forEach((animation, element) => {
      if (!animation.startTime) {
        animation.startTime = now;
      }
      
      const elapsed = now - animation.startTime;
      const progress = Math.min(elapsed / animation.duration, 1);
      const easedProgress = this.ease(progress, animation.easing);
      
      Object.keys(animation.endValues).forEach(prop => {
        const start = animation.startValues[prop];
        const end = animation.endValues[prop];
        const current = start + (end - start) * easedProgress;
        element.style[prop] = current + (prop === 'opacity' ? '' : 'px');
      });
      
      if (progress >= 1) {
        this.animations.delete(element);
      }
    });
    
    if (this.animations.size > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.isRunning = false;
    }
  }
  
  ease(t, easing) {
    switch (easing) {
      case 'ease-in':
        return t * t;
      case 'ease-out':
        return t * (2 - t);
      case 'ease-in-out':
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default:
        return t;
    }
  }
}
```

---

## Conclusion - Part 2

This second part covers **48 additional questions** focusing on:
- Database design and optimization
- Authentication and security implementation
- Python and FastAPI development
- AI/ML integration and optimization
- DevOps and deployment strategies
- System design and architecture patterns
- Testing methodologies
- Performance optimization techniques
- Real-time features implementation
- Advanced custom implementations

**Total Questions Covered: 83+**

**Key Learning Points:**
1. **Database mastery** - Understanding both SQL and NoSQL approaches
2. **Security best practices** - Authentication, authorization, and data protection
3. **AI/ML integration** - Practical implementation of AI features
4. **System design thinking** - Scalable architecture patterns
5. **Advanced implementations** - Custom solutions for complex problems

**Comprehensive Coverage:**
- **Frontend**: React, Next.js, TypeScript, CSS
- **Backend**: Node.js, Express.js, Python, FastAPI
- **Database**: MongoDB, PostgreSQL, ORMs
- **AI/ML**: OpenAI integration, prompt engineering, caching
- **DevOps**: Docker, CI/CD, infrastructure
- **Architecture**: Microservices, event-driven, distributed systems
- **Testing**: Unit, integration, E2E testing
- **Performance**: Optimization, caching, lazy loading
- **Real-time**: WebSockets, collaboration features
- **Advanced**: Custom implementations, design patterns

This comprehensive guide serves as both an **interview preparation tool** and a **learning resource** for mastering the full-stack technologies used in modern web applications like IntelliThesis.
