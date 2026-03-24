import { useFetch } from "../hooks/useFetch";
import { fetchUsers } from "../services/api";
import type {User} from "../types";
import Loader from "./Loader";
import Error from "./Error";

const Dashboard = () => {
  const { data, loading, error, refetch } = useFetch<User[]>(fetchUsers);

  if (loading) return <Loader />;

  if (error) return <Error message={error} onRetry={refetch} />;

  return (
    <div>
      <h2>User Dashboard</h2>

      {/* Edge case: no data */}
      {!data || data.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;