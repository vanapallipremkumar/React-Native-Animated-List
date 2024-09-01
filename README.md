# React Native Animated List

This React Native application features an animated list with infinite scrolling. Initially, the list renders 30 items, and as you scroll, it continues to load more items using array methods, providing a seamless experience. The list also includes an animation at the top that affects the opacity and translates the items in the Y direction.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vanapallipremkumar/React-Native-Animated-List.git
   cd React-Native-Animated-List
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

1. **Initial Render:**

   - The app starts by rendering a list of 30 items.

2. **Infinite Scrolling:**

   - As you scroll down, additional items are added to the list using array methods, creating an infinite scrolling experience.

3. **Top Animation:**
   - The list includes a top animation that adjusts the opacity and translation in the Y direction based on the scroll position.

## Features

- **Infinite Scroll:**

  - Additional items are dynamically added to the list as you scroll, ensuring a continuous user experience.

- **Animated List:**

  - Includes an animation at the top of the list that adjusts opacity and position, enhancing the visual appeal.

- **Optimized Performance:**
  - The app efficiently handles large datasets, minimizing memory usage and rendering time.

## Folder Structure

```plaintext
|-- src
|    |-- components
|    |    |-- AnimatedList.tsx
|    |    |-- AnimatedListItem.tsx
|    |-- constants.ts
App.tsx
```

- **`components/`:** Contains the `AnimatedList.tsx` component responsible for rendering the list and `AnimatedListItem.tsx` for each list item with animations.
- **`constants.ts`:** Stores any constants used throughout the application.
- **`App.tsx`:** The main entry point for the application.

## Reference Video

- For a quick overview of the app's functionality, you can watch the following video:

![React Native Animated List](https://github.com/user-attachments/assets/1e86e7c6-a983-4bb3-ae9d-54b54a67324c)

## Contributing

Contributions are welcome! If you have any ideas or suggestions for improvements, feel free to open an issue or submit a pull request.
