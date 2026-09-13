# Dev Stack

Dev Stack is a simple React web application where users can explore different web development technologies and build their own development stack. Users can see technology details, add technologies to their stack, and remove them when needed.

## Live Site

https://raisul022.github.io/B14-A05-DevStack/

## GitHub Repository

https://github.com/raisul022/B14-A05-DevStack

## Technologies Used

- React.js
- JavaScript
- Vite
- CSS3
- JSON
- React-Toastify
- Git
- GitHub
- GitHub Pages

## Features

### 1. Technology List

The website shows different popular technologies with useful information.

Each technology card contains:

- Technology icon
- Technology name
- Description
- Category
- Difficulty level
- Rating
- Badge
- Add to Stack button

The technology data is loaded from a JSON file.

### 2. Add Technologies to Stack

Users can add any technology to their own stack by clicking the "Add to Stack" button.

After adding a technology:

- The technology appears in the "Your Stack" section.
- The selected technology count is updated.
- The button changes to "Added to Stack".
- A toast notification is shown.

A technology cannot be added more than once.

### 3. Remove Technologies

Users can remove technologies from their stack.

They can:

- Remove one technology using the remove button.
- Remove all selected technologies using the "Remove All" button.

Toast notifications are also shown when technologies are removed.

### 4. Loading State

When the technology data is being loaded from the JSON file, a loading spinner is displayed.

This helps the user understand that the data is still loading.

### 5. Responsive Design

The website is responsive and works on different screen sizes.

- Desktop: 3 technology cards in a row
- Tablet: 2 technology cards in a row
- Mobile: 1 technology card in a row

The navbar, technology section, stack section, and footer are also adjusted for mobile devices.

### 6. Toast Notifications

React-Toastify is used for showing notifications.

Notifications are shown when:

- A technology is added
- A duplicate technology is added
- A technology is removed
- All technologies are removed

## React Questions and Answers

### 1. What is JSX, and why is it used?

JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript.

It makes React code easier to write and understand because we can create the UI structure directly inside JavaScript.

For example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
Here, <h1>Hello React</h1> is JSX.


2. What is the difference between State and Props?

Props and State are both used to work with data in React, but they have different purposes.

Props:

Props are used to pass data from parent to child.
Props are read-only.
A child component receives props from its parent.

State:

State is used to store data inside a component.
State can change during the application.
When state changes, React updates the UI.

For example:

function TechnologyCard({ technology }) {
  return <h2>{technology.name}</h2>;
}

Here, technology is received as a prop.

3. What is the useState hook, and how is it used in this project?

useState is a React Hook that is used to create and manage state in a functional component.

In this project, I used useState for storing the technology list, selected stack, and loading state.

For example:

const [stack, setStack] = useState([]);

Here:

stack stores the selected technologies.
setStack is used to update the stack.

When a user adds or removes a technology, the stack state is updated.

4. What is the useEffect hook, and why is it used for fetching JSON data?

useEffect is a React Hook used for performing side effects.

In this project, I used useEffect to load the technology data from the JSON file when the application starts.

For example:

useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

The empty dependency array [] means the effect runs when the component loads.

5. Why is the key prop used in React lists?

The key prop is used when we render a list of items in React.

It helps React identify which item has changed, been added, or removed.

In this project, I used the unique technology id as the key.

For example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Using a unique key helps React update the list properly.

6. How is conditional rendering used in this project?

Conditional rendering means showing different UI depending on a condition.

In this project, conditional rendering is used for the loading state and the Your Stack section.

When the data is loading, the loading spinner is shown.

{loading ? (
  <div className="loading-state">
    <div className="loading-spinner"></div>
    <p>Loading technologies...</p>
  </div>
) : (
  // technology cards
)}

Conditional rendering is also used when the stack is empty.

If no technology is selected, the empty stack message is shown.

If technologies are selected, the selected technologies are displayed instead.

7. How does parent-to-child and child-to-parent communication work in React?

In React, data can be passed from a parent component to a child component using props.

For example, in this project the App component passes technology information and functions to the TechnologyCard component.

<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>

This is parent-to-child communication.

For child-to-parent communication, the parent passes a function to the child through props.

The child then calls that function when an action happens.

For example:

<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>

Here, the TechnologyCard calls the onAdd function, and the App component handles the stack update.

Project Structure
B14-A05-DevStack
│
├── .github
│   └── workflows
│       └── deploy.yml
│
├── public
│   └── data
│       └── technologies.json
│
├── src
│   ├── assets
│   │   └── banner-stack.png
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── YourStack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Data Source

The technology data is stored in:

public/data/technologies.json

The data is not directly written inside the React component.

The application fetches the JSON file and then displays the technologies dynamically.

Each technology contains information such as:

id
name
category
description
icon
rating
difficulty
badge
Deployment

The project is deployed using GitHub Pages.

GitHub Actions is used to build and deploy the project automatically whenever changes are pushed to the main branch.

Git Commits

I used meaningful Git commits while developing the project.

Some of the commits include:

Initialize DevStack project
Add global styling and gradient theme
Build responsive navbar
Add hero section
Configure GitHub Pages deployment
Load technologies from JSON
Add stack notifications with React Toastify
Add responsive footer section
Improve loading state with spinner
Update project README


Author
Raisul Islam Rifat

Daffodil International University
Department of Computer Science and Engineering

