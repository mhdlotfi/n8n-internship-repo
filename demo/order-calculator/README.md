# Order Calculator

یک پروژه کوچک بدون وابستگی خارجی برای محاسبه مجموع سفارش و تخفیف با استفاده از ES Modules.

## اجرای نمونه

از ریشه مخزن اجرا کنید:

```bash
node demo/order-calculator/smoke.js
```

## اجرای تست‌ها

```bash
node --test demo/order-calculator/test/*.test.js
```

## API

تابع `calculateSubtotal(items)` برای هر آیتم، `price * quantity` را محاسبه می‌کند. قیمت باید عدد متناهی و نامنفی و تعداد باید عدد صحیح مثبت باشد.

تابع `calculateTotal(items, discountPercent = 0)` شیئی شامل `subtotal`، `discountAmount` و `total` برمی‌گرداند. همه مبلغ‌ها تا دو رقم اعشار گرد می‌شوند. `discountPercent` باید یک عدد متناهی بین صفر تا صد، شامل دو سر بازه، باشد.
