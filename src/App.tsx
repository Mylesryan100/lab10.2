// import useLocalStorage from "./hooks/useLocalStorage";
// import useFetchData from "./hooks/FetchUserData";
// import useForm from "./hooks/useForm";
import "./App.css";
import DebounceSearchDemo from "./components/DebounceDemo";;
import PaginationDemo from "./components/PaginationDemo";

function App () {

  return (
    <>
      <h1>Custom Hooks</h1>
      <hr />

      <PaginationDemo />
      <DebounceSearchDemo /> 


    </>
  );
}

export default App;














































// function App() {
//   const [storedValue, setStoredValue] = useLocalStorage("username", "Abe");
//   const [theme, setTheme] = useLocalStorage("theme", "light");
//   const { data, loading, error } = useFetchData(
//     "https://jsonplaceholder.typicode.com/todos"
//   );

//   const initValues = { email: "", password: "" };
//   const { values, handleChange, handleSubmit, resetForm } = useForm(initValues);

//   return (
//     <>
//       <h1>Custom Hooks</h1>
//       <DebounceSearchDemo />
//       <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={values.email}
//           onChange={handleChange}
//           style={{ display: "block", marginBottom: 8 }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={values.password}
//           onChange={handleChange}
//           style={{ display: "block", marginBottom: 8 }}
//         />
//         <button type="submit">Submit</button>
//         <button type="button" onClick={resetForm} style={{ marginLeft: 8 }}>
//           Reset
//         </button>
//       </form>

//       <div style={{ marginTop: 16 }}>
//         <button onClick={() => setStoredValue("Abe")}>
//           Update Username: {storedValue}
//         </button>
//       </div>

//       <div style={{ marginTop: 8 }}>
//         <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//           Theme: {theme}
//         </button>
//       </div>

//       {loading && <div style={{ marginTop: 16 }}>Loading...</div>}
//       {error && (
//         <div style={{ marginTop: 16, color: "crimson" }}>
//           {error.message}
//         </div>
//       )}

//       {data && (
//         <div style={{ marginTop: 16 }}>
//           {data.map((todo) => (
//             <div key={todo.id}>{todo.title}</div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default App;