To handle a layout that changes between login and post-login views in **Angular**, the best approach is to use **multiple layouts** and switch between them based on route configuration.

### ✅ Requirement Summary:

* **Before login (e.g. `/login`)**: Show a **blank layout** (no header/footer).
* **After login (e.g. `/dashboard`, `/profile`)**: Show a **full layout** (with header/footer/sidebar).

---

## ✅ Solution: Use Multiple Layout Components with Route Nesting

### 1. **Create Two Layout Components**

* `BlankLayoutComponent`: Used for login, signup, etc.
* `FullLayoutComponent`: Used after login, with header, footer, etc.

```bash
ng generate component layouts/blank-layout
ng generate component layouts/full-layout
```

---

### 2. **Define Layout Templates**

#### `blank-layout.component.html`

```html
<router-outlet></router-outlet>
```

#### `full-layout.component.html`

```html
<app-header></app-header>
<app-sidebar></app-sidebar>

<div class="main-content">
  <router-outlet></router-outlet>
</div>

<app-footer></app-footer>
```

---

### 3. **Setup Routes with Nested Children**

```ts
// app-routing.module.ts
const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard], // protect post-login routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      // other post-login routes
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      // other public routes
    ]
  },
  { path: '**', redirectTo: 'login' }
];
```

---

### 4. **Optional: AuthGuard to Protect Post-login Routes**

```ts
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
```

---

## ✅ Why This Approach Works Well

| Benefit                | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| Separation of Concerns | Clean separation of layouts by purpose (auth vs app shell).        |
| Reusability            | Easy to reuse layouts for other route groups (admin, public, etc). |
| Scalability            | Works well even as the app grows.                                  |
| Maintainability        | Layout logic is encapsulated in its own component.                 |

---
