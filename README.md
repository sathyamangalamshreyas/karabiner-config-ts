# ⌨️ Karabiner TypeScript Configuration

<p align="center">
  <img src="https://img.shields.io/badge/Language-TypeScript-blue.svg?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/macOS-Karabiner--Elements-000000.svg?style=for-the-badge&logo=apple" alt="Karabiner-Elements" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
</p>

Manage and maintain your complex [Karabiner-Elements](https://karabiner-elements.pqrs.org/) keyboard configurations programmatically using **TypeScript**! 🚀

---

## 💡 About

Writing and updating Karabiner rules directly in JSON (`~/.config/karabiner/karabiner.json`) can be verbose, error-prone, and difficult to maintain.

This repository uses **[`karabiner.ts`](https://github.com/evan-liu/karabiner.ts)** created by [Evan Liu](https://github.com/evan-liu) to write clean, type-safe, and modular keyboard modification rules in TypeScript, which are automatically compiled into Karabiner-Elements JSON format.

---

## ✨ Features

- 🛡️ **Type-Safe Rules:** Full auto-completion and compile-time error checking for keys, modifiers, and conditions.
- 🧩 **Modular Design:** Organize shortcuts into intuitive layers (Hyper key, Simlayers, Leaders, App-specific controls).
- ⚙️ **Automatic Generation:** Generate thousands of lines of valid JSON from concise TypeScript code.
- 📦 **Git-Friendly:** Keep your keyboard layout configuration tracked in version control cleanly.

---

## 🛠️ Prerequisites

Before getting started, make sure you have:

- 🍏 **macOS** with [Karabiner-Elements](https://karabiner-elements.pqrs.org/) installed and running.
- 🟢 **Node.js** (v18 or higher recommended) and `npm` or `pnpm` installed.

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/sathyamangalamshreyas/karabiner-config-ts.git
cd karabiner-config-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build & Apply Configuration

Run the build script to compile your TypeScript rules and automatically update your Karabiner configuration file (`~/.config/karabiner/karabiner.json`):

```bash
npm run build
```

---

## 📁 Repository Structure

```text
.
├── src/                # TypeScript rule definitions
│   └── karabiner.ts    # Main configuration file / rules
├── package.json        # Dependencies and build scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

---

## 🔧 Usage & Writing Rules

Write or modify your custom mappings in your TypeScript source files using the `karabiner.ts` API syntax:

```typescript
import { rule, writeToProfile } from 'karabiner.ts'

writeToProfile('Default', [
  // Example: Change Caps Lock to Escape when tapped, Hyper when held
  rule('Caps Lock to Hyper / Escape').manipulators([
    map('caps_lock')
      .toHyper()
      .toIfAlone('escape'),
  ]),
])
```

For detailed documentation on supported manipulators, layers, and shortcuts, refer to the official [karabiner.ts documentation](https://karabiner.ts.evanliu.dev/).

---

## 🤝 Acknowledgments

- **[`karabiner.ts`](https://github.com/evan-liu/karabiner.ts)** by [Evan Liu](https://github.com/evan-liu) – The powerful TypeScript framework enabling programmatic Karabiner configurations.
- **[Karabiner-Elements](https://karabiner-elements.pqrs.org/)** – The essential keyboard customizer for macOS.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).