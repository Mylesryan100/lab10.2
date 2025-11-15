import useLocalStorage from "./hooks/useLocalStorage";
import useFetchData from "./hooks/useFetchData";
import useForm from "./hooks/useForm";
import "./App.css";
import DebounceSearchDemo from "./components/DebounceDemo";

function App() {
  const [storedValue, setStoredValue] = useLocalStorage("username", "Abe");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const initValues = { email: "", password: "" };
  const { values, handleChange, handleSubmit, resetForm } = useForm(initValues);

  return (
    <>
      <h1>Custom Hooks</h1>
      <DebounceSearchDemo </
      <form onSubmit={handleSubmit}>
        <input value={values.email} onChange={handleChange} name="email" />
        <input
          value={values.password}
          onChange={handleChange}
          name="password"
        />
      </form>
      <button onClick={() => setStoredValue("Abe")}>
        Update Username: {storedValue}
      </button>

      <button onClick={() => setTheme("light")}>Theme: {theme}</button>

      {loading && <div>Loading...</div>}

      {error && <div>{error.message}</div>}

      {data && data.map((todo) => <div key={todo.id}>{todo.title}</div>)}
    </>
  );
}

export default App;
