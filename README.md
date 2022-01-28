# stylis-plugin-extra-class-names-specifity

stylis plugin to use with @emotion/cache, supports stylis v4+

### Install

```bash
npm i stylis-plugin-extra-class-names-specifity
```
or
```bash
yarn add stylis-plugin-extra-class-names-specifity
```

### import plugin and CacheProvider

```js
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import plugin from 'stylis-plugin-extra-class-names-specifity';
```

### and use to wrapp your app
```jsx
<CacheProvider createCache={[plugin(2)]}>
    <App />
</CacheProvider>
```