# Order Calculator

یک پروژه کوچک بدون وابستگی خارجی برای محاسبه مجموع سفارش با استفاده از ES Modules.

## اجرای نمونه

از ریشه مخزن اجرا کنید:

```bash
node demo/order-calculator/smoke.js
```

## اجرای تست‌ها

```bash
node --test demo/order-calculator/test/*.test.js
```

تابع `calculateSubtotal(items)` برای هر آیتم، `price * quantity` را محاسبه می‌کند. قیمت باید عدد متناهی و نامنفی و تعداد باید عدد صحیح مثبت باشد.
