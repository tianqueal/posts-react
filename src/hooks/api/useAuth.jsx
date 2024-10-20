import { environments } from '../../environments';
import { ajax } from '../../helpers/ajax';

export default function useAuth() {
  const login = async ({ email, password }) => {
    const resp = await ajax({
      url: `${environments.API_URL}/auth/login`,
      method: 'POST',
      body: { email, password },
    });

    const json = await resp.json();

    if (!resp.ok) throw { status: resp.status, statusText: json.error };

    return json;
  };

  const register = async ({ name, email, password }) => {
    const resp = await ajax({
      url: `${environments.API_URL}/auth/register`,
      method: 'POST',
      body: { name, email, password },
    });

    const json = await resp.json();

    if (!resp.ok) throw { status: resp.status, statusText: json.error };

    return json;
  };

  return {
    login,
    register,
  };
}
