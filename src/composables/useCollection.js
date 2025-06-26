import { ref } from "vue";
import axios from "axios";
import { useAuth } from "./useAuth";

export function useCollections() {
  const collections = ref([]);
  const { token } = useAuth();

  const fetchCollections = async () => {
    try {
      const res = await axios.get("http://atwltd-001-site1.qtempurl.com/api/tasks", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      collections.value = res.data.data;
    } catch (error) {
      console.error("Error fetching collections:", error);
    }
  };

  return { collections, fetchCollections };
}
