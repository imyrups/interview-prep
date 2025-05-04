# Angular Interview Questions for 8+ Years of Experience

This repository contains **advanced Angular interview questions** designed for developers with **8+ years of experience** in Angular. The questions cover a wide range of advanced topics such as Angular architecture, performance optimization, RxJS, state management, testing, and more.

## Table of Contents
- [From Experts](#expert)
- [Angular Architecture](#angular-architecture)
- [Change Detection & Performance Optimization](#change-detection--performance-optimization)
- [Advanced RxJS Usage](#advanced-rxjs-usage)
- [State Management](#state-management)
- [Lazy Loading & Module Federation](#lazy-loading--module-federation)
- [Angular Build Process](#angular-build-process)
- [Advanced Directives & Dynamic Components](#advanced-directives--dynamic-components)
- [Advanced Testing Strategies](#advanced-testing-strategies)
- [Security & Best Practices](#security--best-practices)


## Expert
1. What are Authguards, their types and usage.
   - canActivate: To restrict the current route access
   - canActivateChild: To restrict the children routes access
   - canDeactivate: To restrict navigating away from current route
   - canLoad: To restrict loading of the chunk for lazily loaded routes
  
2. What are resolvers in angular?
   - Resolvers are a way to fetch/resolve the data dependancy before initialising the component on that route.
   - configure it like
     ```ts
     {
       path: 'abc',
       component: ABCComponent,
       resolve: { message: MessageResolver }
     }
     ```
   - Can we have multiple resolvers? Yes
   - The result of the resolver willbe accessible by the key mentioned while configuring from ActivatedRoute or snapshot
   ```ts
   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.data = this.route.snapshot.data.message;
   }
   ```  


3. What are types of directives, explain with example.
   - Attribute: gets `ElementRef` in constructor
   - Structural: gets `TemplateRef` & `ViewContainerRef` in constructor. Imp method on ContainerRef: `createEmbeddedView` & `clear`
4. Types of pipes with example
   Implements pipeTransofrm interface and thus, transform method.
   - Pure: Only executes again if the input has changes
   - Impure: Executes in every change detection cycle
5. How is Lazy loading done in angular?
   - it is done using loadChildren method alogn with import in the callback
     ```ts
     loadChildren: () =>
          import('./abc/xyz/text.module').then(
            m => m.TestModule
          )
     ```
6. what are path, pathMatch, redirectTo. what is path: '**'?
   - path: This is a prop matching the current path
   - pathType: This is type of path for eg. full
   - redirectTo: the path where the path would be redirected to when encountered the current one. generally used for redirecting to default path from empty path.
   - path:'**' : This pattern is used to match all other routes, generally used to catch other non existing routes. define it at the bottom.

7. what is `forRoot` & `forFeature` pattern?
   - This kind of patterns are used to control the no of instance provided in the dependency injection.
   - This pattern also helps in injecting configurations in other libraries for initial setup.

8. What are changedetection stratergies available?
   - Default:It operates by checking every component in the component tree for changes during each change detection cycle. 
   - OnPush: this strategy optimizes change detection by limiting checks to specific scenarios. When using OnPush, Angular only checks a component for changes if:
      1. The component's input properties (@Input) have changed (new reference).
      2. An event originated from the component or one of its children.
      3. The component's change detection is explicitly triggered (e.g., using ChangeDetectorRef).

9. How Does changeDetection Work in angular?
   Angular change detection is a mechanism that automatically updates the view when the application state changes.
   It acheive it via a library called `Zone` which works on `monkey patching` principle.

10. What is monkey patching, how it helps angular keep the UI and component state sync?
    Monkey Patching is a way by which we extend the orignal browser apis and wrap them with custom implementation. When we call this overrided methods, it signals angular to trigger change detection as there might be state changes based on these events.
    Read more [here](https://medium.com/reverse-engineering-angular/angular-deep-dive-zone-js-how-does-it-monkey-patches-various-apis-9cc1c7fcc321)

12.  How to prevent cross-site scripting (XSS) in Angular?
   - Interpolation and property Binding
   - Sanitize User inputs manually by `DomSanitizer` sanitize method.
   - Template Safety - Avoid using innerHTML or outerHTML

13.  What are `HostBinding` and `HostListener`?
   - @HostBinding: The @HostBinding decorator is used to bind a property of the host element. It allows you to set a property on the host element based on a property of the directive or component. This helps us eliminate the need for wrapping all the content in div to style it.
   - @HostListener: The @HostListener decorator is used to listen for events on the host element. It allows you to define a method that will be called when a specific event occurs on the host element. Generally used for directives where we have only hostElement but not restricted to it.

14.  What kind of steps you will take to improve the Angular application?
   - Remove unnecessary library and code
   - Use trackBy in ngFor loops
   - Caching the static file to improve the performance
   - ng-container is a structural directive that doesn't create any additional DOM elements. ng-container is to provide a grouping mechanism for applying structural directives like ngIf, ngFor, and ngSwitch without introducing unnecessary HTML elements.
   - Compressed the image size in application
   - Implement lazy loading for modules. This helps in loading only the necessary parts of your application when they are needed, reducing the initial load time
   - Use pagination or infinite scrolling to improve the data load in the page.
   - Integrate webpack-bundle-analyzer to investigate the component size and third party library size
   - OnPush change detection strategy is also used for improving the Angular performance improvement. Angular doesn’t need to traverse the entire component tree structure for detecting individual changes on properties. We can re render the component on demand in this strategy

15.  How many way we can share data between component?
   - Input/Output Binding: Parent components can pass data to child components through input properties (@Input decorator) and receive data from child components through output properties (@Output decorator).
   - ViewChild/ContentChild: Parent components can access child components and their properties using ViewChild and ContentChild decorators.
   - Services: Shared data can be managed and accessed using Angular services. Components can inject the same service instance and use it to share data.
   - State Management: NgRx can be used for managing application state and sharing data between components using a centralized store.

16.  Diff between concatMap, switchMap, mergeMap, exhaustMap?
   - 𝗰𝗼𝗻𝗰𝗮𝘁𝗠𝗮𝗽: This is used when you need to maintain order and run observables sequentially. This approach ensures that your second API call only runs when the first one is finished.
   - 𝘀𝘄𝗶𝘁𝗰𝗵𝗠𝗮𝗽: This is used when you only care about the response to your most recent request. (Explain this operator with search operation example )
   - 𝗺𝗲𝗿𝗴𝗲𝗠𝗮𝗽: This is used when you want to run multiple observables in parallel.
   - 𝗲𝘅𝗵𝗮𝘂𝘀𝘁𝗠𝗮𝗽: Ignores new inner Observables until the current one completes.

17. What are the differences between Template-driven and Reactive forms?
   

18. How do you create and validate a simple form in Angular?
19. How do you dynamically add/remove controls from a `FormArray`?
20. What's the difference between `setValue()` and `patchValue()`?
21. How would you build a dynamic, nested form from a configuration object at runtime?
22. How does `ControlValueAccessor` work when creating custom form components?
   ControlValueAccessor Enables us to manipulate forms based on events, below mentioned methods must be implemented for the same to work
   - writeValue()
   - registerOnChange()
   - registerOnTouched()
   - setDisabledState() (optional)

24. How do you implement conditional validation (e.g., one field becomes required based on another)?
   ```ts
      this.form.get('isEmployed')?.valueChanges.subscribe(employed => {
      const company = this.form.get('company');
      if (employed) {
         company?.setValidators([Validators.required]);
      } else {
         company?.clearValidators();
      }
      company?.updateValueAndValidity();
      });
   ```

25. Deeply nested dynamic forms with API-driven configuration
26. Cross-field validation (e.g., password confirmation)
27. Reusable form components with custom validation
28. Integrating Angular forms with external UI libraries (e.g., Material, PrimeNG)
29. Performance optimizations for large forms
30. How can you render validation only on blur instead of input in a reactive form?
    ```ts
    new FormControl('', {
       validators: [Validators.required],
       updateOn: 'blur'
    });
    new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)
    }, { updateOn: 'blur' });
    ```
31. How would you implement a multi-step form wizard using reactive forms?
   - Use one parent FormGroup, with separate FormGroups for each step.
   - Manage visibility using a stepper component or route outlet.
   - Validate each step individually before proceeding.

32. What’s the difference between markAsTouched(), markAsDirty(), and updateValueAndValidity()?
   - markAsTouched(): Emulates the user touching the control (e.g., on blur).
   - markAsDirty(): Emulates user changing the value.
   - updateValueAndValidity(): Recalculates the validation state and errors — especially needed after programmatic changes.

33. How would you debounce form value changes for performance or API calls?
   ```ts
   this.form.get('search')?.valueChanges
  .pipe(debounceTime(400))
  .subscribe(value => this.search(value));
   ```

34. What is the purpose of ngSubmit in Angular forms? How is it different from a native submit event?
   - ngSubmit prevents default HTML form submission behavior and allows Angular to handle it.
   - Useful for reactive forms with (ngSubmit)="onSubmit()".

35. How do you handle forms inside Angular Elements or micro frontends (MFE)?
   - You must manually handle form communication, often with FormGroupDirective, event emitters, or custom events.
   - Zone.js may not track control updates — might need ngZone.run().

36. What is dependancy Injection, explain hierarchial DI.
   Dependency Injection (DI) is a design pattern used in Angular to inject dependencies (services or objects) into components, directives, pipes, or other services, instead of creating them manually with new. Angular's DI system manages the lifecycle and availability of these dependencies.


38. Explain Hierarchical DI
   - Angular maintains a tree of injectors, much like the component tree.
   - When a dependency (like a service) is requested via a constructor:
   - Angular starts searching for the provider from the current injector (e.g., component).
   - If not found, it climbs up the injector tree, checking each parent until it reaches the root.
   - If the service is still not found, it throws a NoProviderError.
   - Angular caches and reuses service instances at the level where they are provide

39. Decorators used with DI.
   Decorator	Description
   @Inject()	Explicitly specify the token to be injected
   @Self()	   Resolve dependency only from the current injector
   @SkipSelf()	Skip the current injector and start search from parent
   @Optional()	Inject the dependency if available, else inject null without throwing an error
   @Host()	   Look for the dependency in the current component or its host injector only
   
40. 


## 📌 Resources

- [Angular Reactive Forms Guide](https://angular.io/guide/reactive-forms)
- [Angular Template-Driven Forms Guide](https://angular.io/guide/forms)
- [Form Validation in Angular](https://angular.io/guide/form-validation)
- [ControlValueAccessor Explained](https://angular.io/api/forms/ControlValueAccessor)





## Angular Architecture

1. **How do you design scalable Angular applications, and what best practices do you follow?**
   - A senior Angular developer should discuss **modular design**, **lazy loading**, **state management (ngRx)**, **code splitting**, and best practices for **separation of concerns**.

2. **How do you decide when to use services versus state management tools like ngRx or Akita?**
   - Look for answers that differentiate between simple data-sharing using **services** and complex state management using **ngRx** for large-scale applications.

3. **How would you structure an Angular app with multiple feature modules?**
   - Expect an explanation on **feature modules**, **core modules**, **shared modules**, and **lazy loading** for performance optimization.

---

## Change Detection & Performance Optimization

1. **What are the different change detection strategies in Angular, and how would you optimize performance for large-scale applications?**
   - Look for a detailed discussion on **`ChangeDetectionStrategy.OnPush`**, optimizing **`*ngFor`** with **`trackBy`**, and handling **large lists** and **complex data** efficiently.

2. **Explain the concept of "dirty checking" in Angular's change detection cycle.**
   - Expect an explanation of how Angular tracks model changes using **zone.js** and performs **dirty checking** on components and their views.

3. **How do you handle performance bottlenecks in Angular, especially when dealing with a large number of components or heavy UI updates?**
   - The answer should include techniques such as **virtual scrolling**, **debouncing**, **lazy loading**, and avoiding unnecessary change detection cycles.

---

## Advanced RxJS Usage

1. **What are the key differences between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`, and when would you use each?**
   - Look for a clear understanding of how these operators handle **observable streams**, especially in scenarios like **HTTP requests**, **user input**, and **asynchronous actions**.

2. **Explain the concept of higher-order mapping and how it's used in Angular services or HTTP requests.**
   - Expect a deep understanding of how **higher-order mapping** works with **RxJS operators** like `switchMap` and how they can flatten **observable streams**.

3. **How would you manage long-running observable streams in Angular without causing memory leaks?**
   - Expect strategies like **`takeUntil`**, using **`AsyncPipe`** in templates, and properly managing subscriptions to avoid memory leaks.

---

## State Management

1. **Can you explain how you would implement a feature with ngRx in a large Angular app?**
   - Expect a detailed explanation on using **actions**, **reducers**, **effects**, **selectors**, and managing **async data** in an Angular app using **ngRx**.

2. **How would you handle local state vs global state in a large Angular application?**
   - A senior developer should describe how to manage **local state** (within a component or service) versus **global state** (using **ngRx**, **Akita**, or **NgXS**) in a large app.

3. **How do you manage "shared" or "global" state in Angular without using ngRx?**
   - Look for alternatives like **RxJS `BehaviorSubject`**, **`ReplaySubject`**, or using **services** for shared state, with proper **observable patterns** to keep things clean.

4. **What are selectors in ngRx and how do you optimize them for performance in large-scale apps?**
   - The answer should include the concept of **memoization** in selectors, **composing selectors** for efficiency, and how to avoid unnecessary re-renders.

---

## Lazy Loading & Module Federation

1. **How would you implement lazy loading in an Angular application, and what are the best practices for optimizing it?**
   - Expect answers on **feature module lazy loading**, **preloading strategies**, and the use of **`PreloadAllModules`** for better user experience.

2. **Can you explain Angular's module federation?**
   - A senior developer should explain how **module federation** works with Angular and how to create **micro-frontends** by loading separate Angular applications as modules at runtime.

---

## Angular Build Process

1. **How do you manage different build environments in Angular (development, staging, production)?**
   - Expect an answer on **angular.json**, **environment.ts**, and how to use **file replacements** and **build configurations** to target multiple environments.

2. **What is Ahead-of-Time (AOT) compilation, and why is it important?**
   - The answer should include the benefits of **AOT compilation** such as smaller bundle sizes, **faster rendering**, and **improved security**.

3. **How do you configure Webpack in an Angular application?**
   - Expect a discussion about **Angular CLI's Webpack integration**, how to create **custom Webpack configurations**, and optimizing the build process for large apps.

---

## Advanced Directives & Dynamic Components

1. **How would you create a dynamic component in Angular?**
   - Expect an explanation using **`ComponentFactoryResolver`**, **`ViewContainerRef`**, and how to dynamically add/remove components at runtime.

2. **How would you implement a custom structural directive (like `ngIf`) in Angular?**
   - A senior developer should explain how to use **`TemplateRef`** and **`ViewContainerRef`** to manipulate the DOM and create dynamic directives.

3. **What are the performance considerations when using dynamic components or structural directives?**
   - Look for answers on **change detection**, **view recycling**, **lazy loading**, and performance optimization techniques when dealing with dynamic components.

---

## Advanced Testing Strategies

1. **How do you structure unit tests for an Angular component that has complex dependencies or services?**
   - Expect answers on how to mock **services**, use **TestBed** to set up testing environments, and how to test both **synchronous** and **asynchronous** logic.

2. **How would you test components that depend on external services (e.g., HTTP requests)?**
   - Look for familiarity with **HttpClientTestingModule**, mocking **HTTP responses**, and verifying the expected behavior of HTTP calls.

3. **How do you approach testing state management with ngRx in Angular?**
   - Expect answers on testing **ngRx actions**, **reducers**, and **effects**, along with the use of **TestStore** to verify state transitions.

---

## Security & Best Practices

1. **What are the key security concerns you need to consider when building Angular applications?**
   - A senior developer should discuss **XSS (Cross-Site Scripting)**, **CSRF (Cross-Site Request Forgery)**, **CORS**, and secure **authentication** (JWT, OAuth2).

2. **How would you secure API calls in Angular?**
   - Expect answers on using **OAuth 2.0**, **JWT tokens**, **HTTP interceptors** for attaching tokens, and how to securely handle **user credentials**.

---

### Conclusion

These advanced Angular interview questions are designed to test the depth of knowledge and experience of a senior Angular developer with **8+ years** of experience. Topics cover **architecture**, **performance optimization**, **RxJS**, **state management**, **testing**, and **security** practices. Prepare to demonstrate both your technical knowledge and real-world experience with Angular.

---


Certainly! Here are some advanced Angular interview questions tailored for a Lead Developer with 8+ years of experience. These questions cover various aspects of Angular, including architecture, performance optimization, testing, and best practices:

### 1. **Change Detection Strategy**

* **Question:** Explain the difference between the `Default` and `OnPush` change detection strategies. How does Angular determine when to check for changes when `OnPush` is used?
* **Follow-up:** In what situations would you recommend using `OnPush`? How would you handle complex forms or UI components that require frequent updates when using `OnPush`?

### 2. **Zone.js and Performance Optimization**

* **Question:** How does Angular’s change detection mechanism rely on Zone.js? Can you describe how Zone.js helps in detecting asynchronous operations like HTTP requests or setTimeout calls?
* **Follow-up:** What performance considerations should be kept in mind when working with Zone.js? How can you optimize Angular's performance in highly interactive applications with multiple asynchronous tasks?

### 3. **Lazy Loading and Preloading Strategies**

* **Question:** Explain the concept of lazy loading in Angular and the various preloading strategies (`PreloadAllModules`, `NoPreloading`, `CustomPreloadingStrategy`). How would you implement a custom preloading strategy and when might it be useful?
* **Follow-up:** How would you ensure the efficient loading of large Angular applications and minimize the initial bundle size?

### 4. **NgRx (or State Management)**

* **Question:** What are the benefits of using NgRx for state management in Angular? Can you describe the architecture of an NgRx store and how the different pieces (actions, reducers, selectors) fit together?
* **Follow-up:** How would you implement a feature that fetches data asynchronously using NgRx, and how would you handle error states, retries, or loading states effectively?

### 5. **Angular Compiler and Ahead of Time Compilation (AOT)**

* **Question:** Can you explain the difference between Just-in-Time (JIT) and Ahead-of-Time (AOT) compilation in Angular? How do these two affect the application’s performance and deployment?
* **Follow-up:** In what situations would you use AOT vs. JIT? How would you go about debugging issues that only appear in AOT mode?

### 6. **Custom Directives and Pipes**

* **Question:** Can you explain the use cases for creating custom structural and attribute directives? What are the key differences between `ngOnInit` and `ngOnChanges` within the lifecycle of a directive?
* **Follow-up:** How would you implement a custom pipe, and how would you handle performance issues related to pipes that involve heavy computations?

### 7. **RxJS and Observables**

* **Question:** How does Angular use RxJS to handle asynchronous programming? Can you explain the role of Observables in Angular’s HttpClient and FormControl API?
* **Follow-up:** Can you walk us through how you would implement a complex RxJS-based workflow with operators like `switchMap`, `mergeMap`, `combineLatest`, and `debounceTime` in a real-world feature?

### 8. **Angular Dependency Injection (DI) and Hierarchical Injectors**

* **Question:** Explain how Angular’s Dependency Injection system works and the concept of hierarchical injectors. Can you describe how the injector tree works and how different injectors (root vs. lazy-loaded module) behave?
* **Follow-up:** How would you handle scenarios where you need to override a service or provide different configurations for different modules?

### 9. **Angular Modules and Lazy-Loading**

* **Question:** How do you structure Angular applications using multiple feature modules? How does Angular’s module system help with scalability, and how would you manage the inter-dependencies between modules?
* **Follow-up:** When implementing lazy-loaded modules, how would you structure them to ensure maintainability and performance?

### 10. **Security in Angular**

* **Question:** What are some of the best practices for ensuring security in Angular applications? How does Angular’s built-in security features (like sanitization, DOM-based security) help protect against XSS and CSRF?
* **Follow-up:** What steps would you take to secure data from API calls? How would you implement user authentication and authorization in Angular using JWT tokens?

### 11. **Angular Universal (SSR)**

* **Question:** Can you explain what Angular Universal is and how server-side rendering (SSR) works in Angular? What are the advantages of using Angular Universal for SEO and performance optimization?
* **Follow-up:** How would you implement Angular Universal in a production environment? What are some challenges you would face when implementing SSR, and how can they be overcome?

### 12. **Unit Testing and E2E Testing**

* **Question:** How would you approach unit testing Angular components, services, and directives? What are the key differences between unit tests and integration tests in Angular?
* **Follow-up:** How would you handle testing for asynchronous code or side effects in Angular? Can you discuss your approach to E2E testing with tools like Protractor or Cypress?

### 13. **Performance Optimization Techniques**

* **Question:** What are some advanced techniques for optimizing Angular application performance, both in terms of bundle size and runtime performance?
* **Follow-up:** How would you use tools like Angular CLI, Webpack, and Lighthouse to analyze and optimize the performance of an Angular app?

### 14. **Progressive Web Apps (PWA) in Angular**

* **Question:** What is a Progressive Web App (PWA), and how does Angular support PWA features? How would you enable offline capabilities, caching strategies, and push notifications in an Angular app?
* **Follow-up:** What challenges would you face when making an Angular app a PWA, and how would you address them?

### 15. **Angular Update Strategies and Breaking Changes**

* **Question:** Angular frequently releases updates. How would you handle the process of upgrading a large Angular application to a new major version? How would you deal with breaking changes and ensure minimal downtime?
* **Follow-up:** Can you share any experience dealing with deprecated APIs or removing legacy features during the upgrade process?

### 16. **Web Workers and Performance in Angular**

* **Question:** How can Angular applications utilize Web Workers for performance optimization? Can you explain how to create and manage a Web Worker in an Angular application?
* **Follow-up:** How would you manage communication between the main thread and Web Workers, and what performance benefits can be expected in a real-world scenario?

### 17. **Internationalization (i18n)**

* **Question:** How would you implement internationalization (i18n) in an Angular application? Can you walk us through the process of preparing an Angular app for multilingual support and handling dynamic language switching?
* **Follow-up:** What are the challenges in handling translations, formatting, and date/time in a globalized Angular application, and how would you solve them?

### 18. **Custom Webpack Configuration**

* **Question:** Have you ever customized the Angular build process using Webpack? Can you explain how you would extend or modify the Webpack configuration for advanced use cases, such as adding custom loaders or plugins?
* **Follow-up:** What challenges can arise when customizing Webpack in an Angular project, and how can you mitigate those?

### 19. **Stateful vs Stateless Components**

* **Question:** How do you differentiate between stateful and stateless components in Angular? What are the advantages of using stateless components, and how do they fit into Angular’s component architecture?
* **Follow-up:** How would you design a complex UI in Angular while maintaining a clear separation of concerns between state management, presentation logic, and data handling?

### 20. **Module Federation with Angular**

* **Question:** What is Module Federation, and how can it be used to improve scalability in Angular applications? How would you configure Angular to use Webpack Module Federation for building micro-frontends?
* **Follow-up:** Can you discuss the potential challenges of using Module Federation with Angular, especially in terms of shared dependencies and version conflicts?

---

These questions are meant to probe both deep technical expertise and experience in architecting large-scale, high-performance Angular applications. A Lead Developer with over 8 years of experience should be able to confidently discuss the intricacies of Angular and provide practical solutions based on years of experience.
