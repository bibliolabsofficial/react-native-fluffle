<div align="center">
    <img src="./assets/images/logo.png" width="128">
    <h1><a href="https://react-native-fluffle.github.io">Fluffle</a></h1>
    <p><strong>Advanced StyleSheets, the Native way.</strong><br>
    Style React Native apps with precision and control</p>
    <p><strong>By Bibliolab</strong></p>

[![NPM Version](https://img.shields.io/npm/v/@bibliolab/react-native-fluffle?logo=npm&logoColor=cb3837&label=Version&color=cc6699)](https://npmjs.com/package/@bibliolab/react-native-fluffle)
[![NPM Downloads](https://img.shields.io/npm/dw/@bibliolab/react-native-fluffle?logo=npm&logoColor=cb3837&label=Downloads&color=cc6699)](https://npmjs.com/package/@bibliolab/react-native-fluffle)
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
- 📏 `rem` units for scalable design
- 📱 Built specifically for React Native (not a CSS hack)

---

## 🔥 Example

### Without Fluffle

```ts
const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  cardUsername: {
    fontSize: 14,
    color: '#666',
  },
  cardActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  cardButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 8,
  },
  cardButtonPrimary: {
    backgroundColor: '#2563eb',
  },
  cardButtonSecondary: {
    backgroundColor: '#e5e7eb',
  },
  cardButtonTextPrimary: {
    color: '#fff',
    fontWeight: '600',
  },
  cardButtonTextSecondary: {
    color: '#111',
    fontWeight: '600',
  },
});
```

## With Fluffle

```js
const styles = create({
  card: {
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '0.75rem',

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '0.75rem',

      avatar: {
        width: '3rem',
        height: '3rem',
        borderRadius: '1.5rem',
        marginRight: '0.75rem',
      },

      name: {
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#111',
      },

      username: {
        fontSize: '0.875rem',
        color: '#666',
      },
    },

    actions: {
      flexDirection: 'row',
      marginTop: '1rem',

      button: {
        paddingVertical: '0.625rem',
        paddingHorizontal: '0.875rem',
        borderRadius: '0.5rem',
        marginRight: '0.5rem',

        text: { fontWeight: '600' },

        primary: {
          backgroundColor: '#2563eb',
          text: { color: '#fff' },
        },

        secondary: {
          backgroundColor: '#e5e7eb',
          text: { color: '#111' },
        },
      },
    },
  },
});
```

## Installation

To use Fluffle in your project, just run this command from your terminal if you're using `npm`:

```bash
npm install @bibliolab/react-native-fluffle
```

Or use the following if you're using `yarn` or `pnpm`:

```bash
yarn add @bibliolab/react-native-fluffle
```

```bash
pnpm add @bibliolab/react-native-fluffle
```

Fluffle works with **both** the [React Native CLI](https://reactnative.dev/docs/getting-started-without-a-framework) and [Expo CLI](https://docs.expo.dev/more/expo-cli/), and the installation steps are the same.

## 🧠 Philosophy

Fluffle is **not** a CSS layer on top of React Native.
It is designed to enhance the existing styling system — not replace it — keeping performance, predictability, and native behavior intact.

## 🚧 Upcoming Features

Fluffle is actively evolving. Planned features include:

- 🎨 Object-based shorthand syntax

```ts
 padding: { block: "1rem", inline: "2rem" }
 margin: { top: 10, bottom: 20 }
 gap: { row: 8, column: 4 }
```

- 🧩 Style mixins ($include)
- 📦 Improved composition patterns
- 🧠 Smarter style processing pipeline

These features are designed to enhance developer experience while staying fully compatible with React Native.

## 📚 Documentation

Full documentation is available at:
👉 [react-native-fluffle.github.io](https://react-native-fluffle.github.io)

## 🤝 Contributing

Contributions, ideas, and feedback are welcome!
Feel free to open issues or submit pull requests.
