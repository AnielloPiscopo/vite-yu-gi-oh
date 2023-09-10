<div align="center">
<h1 align="center">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" width="100" />
<br>VITE-YU-GI-OH
</h1>
<h3>◦ Container of yu-gi-oh cards with filter available based on their archetypes</h3>
<h3>◦ Developed during the course of Full-Stack Web Developer with Boolean</h3>
<h3>◦ Link: https://aniellopiscopo.github.io/vite-yu-gi-oh/
</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-E34F26.svg?style&logo=CSS3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style&logo=vuedotjs&logoColor=white" alt="Vue.js" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/AnielloPiscopo/vite-yu-gi-oh?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/AnielloPiscopo/vite-yu-gi-oh?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/AnielloPiscopo/vite-yu-gi-oh?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/AnielloPiscopo/vite-yu-gi-oh?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [📄 License](#-license)

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                                         | Summary                   |
| ---                                                                                                                                          | ---                       |
| [index.html](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/index.html)                                                           | This is the main HTML entry point for your web application. It's where you define the structure of your HTML document, include CSS and JavaScript files, and specify the root element where the Vue.js application will be mounted.|
| [vite.config.js](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/vite.config.js)                                                   | This is a configuration file used with Vite, which is a build tool and development server designed for modern web development. |
| [App.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\App.vue)                                                             | This is the base of the work and it serves as the root component of the Vue.js application and contains the overall layout, navigation, and the top-level structure of your app. |
| [main.js](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\main.js)                                                             | This file is the entry point of the application. It's where you create and configure the Vue instance, set up routing (if used), and specify which component to render in the root DOM element |
| [store.js](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\store.js)                                                           | This file contains the global and general variables and functions of the work. |
| [AppHeader.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\header\AppHeader.vue)                               | This is the component that represents the header tag of the webpage. |
| [AppMain.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\main\AppMain.vue)                                     | This is the component that represents the main tag of the webpage. |
| [CardsArchetypeSelectField.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\main\CardsArchetypeSelectField.vue) | This is the component that represents the filter field of the webpage containing the various archetypes of the yu-gi-oh cards. |
| [CardsContainer.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\main\CardsContainer.vue)                       | This is the component that represents the container of the yu-gi-oh cards. |
| [SingleCard.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\main\SingleCard.vue)                               | This is the component that represents a single yu-gi-oh card. |
| [AppLoader.vue](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\components\other\AppLoader.vue)                                | This is the component that represents the loader of the application. |
| [general.css](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\style\general.css)                                               | This is the file css that contains the general style of the work. |
| [general.css.map](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\style\general.css.map)                                       | This is a source map file generated by SASS. |
| [general.scss](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\style\general.scss)                                             | This is the file scss that contains the general style of the work. |
| [_variables.scss](https://github.com/AnielloPiscopo/vite-yu-gi-oh/blob/main/src\style\partials\_variables.scss)                              | This is the file scss that contains the general stylistic variables of the work. |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - ℹ️ Node.js and npm (Node Package Manager): Make sure you have Node.js installed on your computer. You can download Node.js from the official website: https://nodejs.org/. Node.js includes npm, which will be used to install project dependencies.
> - ℹ️ Git: Ensure you have Git installed on your computer. You can download Git from the official website: https://git-scm.com/. Git allows you to clone the GitHub repository onto your computer.

### 📦 Installation

1. Clone the vite-yu-gi-oh repository:
```sh
git clone https://github.com/AnielloPiscopo/vite-yu-gi-oh
```

2. Change to the project directory:
```sh
cd vite-yu-gi-oh
```

3. Install the dependencies:
```sh
npm i
```

### 🎮 Using vite-yu-gi-oh

```sh
npm run dev
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for additional info.

---

