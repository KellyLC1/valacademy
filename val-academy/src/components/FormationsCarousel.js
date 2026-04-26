import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const formations = ref([]);

async function fetchFormations() {
  try {
    const res = await axios.get('http://localhost:5000/api/formation');
    formations.value = res.data;
  } catch (err) {
    formations.value = [];
  }
}
onMounted(fetchFormations);

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return { formations, Navigation };
  }
};
