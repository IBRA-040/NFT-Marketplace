import { ref } from "vue";
import axios from "axios";

const token = ref("");

export function useAuth() {
  const login = async () => {
    const res = await axios.post("http://atwltd-001-site1.qtempurl.com/api/login", {
      email: "demo@demo.com",
      password: "123456789",
    });
    token.value = res.data.data.token;
  };

  return { token, login };
}
