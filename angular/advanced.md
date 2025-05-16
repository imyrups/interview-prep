# 🔧 **Change Detection & Performance**

1. **Explain the difference between `ChangeDetectionStrategy.Default` and `ChangeDetectionStrategy.OnPush`. In what scenarios would `OnPush` fail to detect changes?**
2. **How does Angular’s zone.js work with change detection? Can you eliminate it? If so, how?**
3. **What are the internal steps Angular performs when a change detection cycle is triggered?**
4. **How would you optimize a complex, deeply nested component tree for performance?**
5. **What are detached views and how can they be used to improve performance?**

---

# 🏗️ **Architecture & Advanced Patterns**

6. **Describe the Injector hierarchy in Angular. How does multi-provider token resolution work across modules?**
7. **Explain the role of `APP_INITIALIZER`. How would you use it for secure bootstrapping with dynamic configuration?**
8. **How does Angular handle forward references in dependency injection?**
9. **What is a platform injector and how is it different from module-level injectors?**
10. **Describe a use case for dynamic module loading (lazy + on-demand feature module injection).**

---

# 🧠 **Reactive Forms & RxJS**

11. **What is the difference between `valueChanges` and `statusChanges` in Reactive Forms? Give a real-world use case where `statusChanges` is critical.**
12. **How would you manage complex form state (e.g., autosave, undo, validation messages) using RxJS?**
13. **How do you avoid memory leaks when using `AsyncPipe` and nested observables inside templates?**
14. **What are `ControlValueAccessor`s and how do they integrate with Angular forms? Explain how to create a custom one.**

---

# 📦 **Advanced Component Design**

15. **What’s the purpose of `ngOnChanges` vs `ngDoCheck`? When would you implement a custom `ngDoCheck`?**
16. **How do `ngTemplateOutlet`, `ngComponentOutlet`, and `ng-container` differ? Give use cases for each.**
17. **How can you dynamically render and bind inputs/outputs to a component at runtime?**
18. **Describe the complete process of rendering a dynamic component using `ViewContainerRef`.**

---

# 🧩 **Routing & Lazy Loading**

19. **What are Route Guards’ execution order and how do you manage complex nested guards with multiple resolvers?**
20. **Explain preloading strategies. How would you implement a custom one and what use case might require it?**
21. **How does Angular handle route reuse? How would you force a route to be recreated every time it's activated?**
22. **Describe a strategy to preload a lazy-loaded module after the app is idle.**

---

# 🕵️‍♂️ **Security & Advanced Configuration**

23. **How does Angular’s built-in XSS protection work? When is it bypassed, and how can it be manually re-enabled?**
24. **What are trusted types and how can they be used in an Angular app to harden security?**
25. **How would you secure dynamic component rendering from injection attacks?**

---

# ⚙️ **Testing & Debugging**

26. **How do you mock DI tokens or environment configurations in Angular unit tests?**
27. **What is `TestBed.overrideComponent` and when would you use it?**
28. **How would you write an integration test for a lazy-loaded module with guards and resolvers?**

---

# 🧬 **Internals & Compilation**

29. **What are the main differences between the View Engine and Ivy? How does Ivy’s locality principle help in compilation?**
30. **What is tree-shakable provider registration? How does `providedIn: 'root'` relate to this?**
31. **How does Angular generate and manage factory files for components and modules in Ivy?**

---


