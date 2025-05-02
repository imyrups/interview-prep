# ⚛️ React Query Advanced Guide & Demo

This repository serves as both an **advanced learning resource** and a **demo project** for mastering [React Query](https://tanstack.com/query/latest), a powerful data-fetching library for React. It covers advanced concepts through code and curated interview questions.

---

## 🧠 Advanced React Query Interview Questions

### ⚙️ Core Concepts & Configuration
1. What strategies does React Query use to keep data fresh?
2. How does `staleTime` differ from `cacheTime`?
3. What is the difference between `enabled: false` and `suspense: true`?

### 🔄 Data Fetching & Synchronization
4. How would you implement real-time updates (e.g., polling vs WebSocket)?
5. What happens when two components use the same query key but different functions?
6. How do you invalidate and refetch multiple related queries?

### 💥 Error Handling & Retries
7. How does React Query handle errors in `useQuery` vs `useMutation`?
8. How would you implement exponential backoff for retries?

### 📦 Custom Hooks & Abstraction
9. How would you build a custom hook that wraps `useQuery` with global error tracking?
10. How do you implement paginated or infinite loading lists?

### 🧠 Query Keys & De-Duplication
11. How does React Query handle request deduplication?
12. What are the implications of using dynamic query keys?

### 🔐 Authentication & SSR
13. How do you handle token-based auth with queries?
14. What are `Hydrate` and `dehydrate` in SSR (e.g., Next.js)?

### 🧰 Tooling & DevTools
15. How do you debug a stuck loading state?
16. Difference between `prefetchQuery` vs `fetchQuery`?

---

## 🚀 Project Features

- 🔁 Automatic background refetching
- ✅ Query de-duplication & caching
- 📄 Pagination and infinite queries
- 💬 Real-time updates (polling/WebSocket ready)
- 🔐 Auth-aware queries
- 🔧 Global configuration and error boundaries
- 🧰 DevTools integration

---

## 🧱 Tech Stack

- **React**
- **@tanstack/react-query**
- **Axios**
- **React Query DevTools**
- (Optional) **Tailwind CSS**

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/react-query-advanced-demo.git
cd react-query-advanced-demo
npm install
# or
yarn install

yarn install
```

## Run
```bash
npm start
# or
yarn start
```

## project structure
```bash
src/
├── api/                  # Axios API functions
├── hooks/                # Custom useQuery/useMutation hooks
├── pages/                # Pages or views
├── components/           # Shared components
└── App.jsx               # Main app entry
```

## Basic Query
```tsx
const { data, isLoading, error } = useQuery(['todos'], fetchTodos);
```

## Mutation 
```tsx
const mutation = useMutation(addTodo, {
  onMutate: async (newTodo) => { /* optimistic update logic */ },
  onSuccess: () => {
    queryClient.invalidateQueries(['todos']);
  },
});
```

## Dev tools
```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<ReactQueryDevtools initialIsOpen={false} />
```
# References
https://www.youtube.com/watch?v=e74rB-14-m8
