## adding support for a new locale
1. add a new xlf file in src/locale
2. add a new item in languages array in src/app/language-selection/language-selection.component.ts
3. add a new item in build-i18n script of package.json
4. modify _redirects
5. modify nginx-custom.conf

## build and run
```
npm run build-i18n && docker build -t i18n  . && docker run --name i18n-sample --rm -p 4200:4200 i18n
```
