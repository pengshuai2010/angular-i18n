## adding support for a new locale
1. add a new item in languages array in src/app/language-selection/language-selection.component.ts
2. add a new item in `i18n-merge` and `build-i18n` script of package.json
3. modify _redirects
4. modify nginx-custom.conf

## After making changes to template or code
Run `npm run extract` to update messages.xlf.

Then run `npm run i18n-merge` to integrate changes to messages.xlf into messages.lang.xlf, which lang could be en, zh-cn, zh-tw etc.

## build and run in prod mode
```
npm run build-i18n && docker build -t i18n  . && docker run --name i18n-sample --rm -p 4200:4200 i18n
```

## build and run in dev mode
App will be reloaded live upon changes, but language selection won't work.
```
npm run start-en
```
