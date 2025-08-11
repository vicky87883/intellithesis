# IntelliThesis Comprehensive Tech Stack Interview Guide
## 50+ Questions from Basic to Advanced - Part 1

---

## Table of Contents
1. [JavaScript Fundamentals](#javascript-fundamentals)
2. [React & Next.js](#react-nextjs)
3. [TypeScript](#typescript)
4. [CSS & Styling](#css-styling)
5. [Node.js & Express.js](#nodejs-expressjs)

---

## JavaScript Fundamentals <a name="javascript-fundamentals"></a>

### Basic Level

**Q1: What is the difference between `var`, `let`, and `const`?**

**Answer:**
- **var**: Function-scoped, hoisted, can be redeclared
- **let**: Block-scoped, not hoisted, cannot be redeclared
- **const**: Block-scoped, cannot be reassigned (but objects can be mutated)

**Q2: Explain the concept of closures in JavaScript.**

**Answer:**
A closure is a function that has access to variables in its outer scope even after the outer function has returned.

```javascript
function outerFunction(x) {
  return function(y) {
    return x + y; // x is captured from outer scope
  };
}
const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

**Q3: What is the difference between `==` and `===`?**

**Answer:**
- `==`: Loose equality (type coercion)
- `===`: Strict equality (no type coercion)

**Q4: Explain the event loop in JavaScript.**

**Answer:**
The event loop is a mechanism that allows JavaScript to perform non-blocking operations by using callbacks, promises, and async/await.

### Intermediate Level

**Q5: How do you implement inheritance in JavaScript?**

**Answer:**
```javascript
// ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
```

**Q6: What are Promises and how do they work?**

**Answer:**
Promises represent the eventual completion of an asynchronous operation.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then(result => console.log(result));
```

**Q7: Explain async/await and how it differs from Promises.**

**Answer:**
Async/await is syntactic sugar over Promises that makes asynchronous code look synchronous.

```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Advanced Level

**Q8: How do you implement a custom Promise?**

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

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.state === 'rejected') {
      onRejected(this.reason);
    } else {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}
```

---

## React & Next.js <a name="react-nextjs"></a>

### Basic Level

**Q9: What are React components and how do you create them?**

**Answer:**
Components are reusable UI pieces. You can create them as functions or classes.

```javascript
// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Q10: Explain the difference between props and state.**

**Answer:**
- **Props**: Read-only data passed from parent to child
- **State**: Mutable data managed within the component

**Q11: What is the virtual DOM and why does React use it?**

**Answer:**
The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by comparing changes and updating only what's necessary.

### Intermediate Level

**Q12: How do you handle side effects in React?**

**Answer:**
Using the `useEffect` hook:

```javascript
useEffect(() => {
  // Side effect code
  fetchData();
  
  // Cleanup function
  return () => {
    // Cleanup code
  };
}, [dependency]);
```

**Q13: Explain React's reconciliation process.**

**Answer:**
Reconciliation is React's algorithm for determining what parts of the UI need to be updated by comparing the new virtual DOM with the previous one.

**Q14: How do you optimize React performance?**

**Answer:**
- Use `React.memo()` for component memoization
- Use `useMemo()` and `useCallback()` for expensive calculations
- Implement proper key props in lists
- Use code splitting with `React.lazy()`

### Advanced Level

**Q15: How would you implement a custom hook?**

**Answer:**
```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
```

**Q16: Explain React's Context API and when to use it.**

**Answer:**
Context provides a way to pass data through the component tree without manually passing props.

```javascript
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

**Q17: How do you implement error boundaries in React?**

**Answer:**
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### Next.js Specific

**Q18: What are the differences between Pages Router and App Router?**

**Answer:**
- **Pages Router**: File-based routing, `getStaticProps`/`getServerSideProps`
- **App Router**: Directory-based routing, Server Components, built-in data fetching

**Q19: How do you implement dynamic routes in Next.js App Router?**

**Answer:**
```typescript
// app/posts/[id]/page.tsx
export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return <div>{post.title}</div>;
}
```

**Q20: Explain Next.js Image optimization features.**

**Answer:**
- Automatic image optimization
- Lazy loading
- Responsive images
- WebP format conversion
- Prevents layout shift

---

## TypeScript <a name="typescript"></a>

### Basic Level

**Q21: What are the basic types in TypeScript?**

**Answer:**
```typescript
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
let any: any = "anything";
let unknown: unknown = "unknown";
let never: never; // never returns
let void: void = undefined;
```

**Q22: How do you define interfaces in TypeScript?**

**Answer:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // optional
  readonly createdAt: Date; // readonly
}

interface AdminUser extends User {
  permissions: string[];
}
```

### Intermediate Level

**Q23: Explain generics in TypeScript.**

**Answer:**
```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Container<T> {
  value: T;
  getValue(): T;
}

class NumberContainer implements Container<number> {
  constructor(public value: number) {}
  getValue(): number {
    return this.value;
  }
}
```

**Q24: How do you handle union types and type guards?**

**Answer:**
```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}
```

### Advanced Level

**Q25: How do you implement conditional types?**

**Answer:**
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

**Q26: Explain mapped types and utility types.**

**Answer:**
```typescript
// Mapped type
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Utility types
type Partial<T> = { [P in keyof T]?: T[P] };
type Required<T> = { [P in keyof T]-?: T[P] };
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

---

## CSS & Styling <a name="css-styling"></a>

### Basic Level

**Q27: Explain CSS Box Model.**

**Answer:**
The box model consists of content, padding, border, and margin. Total width = content + padding + border + margin.

**Q28: What are CSS Flexbox and Grid?**

**Answer:**
- **Flexbox**: One-dimensional layout (row or column)
- **Grid**: Two-dimensional layout (rows and columns)

### Intermediate Level

**Q29: How do you implement responsive design?**

**Answer:**
```css
/* Mobile first approach */
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    width: 50%;
    padding: 2rem;
  }
}
```

### Advanced Level

**Q30: How do you implement CSS-in-JS?**

**Answer:**
```javascript
// Styled-components
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  padding: 10px 20px;
  border: 2px solid blue;
  border-radius: 3px;
`;
```

---

## Node.js & Express.js <a name="nodejs-expressjs"></a>

### Basic Level

**Q31: What is Node.js and how does it work?**

**Answer:**
Node.js is a JavaScript runtime built on Chrome's V8 engine that allows server-side JavaScript execution using an event-driven, non-blocking I/O model.

**Q32: How do you create a basic Express.js server?**

**Answer:**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Intermediate Level

**Q33: How do you implement middleware in Express.js?**

**Answer:**
```javascript
// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(express.json());
app.use(cors());
```

**Q34: How do you handle errors in Express.js?**

**Answer:**
```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Async error handling
app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
```

### Advanced Level

**Q35: How do you implement rate limiting in Express.js?**

**Answer:**
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
```

---

## Conclusion - Part 1

This first part covers **35 questions** focusing on:
- JavaScript fundamentals and advanced concepts
- React and Next.js development
- TypeScript implementation
- CSS and styling approaches
- Node.js and Express.js backend development

**Key Learning Points:**
1. **Fundamentals first** - Strong JavaScript knowledge is essential
2. **Modern React patterns** - Hooks, Context, and performance optimization
3. **TypeScript benefits** - Type safety and better developer experience
4. **Backend basics** - Server creation, middleware, and error handling

**Next Part Will Cover:**
- Database and ORM concepts
- Authentication and security
- Python and FastAPI
- AI/ML integration
- DevOps and deployment
- System design and architecture
- Testing strategies
- Performance optimization
- Real-time features
- Advanced custom implementations
