# Angular Interview Questions

This repository contains a collection of **Angular interview questions** categorized by difficulty levels: **Basic**, **Mid**, and **Advanced**. These questions cover a wide range of topics in Angular, from core concepts to advanced techniques and best practices.

## Table of Contents

- [Basic Level Questions](#basic-level-questions)
- [Mid Level Questions](#mid-level-questions)
- [Advanced Level Questions](#advanced-level-questions)

## Basic Level Questions

1. **What is Angular?**
   - Angular is a platform and framework for building client-side applications using HTML, CSS, and JavaScript/TypeScript. It provides a powerful set of tools for building single-page applications (SPAs).

2. **What is a Component in Angular?**
   - A component in Angular is a building block of the application. It controls a part of the user interface (UI) and is defined by a class, template (HTML), and styles (CSS).

3. **What is the difference between `ngOnInit` and `constructor`?**
   - The `constructor` is a TypeScript feature used to initialize the class instance. The `ngOnInit` lifecycle hook is Angular-specific and is called after Angular has initialized the component’s input properties.

4. **What are Angular Directives?**
   - Directives are classes that modify the behavior or appearance of elements in the DOM. They are either structural (`*ngIf`, `*ngFor`) or attribute directives (`ngClass`, `ngStyle`).

5. **What is Data Binding in Angular?**
   - Data binding is a mechanism that allows communication between the component class and the view. It can be unidirectional (one-way) or bidirectional (two-way), including **Interpolation**, **Property Binding**, **Event Binding**, and **Two-Way Binding**.

6. **What are Modules in Angular?**
   - An Angular module is a container for components, services, and other code files. It helps organize an application into cohesive blocks of functionality.

7. **What is the purpose of `ngIf` in Angular?**
   - `ngIf` is a structural directive used to add or remove elements from the DOM based on a condition.

---

## Mid Level Questions

1. **Explain Angular Lifecycle Hooks.**
   - Angular provides lifecycle hooks that allow you to tap into different phases of a component or directive’s life. Common ones include `ngOnInit`, `ngOnChanges`, `ngDoCheck`, `ngAfterViewInit`, `ngAfterContentInit`, and `ngOnDestroy`.

2. **What is the difference between `ngOnInit` and `ngAfterViewInit`?**
   - `ngOnInit` is called once after the component’s data-bound properties have been initialized. `ngAfterViewInit` is called after Angular initializes the component's view and child views.

3. **What is Dependency Injection in Angular?**
   - Dependency Injection (DI) is a design pattern used by Angular to manage the lifecycle and dependencies of services. It allows components and services to get their dependencies (like other services or data) from the Angular DI system rather than creating them manually.

4. **How does Angular handle forms?**
   - Angular has two types of forms: **Template-driven forms** (easy to use, declarative) and **Reactive forms** (more programmatic and flexible). Reactive forms are often used for complex forms with validation, while template-driven forms are simpler and easier for basic forms.

5. **What are Observables in Angular?**
   - Observables are a key part of Angular’s reactive programming model. They represent asynchronous streams of data and allow you to handle events, HTTP requests, and more. Angular uses **RxJS** (Reactive Extensions for JavaScript) to handle Observables.

6. **What is a Service in Angular?**
   - A service is a class that provides functionality or data that can be used by components and other services. It is commonly used for business logic, data access, and shared functionality across components.

7. **What is RxJS and how is it used in Angular?**
   - RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. Angular leverages RxJS for asynchronous operations like HTTP requests, user input events, etc. Operators like `map`, `mergeMap`, `switchMap`, etc., are commonly used for handling streams of data.

---

## Advanced Level Questions

1. **What is Change Detection in Angular and how does it work?**
   - Angular uses a change detection mechanism to update the view when the model changes. It checks the components' data and compares them to the previous state. It uses strategies like **Default** (checks all components) and **OnPush** (checks only when inputs change).

2. **What is Lazy Loading in Angular?**
   - Lazy loading is a technique where you load modules only when they are needed, rather than at the initial load. This helps improve application performance by reducing the initial loading time.

3. **What is a Factory Provider in Angular?**
   - A factory provider is a provider that allows you to create an instance of a service in a more dynamic way. You can use a factory function to decide how and when to create the service instance.

4. **What is the purpose of `ngRx` in Angular?**
   - `ngRx` is a state management library for Angular, based on **Redux** principles. It helps manage the state of an application in a consistent way, allowing for predictable state transitions and easier debugging.

5. **How do you optimize the performance of an Angular application?**
   - Some performance optimization techniques include:
     - **Lazy loading** of modules.
     - Using **trackBy** with `*ngFor` to optimize DOM updates.
     - Enabling **OnPush Change Detection** to reduce unnecessary checks.
     - Using **AOT (Ahead of Time) Compilation** for faster rendering.
     - Minifying and bundling assets.
     - Reducing the size of third-party libraries.
     - **Debouncing** user inputs for events like search.

6. **What is the difference between `ngModel` and Reactive Forms for handling form input?**
   - `ngModel` is typically used for template-driven forms, where the form is declarative and simpler. Reactive forms are more programmatic, with explicit control over form elements, validations, and updates.

7. **What is the role of `angular-cli.json` or `angular.json` in an Angular project?**
   - `angular.json` is a configuration file that Angular CLI uses to define project settings, build options, and various environments. It handles settings for assets, build configurations, testing, and more.

8. **What are Angular Guards and how are they used?**
   - Guards are used to protect routes and control navigation. Types include `CanActivate`, `CanActivateChild`, `CanLoad`, and `CanDeactivate`. Guards can prevent access to certain routes based on conditions like user authentication.

---



## Basic Concepts
What is Angular, and how is it different from AngularJS?
What are the building blocks of Angular?
Explain the difference between components and directives.
What is data binding, and what are its types?
What is the purpose of Angular CLI? Can you name some CLI commands?
What is a TypeScript, and why is it used in Angular?

## Components and Templates
What is a component? How do you create and use it?
Explain the role of @Input() and @Output() decorators.
What is the difference between template-driven forms and reactive forms?
How do you handle events in Angular templates?
What are lifecycle hooks? Can you name and explain their purposes?
How would you implement conditional rendering in an Angular template?

## Directives
What are Angular directives, and how are they classified?
What is the difference between structural and attribute directives?
How do you create a custom directive?
Explain the purpose of ngIf, ngFor, and ngClass.

## Services and Dependency Injection
What is a service in Angular, and how do you create one?
What is dependency injection, and how does Angular implement it?
What is the purpose of a singleton service?
Explain the difference between providedIn: 'root' and providing a service in a specific module.

## Routing
How does routing work in Angular?
What is the purpose of RouterModule and Routes?
How do you implement lazy loading in Angular?
What are route guards, and what types of guards are available?
How do you pass parameters in Angular routes?

## Forms
What is the difference between reactive forms and template-driven forms?
How do you perform form validation in Angular?
How do you bind form data to the component?

## HTTP and Observables
How do you make HTTP requests in Angular?
What is the purpose of the HttpClient module?
What is an observable, and how is it used in Angular?
What is the difference between Promise and Observable?

## Angular Modules
What is the purpose of NgModules?
Explain the difference between feature modules and shared modules.
How do you organize an Angular application into modules?

## Performance and Optimization
What is AOT (Ahead-of-Time) compilation, and why is it important?
How does Angular handle tree shaking?
What are some ways to optimize an Angular application?

## Miscellaneous
What are Angular Pipes? How do you create a custom pipe?
What is the difference between Angular’s ngOnInit and constructor?
What is the purpose of Angular’s zone.js?
What are interceptors, and how are they used in Angular?
Explain the role of Change Detection in Angular.
What is the role of the trackBy function in ngFor?

## Practical Scenarios
How would you debug an Angular application?
How would you handle a slow-loading Angular application?
Describe a project you worked on and your role in the team.
How do you manage version control in Angular projects?




What is Angular, and why does Angular use TypeScript?
What is Angular Material?
What is a directive, and what are the types of directives
What are the building blocks of Angular?
What is Dependency Injection (DI)
What is data binding, and how many ways can it be implemented?
Could you explain the various types of filters in Angular.
What is ViewEncapsulation, and how many ways can it be implemented in Angular?
Why prioritize TypeScript over JavaScript in Angular?
What do you understand By RouterOutlet and RouterLink
What happens when you use the script tag within a template?
What is ViewChild and you will want to use {static: false}
How many ways can we share data between components?
Angular Lifecycle Hooks
What is AOT compilation? What are the advantages of AOT?
What is “sourceMap”: true in angular
What is RxJS?
Promise vs Obserable
What are Template and Reactive forms?
What are Forroot and childroot in Angular?
How to handle multiple http requests in Angular?
Map vs mergeMap vs switchMap vs concatMap
What are class decorators?
What is the Component Decorator in Angular?
Bundle Analysis
When to Use Put and Patch?
What is purpose of the Angular.json
Angular 17 new features:
What are some of the differences between a standard Angular component and a standalone component?
What is bootstrapModule in Angular?
Angular testing framework?
pre-fetch your data by using Resolvers
Guard in angular
Host binding and Host listening
Polyfill in Angular
Router outlet in angular
Can we use multiple router outlet
Can i write a component without constructor
Pure pipe vs Impure pipe
Formbuilder vs Formgroup in angular
View encapsulation in angular


### End of Questions
