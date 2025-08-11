# IntelliThesis Advanced Tech Stack Interview Guide
## 50+ Advanced Questions & Answers

---

## Table of Contents
1. [Advanced JavaScript Concepts](#advanced-javascript)
2. [React & Next.js Advanced Patterns](#react-advanced)
3. [TypeScript Advanced Features](#typescript-advanced)
4. [Backend Architecture](#backend-architecture)
5. [AI/ML Integration](#ai-ml-integration)
6. [System Design & Scalability](#system-design)
7. [Performance Optimization](#performance)
8. [Security & Authentication](#security)
9. [DevOps & Deployment](#devops)
10. [Testing Strategies](#testing)

---

## Advanced JavaScript Concepts <a name="advanced-javascript"></a>

**Q1: How do you implement a custom Promise with full Promise/A+ compliance?**

**Answer:**
```javascript
class CustomPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    return new CustomPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        setTimeout(handleFulfilled, 0);
      } else if (this.state === 'rejected') {
        setTimeout(handleRejected, 0);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new CustomPromise(resolve => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => reject(reason));
  }
}
```

**Q2: How do you implement a custom event emitter?**

**Answer:**
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }

  off(event, listener) {
    if (!this.events[event]) return this;
    this.events[event] = this.events[event].filter(l => l !== listener);
    return this;
  }

  emit(event, ...args) {
    if (!this.events[event]) return false;
    this.events[event].forEach(listener => {
      try {
        listener.apply(this, args);
      } catch (error) {
        console.error('Error in event listener:', error);
      }
    });
    return true;
  }

  once(event, listener) {
    const onceWrapper = (...args) => {
      listener.apply(this, args);
      this.off(event, onceWrapper);
    };
    return this.on(event, onceWrapper);
  }

  removeAllListeners(event) {
    if (event) {
      delete this.events[event];
    } else {
      this.events = {};
    }
    return this;
  }
}
```

**Q3: How do you implement a custom state management library?**

**Answer:**
```javascript
class Store {
  constructor(reducer, initialState = {}, enhancer) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
    this.isDispatching = false;

    if (enhancer) {
      return enhancer(this);
    }
  }

  getState() {
    if (this.isDispatching) {
      throw new Error('Cannot call getState while dispatching');
    }
    return this.state;
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch while dispatching');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions must have a type property');
    }

    this.isDispatching = true;
    try {
      this.state = this.reducer(this.state, action);
    } finally {
      this.isDispatching = false;
    }

    this.listeners.forEach(listener => listener());
    return action;
  }

  subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Listener must be a function');
    }

    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  replaceReducer(nextReducer) {
    this.reducer = nextReducer;
    this.dispatch({ type: '@@INIT' });
  }
}

// Middleware support
function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, initialState) => {
    const store = createStore(reducer, initialState);
    const dispatch = store.dispatch;

    const chain = middlewares.map(middleware => middleware({
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }));

    dispatch = chain.reduce((a, b) => (...args) => a(b(...args)))(dispatch);

    return { ...store, dispatch };
  };
}
```

---

## React & Next.js Advanced Patterns <a name="react-advanced"></a>

**Q4: How do you implement a custom React hook for infinite scrolling?**

**Answer:**
```javascript
function useInfiniteScroll(callback, options = {}) {
  const { threshold = 100, rootMargin = '0px' } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const lastElementRef = useRef();

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const result = await callback();
      if (!result || result.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setIsLoading(false);
    }
  }, [callback, isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;
    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading, threshold, rootMargin]);

  const lastElementCallback = useCallback((node) => {
    if (lastElementRef.current) {
      observerRef.current?.unobserve(lastElementRef.current);
    }
    if (node) {
      observerRef.current?.observe(node);
    }
    lastElementRef.current = node;
  }, []);

  return { lastElementCallback, isLoading, hasMore };
}
```

**Q5: How do you implement a custom React context with performance optimization?**

**Answer:**
```javascript
const createOptimizedContext = (initialState) => {
  const StateContext = createContext();
  const DispatchContext = createContext();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, user: { ...state.user, ...action.payload } };
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const memoizedState = useMemo(() => state, [state]);
    const memoizedDispatch = useCallback(dispatch, []);

    return (
      <StateContext.Provider value={memoizedState}>
        <DispatchContext.Provider value={memoizedDispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  const useState = () => {
    const context = useContext(StateContext);
    if (!context) {
      throw new Error('useState must be used within Provider');
    }
    return context;
  };

  const useDispatch = () => {
    const context = useContext(DispatchContext);
    if (!context) {
      throw new Error('useDispatch must be used within Provider');
    }
    return context;
  };

  return { Provider, useState, useDispatch };
};
```

**Q6: How do you implement a custom error boundary with error reporting?**

**Answer:**
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    
    // Report error to external service
    this.reportError(error, errorInfo);
  }

  reportError = async (error, errorInfo) => {
    try {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details>
              <summary>Error Details</summary>
              <pre>{this.state.error?.toString()}</pre>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## TypeScript Advanced Features <a name="typescript-advanced"></a>

**Q7: How do you implement advanced conditional types?**

**Answer:**
```typescript
// Extract function return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// Extract function parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Deep partial type
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Extract keys with specific value type
type KeysWithValueType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

// Conditional type with multiple conditions
type ConditionalType<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : 'unknown';

// Utility type for API responses
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  message?: string;
};

// Type-safe event emitter
type EventMap = {
  userCreated: { id: string; name: string };
  userDeleted: { id: string };
  messageSent: { from: string; to: string; content: string };
};

type EventEmitter<T> = {
  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void;
  emit<K extends keyof T>(event: K, data: T[K]): void;
};
```

**Q8: How do you implement type-safe API client?**

**Answer:**
```typescript
// API endpoint definitions
type ApiEndpoints = {
  'GET /users': {
    response: User[];
    query?: { page?: number; limit?: number };
  };
  'POST /users': {
    request: CreateUserRequest;
    response: User;
  };
  'PUT /users/:id': {
    request: UpdateUserRequest;
    response: User;
    params: { id: string };
  };
  'DELETE /users/:id': {
    response: void;
    params: { id: string };
  };
};

// Type-safe API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<
    TMethod extends keyof ApiEndpoints,
    TEndpoint extends ApiEndpoints[TMethod]
  >(
    method: TMethod,
    options: {
      params?: TEndpoint['params'];
      query?: TEndpoint['query'];
      body?: TEndpoint['request'];
    } = {}
  ): Promise<TEndpoint['response']> {
    const { params, query, body } = options;
    
    let url = `${this.baseUrl}${method.split(' ')[1]}`;
    
    // Replace URL parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
      });
    }
    
    // Add query parameters
    if (query) {
      const searchParams = new URLSearchParams();
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, String(value));
        }
      });
      url += `?${searchParams.toString()}`;
    }

    const response = await fetch(url, {
      method: method.split(' ')[0],
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

// Usage
const api = new ApiClient('https://api.example.com');

// Type-safe API calls
const users = await api.request('GET /users', { query: { page: 1, limit: 10 } });
const newUser = await api.request('POST /users', { 
  body: { name: 'John', email: 'john@example.com' } 
});
const updatedUser = await api.request('PUT /users/:id', { 
  params: { id: '123' }, 
  body: { name: 'John Updated' } 
});
```

---

## Backend Architecture <a name="backend-architecture"></a>

**Q9: How do you implement a custom middleware system?**

**Answer:**
```javascript
class MiddlewareManager {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    if (typeof middleware !== 'function') {
      throw new Error('Middleware must be a function');
    }
    this.middlewares.push(middleware);
    return this;
  }

  async execute(context, next) {
    let index = -1;
    
    const dispatch = async (i) => {
      if (i <= index) {
        throw new Error('next() called multiple times');
      }
      index = i;
      
      if (i === this.middlewares.length) {
        return next ? await next(context) : undefined;
      }
      
      const middleware = this.middlewares[i];
      return middleware(context, () => dispatch(i + 1));
    };
    
    return dispatch(0);
  }
}

// Usage example
const app = new MiddlewareManager();

app.use(async (ctx, next) => {
  console.log('Request started:', ctx.url);
  const start = Date.now();
  await next();
  console.log('Request completed in:', Date.now() - start);
});

app.use(async (ctx, next) => {
  ctx.user = await authenticateUser(ctx.headers.authorization);
  await next();
});

app.use(async (ctx, next) => {
  if (!ctx.user) {
    ctx.status = 401;
    return;
  }
  await next();
});
```

**Q10: How do you implement a custom database connection pool?**

**Answer:**
```javascript
class ConnectionPool {
  constructor(config, maxConnections = 10) {
    this.config = config;
    this.maxConnections = maxConnections;
    this.connections = [];
    this.waiting = [];
    this.activeConnections = 0;
  }

  async getConnection() {
    // Return existing connection if available
    if (this.connections.length > 0) {
      const connection = this.connections.pop();
      this.activeConnections++;
      return connection;
    }

    // Create new connection if under limit
    if (this.activeConnections < this.maxConnections) {
      const connection = await this.createConnection();
      this.activeConnections++;
      return connection;
    }

    // Wait for connection to become available
    return new Promise((resolve) => {
      this.waiting.push(resolve);
    });
  }

  async releaseConnection(connection) {
    this.activeConnections--;
    
    // Check if connection is still valid
    if (await this.isConnectionValid(connection)) {
      this.connections.push(connection);
    } else {
      await this.closeConnection(connection);
    }

    // Resolve waiting requests
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift();
      const newConnection = await this.getConnection();
      resolve(newConnection);
    }
  }

  async createConnection() {
    // Implementation depends on database driver
    return new Promise((resolve, reject) => {
      // Create database connection
    });
  }

  async isConnectionValid(connection) {
    try {
      await connection.ping();
      return true;
    } catch (error) {
      return false;
    }
  }

  async closeConnection(connection) {
    try {
      await connection.end();
    } catch (error) {
      console.error('Error closing connection:', error);
    }
  }

  async close() {
    // Close all connections
    await Promise.all([
      ...this.connections.map(conn => this.closeConnection(conn)),
      ...this.waiting.map(() => Promise.resolve())
    ]);
    
    this.connections = [];
    this.waiting = [];
    this.activeConnections = 0;
  }
}
```

---

## AI/ML Integration <a name="ai-ml-integration"></a>

**Q11: How do you implement a custom AI response caching system?**

**Answer:**
```javascript
class AICacheManager {
  constructor(redisClient, options = {}) {
    this.redis = redisClient;
    this.defaultTTL = options.defaultTTL || 3600; // 1 hour
    this.maxCacheSize = options.maxCacheSize || 1000;
    this.compressionEnabled = options.compressionEnabled || true;
  }

  generateCacheKey(prompt, model, temperature) {
    const hash = crypto.createHash('sha256')
      .update(`${prompt}:${model}:${temperature}`)
      .digest('hex');
    return `ai:response:${hash}`;
  }

  async getCachedResponse(prompt, model, temperature) {
    const key = this.generateCacheKey(prompt, model, temperature);
    
    try {
      const cached = await this.redis.get(key);
      if (cached) {
        const data = JSON.parse(cached);
        return {
          response: data.response,
          cached: true,
          timestamp: data.timestamp
        };
      }
    } catch (error) {
      console.error('Cache retrieval error:', error);
    }
    
    return null;
  }

  async cacheResponse(prompt, model, temperature, response, ttl = this.defaultTTL) {
    const key = this.generateCacheKey(prompt, model, temperature);
    
    try {
      const data = {
        response,
        timestamp: Date.now(),
        prompt,
        model,
        temperature
      };

      const serialized = this.compressionEnabled 
        ? await this.compress(JSON.stringify(data))
        : JSON.stringify(data);

      await this.redis.setex(key, ttl, serialized);
      
      // Implement LRU eviction if needed
      await this.evictIfNeeded();
    } catch (error) {
      console.error('Cache storage error:', error);
    }
  }

  async compress(data) {
    return new Promise((resolve, reject) => {
      zlib.gzip(data, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  }

  async decompress(data) {
    return new Promise((resolve, reject) => {
      zlib.gunzip(data, (error, result) => {
        if (error) reject(error);
        else resolve(result.toString());
      });
    });
  }

  async evictIfNeeded() {
    const keys = await this.redis.keys('ai:response:*');
    if (keys.length > this.maxCacheSize) {
      // Simple LRU: remove oldest entries
      const sortedKeys = await Promise.all(
        keys.map(async (key) => ({
          key,
          timestamp: await this.redis.hget(key, 'timestamp') || 0
        }))
      );
      
      sortedKeys.sort((a, b) => a.timestamp - b.timestamp);
      const keysToRemove = sortedKeys.slice(0, keys.length - this.maxCacheSize);
      
      if (keysToRemove.length > 0) {
        await this.redis.del(...keysToRemove.map(k => k.key));
      }
    }
  }
}
```

**Q12: How do you implement streaming AI responses with backpressure handling?**

**Answer:**
```javascript
class AIStreamProcessor {
  constructor(openaiClient, options = {}) {
    this.client = openaiClient;
    this.maxConcurrentRequests = options.maxConcurrentRequests || 5;
    this.requestQueue = [];
    this.activeRequests = 0;
  }

  async processStreamRequest(prompt, model, options = {}) {
    return new Promise((resolve, reject) => {
      const stream = new PassThrough();
      let buffer = '';
      let isComplete = false;

      const processChunk = async (chunk) => {
        try {
          const lines = chunk.toString().split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              
              if (data === '[DONE]') {
                isComplete = true;
                stream.end();
                resolve(buffer);
                return;
              }
              
              try {
                const parsed = JSON.parse(data);
                if (parsed.choices?.[0]?.delta?.content) {
                  const content = parsed.choices[0].delta.content;
                  buffer += content;
                  stream.write(content);
                }
              } catch (parseError) {
                console.error('Error parsing chunk:', parseError);
              }
            }
          }
        } catch (error) {
          if (!isComplete) {
            reject(error);
          }
        }
      };

      this.queueRequest(async () => {
        try {
          const response = await this.client.chat.completions.create({
            model,
            messages: [{ role: 'user', content: prompt }],
            stream: true,
            ...options
          });

          for await (const chunk of response) {
            await processChunk(JSON.stringify(chunk) + '\n');
          }
        } catch (error) {
          if (!isComplete) {
            reject(error);
          }
        }
      });

      return stream;
    });
  }

  async queueRequest(requestFn) {
    if (this.activeRequests >= this.maxConcurrentRequests) {
      await new Promise(resolve => {
        this.requestQueue.push(resolve);
      });
    }

    this.activeRequests++;
    
    try {
      await requestFn();
    } finally {
      this.activeRequests--;
      
      if (this.requestQueue.length > 0) {
        const nextRequest = this.requestQueue.shift();
        nextRequest();
      }
    }
  }
}
```

---

## System Design & Scalability <a name="system-design"></a>

**Q13: How do you implement a custom load balancer?**

**Answer:**
```javascript
class LoadBalancer {
  constructor(strategy = 'round-robin') {
    this.servers = [];
    this.currentIndex = 0;
    this.strategy = strategy;
    this.healthChecks = new Map();
  }

  addServer(server) {
    this.servers.push({
      ...server,
      weight: server.weight || 1,
      health: true,
      activeConnections: 0
    });
  }

  async getServer(request) {
    const healthyServers = this.servers.filter(server => server.health);
    
    if (healthyServers.length === 0) {
      throw new Error('No healthy servers available');
    }

    switch (this.strategy) {
      case 'round-robin':
        return this.roundRobin(healthyServers);
      case 'least-connections':
        return this.leastConnections(healthyServers);
      case 'weighted':
        return this.weightedRoundRobin(healthyServers);
      case 'ip-hash':
        return this.ipHash(healthyServers, request);
      default:
        return this.roundRobin(healthyServers);
    }
  }

  roundRobin(servers) {
    const server = servers[this.currentIndex % servers.length];
    this.currentIndex = (this.currentIndex + 1) % servers.length;
    return server;
  }

  leastConnections(servers) {
    return servers.reduce((min, server) => 
      server.activeConnections < min.activeConnections ? server : min
    );
  }

  weightedRoundRobin(servers) {
    // Implementation of weighted round-robin algorithm
    const totalWeight = servers.reduce((sum, server) => sum + server.weight, 0);
    let currentWeight = 0;
    
    for (const server of servers) {
      currentWeight += server.weight;
      if (currentWeight >= this.currentIndex) {
        this.currentIndex = (this.currentIndex + 1) % totalWeight;
        return server;
      }
    }
    
    return servers[0];
  }

  ipHash(servers, request) {
    const clientIP = request.ip || request.connection.remoteAddress;
    const hash = this.hashCode(clientIP);
    return servers[hash % servers.length];
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  async startHealthChecks(interval = 30000) {
    setInterval(async () => {
      for (const server of this.servers) {
        try {
          const response = await fetch(`${server.url}/health`, {
            timeout: 5000
          });
          server.health = response.ok;
        } catch (error) {
          server.health = false;
        }
      }
    }, interval);
  }
}
```

**Q14: How do you implement a custom circuit breaker pattern?**

**Answer:**
```javascript
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.timeout = options.timeout || 60000; // 1 minute
    this.monitoringPeriod = options.monitoringPeriod || 60000; // 1 minute
    this.failures = 0;
    this.lastFailureTime = null;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.successCount = 0;
    this.failureCount = 0;
    this.monitoringStartTime = Date.now();
  }

  async call(fn, ...args) {
    if (this.state === 'OPEN') {
      if (this.shouldAttemptReset()) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await fn(...args);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failures = 0;
    this.successCount++;
    
    if (this.state === 'HALF_OPEN') {
      this.state = 'CLOSED';
      this.resetMonitoring();
    }
  }

  onFailure() {
    this.failures++;
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failures >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }

  shouldAttemptReset() {
    return Date.now() - this.lastFailureTime >= this.timeout;
  }

  resetMonitoring() {
    this.monitoringStartTime = Date.now();
    this.successCount = 0;
    this.failureCount = 0;
  }

  getStats() {
    const totalRequests = this.successCount + this.failureCount;
    const failureRate = totalRequests > 0 ? this.failureCount / totalRequests : 0;
    
    return {
      state: this.state,
      failureRate,
      totalRequests,
      successCount: this.successCount,
      failureCount: this.failureCount,
      lastFailureTime: this.lastFailureTime
    };
  }
}
```

---

## Performance Optimization <a name="performance"></a>

**Q15: How do you implement a custom memoization system?**

**Answer:**
```javascript
class MemoizationCache {
  constructor(options = {}) {
    this.maxSize = options.maxSize || 1000;
    this.ttl = options.ttl || 300000; // 5 minutes
    this.cache = new Map();
    this.accessOrder = [];
  }

  memoize(fn, keyGenerator = null) {
    return async (...args) => {
      const key = keyGenerator ? keyGenerator(...args) : this.generateKey(args);
      
      const cached = this.get(key);
      if (cached !== null) {
        return cached;
      }

      const result = await fn(...args);
      this.set(key, result);
      return result;
    };
  }

  generateKey(args) {
    return JSON.stringify(args);
  }

  get(key) {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    if (Date.now() > item.expiry) {
      this.delete(key);
      return null;
    }

    // Update access order for LRU
    this.updateAccessOrder(key);
    return item.value;
  }

  set(key, value) {
    // Remove oldest item if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.accessOrder.shift();
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      value,
      expiry: Date.now() + this.ttl
    });

    this.updateAccessOrder(key);
  }

  delete(key) {
    this.cache.delete(key);
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
  }

  updateAccessOrder(key) {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
    this.accessOrder.push(key);
  }

  clear() {
    this.cache.clear();
    this.accessOrder = [];
  }

  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: this.calculateHitRate()
    };
  }

  calculateHitRate() {
    // Implementation depends on tracking hits/misses
    return 0.95; // Placeholder
  }
}
```

---

## Security & Authentication <a name="security"></a>

**Q16: How do you implement a custom JWT token manager?**

**Answer:**
```javascript
class JWTManager {
  constructor(secret, options = {}) {
    this.secret = secret;
    this.algorithm = options.algorithm || 'HS256';
    this.expiresIn = options.expiresIn || '1h';
    this.refreshExpiresIn = options.refreshExpiresIn || '7d';
    this.blacklist = new Set();
  }

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, this.secret, {
      algorithm: this.algorithm,
      expiresIn: this.expiresIn
    });

    const refreshToken = jwt.sign(payload, this.secret, {
      algorithm: this.algorithm,
      expiresIn: this.refreshExpiresIn
    });

    return { accessToken, refreshToken };
  }

  verifyToken(token) {
    try {
      if (this.blacklist.has(token)) {
        throw new Error('Token has been revoked');
      }

      const decoded = jwt.verify(token, this.secret, {
        algorithms: [this.algorithm]
      });

      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  refreshAccessToken(refreshToken) {
    try {
      const decoded = this.verifyToken(refreshToken);
      
      // Remove sensitive fields from payload
      const { iat, exp, ...payload } = decoded;
      
      const newAccessToken = jwt.sign(payload, this.secret, {
        algorithm: this.algorithm,
        expiresIn: this.expiresIn
      });

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  revokeToken(token) {
    this.blacklist.add(token);
    
    // Clean up expired tokens from blacklist periodically
    setTimeout(() => {
      this.blacklist.delete(token);
    }, 24 * 60 * 60 * 1000); // 24 hours
  }

  getTokenInfo(token) {
    try {
      const decoded = jwt.decode(token, { complete: true });
      return {
        payload: decoded.payload,
        header: decoded.header,
        expiresAt: new Date(decoded.payload.exp * 1000)
      };
    } catch (error) {
      return null;
    }
  }
}
```

---

## DevOps & Deployment <a name="devops"></a>

**Q17: How do you implement a custom deployment manager?**

**Answer:**
```javascript
class DeploymentManager {
  constructor(options = {}) {
    this.environments = options.environments || ['staging', 'production'];
    this.rollbackVersions = new Map();
    this.deploymentHistory = [];
  }

  async deploy(version, environment, options = {}) {
    const deployment = {
      id: this.generateDeploymentId(),
      version,
      environment,
      status: 'pending',
      startTime: new Date(),
      options
    };

    try {
      // Pre-deployment checks
      await this.runPreDeploymentChecks(version, environment);
      
      // Backup current version
      await this.backupCurrentVersion(environment);
      
      // Deploy new version
      await this.executeDeployment(version, environment);
      
      // Health checks
      await this.runHealthChecks(environment);
      
      // Post-deployment tasks
      await this.runPostDeploymentTasks(version, environment);
      
      deployment.status = 'success';
      deployment.endTime = new Date();
      
    } catch (error) {
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date();
      
      // Auto-rollback on failure
      if (options.autoRollback !== false) {
        await this.rollback(environment);
      }
    }

    this.deploymentHistory.push(deployment);
    return deployment;
  }

  async rollback(environment) {
    const previousVersion = this.rollbackVersions.get(environment);
    
    if (!previousVersion) {
      throw new Error('No previous version available for rollback');
    }

    console.log(`Rolling back ${environment} to version ${previousVersion}`);
    
    try {
      await this.executeDeployment(previousVersion, environment);
      await this.runHealthChecks(environment);
      
      console.log(`Rollback to ${previousVersion} completed successfully`);
    } catch (error) {
      console.error(`Rollback failed: ${error.message}`);
      throw error;
    }
  }

  async runPreDeploymentChecks(version, environment) {
    // Check if version exists
    // Validate configuration
    // Check dependencies
    // Run tests
    console.log(`Running pre-deployment checks for ${version} on ${environment}`);
  }

  async executeDeployment(version, environment) {
    // Implementation depends on deployment strategy
    console.log(`Deploying version ${version} to ${environment}`);
    
    // Example: Docker deployment
    // await docker.pull(version);
    // await docker.stop(environment);
    // await docker.run(version, environment);
  }

  async runHealthChecks(environment) {
    const healthCheckUrl = this.getHealthCheckUrl(environment);
    
    for (let i = 0; i < 10; i++) {
      try {
        const response = await fetch(healthCheckUrl);
        if (response.ok) {
          console.log('Health checks passed');
          return;
        }
      } catch (error) {
        console.log(`Health check attempt ${i + 1} failed`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    throw new Error('Health checks failed');
  }

  generateDeploymentId() {
    return `deploy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  getDeploymentHistory(environment, limit = 10) {
    return this.deploymentHistory
      .filter(d => d.environment === environment)
      .sort((a, b) => b.startTime - a.startTime)
      .slice(0, limit);
  }
}
```

---

## Testing Strategies <a name="testing"></a>

**Q18: How do you implement a custom test runner?**

**Answer:**
```javascript
class CustomTestRunner {
  constructor(options = {}) {
    this.tests = [];
    this.hooks = {
      beforeAll: [],
      afterAll: [],
      beforeEach: [],
      afterEach: []
    };
    this.results = [];
    this.options = options;
  }

  describe(name, fn) {
    const suite = {
      name,
      tests: [],
      hooks: { ...this.hooks }
    };

    const originalHooks = { ...this.hooks };
    this.hooks = suite.hooks;

    fn();

    this.hooks = originalHooks;
    this.tests.push(suite);
  }

  it(name, testFn) {
    const test = {
      name,
      fn: testFn,
      suite: this.tests[this.tests.length - 1]
    };

    if (test.suite) {
      test.suite.tests.push(test);
    } else {
      this.tests.push({ name: 'root', tests: [test], hooks: this.hooks });
    }
  }

  beforeAll(fn) {
    this.hooks.beforeAll.push(fn);
  }

  afterAll(fn) {
    this.hooks.afterAll.push(fn);
  }

  beforeEach(fn) {
    this.hooks.beforeEach.push(fn);
  }

  afterEach(fn) {
    this.hooks.afterEach.push(fn);
  }

  async run() {
    console.log('Starting test run...');
    
    for (const suite of this.tests) {
      console.log(`\nRunning suite: ${suite.name}`);
      
      // Run beforeAll hooks
      for (const hook of suite.hooks.beforeAll) {
        await hook();
      }

      for (const test of suite.tests) {
        const result = await this.runTest(test, suite);
        this.results.push(result);
      }

      // Run afterAll hooks
      for (const hook of suite.hooks.afterAll) {
        await hook();
      }
    }

    this.printResults();
    return this.results;
  }

  async runTest(test, suite) {
    const result = {
      name: test.name,
      suite: suite.name,
      status: 'pending',
      duration: 0,
      error: null
    };

    const startTime = Date.now();

    try {
      // Run beforeEach hooks
      for (const hook of suite.hooks.beforeEach) {
        await hook();
      }

      // Run the test
      await test.fn();
      
      result.status = 'passed';
      
    } catch (error) {
      result.status = 'failed';
      result.error = error;
    } finally {
      result.duration = Date.now() - startTime;
      
      // Run afterEach hooks
      for (const hook of suite.hooks.afterEach) {
        try {
          await hook();
        } catch (error) {
          console.error('AfterEach hook failed:', error);
        }
      }
    }

    const statusIcon = result.status === 'passed' ? '✅' : '❌';
    console.log(`${statusIcon} ${test.name} (${result.duration}ms)`);
    
    if (result.error) {
      console.error(`  Error: ${result.error.message}`);
    }

    return result;
  }

  printResults() {
    const passed = this.results.filter(r => r.status === 'passed').length;
    const failed = this.results.filter(r => r.status === 'failed').length;
    const total = this.results.length;

    console.log(`\nTest Results:`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📊 Total: ${total}`);
    console.log(`📈 Success Rate: ${((passed / total) * 100).toFixed(1)}%`);
  }
}
```

---

## Conclusion

This comprehensive guide covers **18 advanced questions** with detailed implementations covering:

**Key Areas:**
- **Advanced JavaScript**: Custom Promise, EventEmitter, State Management
- **React Patterns**: Infinite scrolling, Optimized Context, Error Boundaries
- **TypeScript**: Advanced types, Type-safe API clients
- **Backend Architecture**: Middleware systems, Connection pools
- **AI/ML Integration**: Caching systems, Streaming responses
- **System Design**: Load balancers, Circuit breakers
- **Performance**: Memoization, Optimization techniques
- **Security**: JWT management, Authentication
- **DevOps**: Deployment management, CI/CD
- **Testing**: Custom test runners, Advanced testing patterns

**Learning Outcomes:**
1. **Deep understanding** of core concepts
2. **Practical implementation** skills
3. **System design** thinking
4. **Performance optimization** techniques
5. **Production-ready** code patterns

This guide serves as both an **advanced interview preparation tool** and a **learning resource** for mastering complex implementations in modern web applications like IntelliThesis.
