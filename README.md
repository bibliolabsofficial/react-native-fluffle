<div align="center">
    <img src="./assets/images/logo.png" width="128">
    <h1><a href="https://fluffle.github.io">Fluffle</a></h1>
    <p><strong>Advanced StyleSheets, the Native way.</strong><br>
    Style React Native apps with precision and control</p>
    <p><strong>By Bibliolabs</strong></p>

[![NPM Version](https://img.shields.io/npm/v/fluffle?logo=npm&logoColor=cb3837&label=Version&color=cc6699)](https://npmjs.com/package/react-native-fluffle)
[![NPM Downloads](https://img.shields.io/npm/dw/react-native-fluffle?logo=npm&logoColor=cb3837&label=Downloads&color=cc6699)](https://npmjs.com/package/react-native-fluffle)
[![Github](https://img.shields.io/badge/License-MIT-cc6699)](https://github.com/bibliolabsofficial/react-native-fluffle/blob/main/LICENSE)
[![runs-with-expo](https://img.shields.io/badge/Runs%20with%20Expo-cc6699.svg?logo=EXPO&labelColor=fff&logoColor=000)](https://expo.dev/client)
[![runs-with-CLI](https://img.shields.io/badge/Runs%20with%20CLI-cc6699.svg?logo=React&labelColor=555&logoColor=61dbfb)](https://reactnative.dev/docs/getting-started-without-a-framework)

</div>

## 🚨 Migration Notice  

**Fluffle is the official successor to NativeSass.**  

- 🛑 `NativeSass` is now **deprecated**  
- 🚀 All new development happens in **Fluffle**  
- 🔄 If you are using NativeSass, migration is strongly recommended  

Fluffle is a complete evolution of NativeSass, with improved architecture, better performance, and a clearer developer experience.

---

## ✨ What is Fluffle?  

Fluffle is a styling library for React Native that brings **advanced styling capabilities inspired by Sass and CSS**, while fully respecting the native React Native paradigm.

It allows you to write styles that are:

- More expressive  
- More maintainable  
- More scalable  

Without abandoning the **native StyleSheet approach**.

---

## ⚡ Why Fluffle?  

React Native styling can become repetitive and hard to scale.  
Fluffle solves that by introducing powerful abstractions:

- 🧩 Nested styles (like Sass)  
- 🔁 Reusable style patterns  
- 🎯 Cleaner and more readable code  
- ⚙️ Advanced shorthand properties  
- 📱 Built specifically for React Native (not a CSS hack)  

---

## 🔥 Example  

### Without Fluffle

```js
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
```

## With Fluffle

```js
const styles = create({
  container: {
    padding: 16,

    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
});

```

## Installation

To use Fluffle in your project, just run this command from your terminal if you're using `npm`:

```bash
npm install react-native-fluffle
```

Or use the following if you're using `yarn` or `pnpm`:

```bash
yarn add react-native-fluffle
```

```bash
pnpm add react-native-fluffle
```

Fluffle works with **both** the [React Native CLI](https://reactnative.dev/docs/getting-started-without-a-framework) and [Expo CLI](https://docs.expo.dev/more/expo-cli/), and the installation steps are the same.
