import { Link } from "react-router-dom";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
        <Link to={`/details/${id}`} className="btn details-btn">
          details
        </Link>
        <button onClick={() => deleteTodo(id)} className="btn delete-btn">
          delete
        </button>
      </label>
    </li>
  );
}
