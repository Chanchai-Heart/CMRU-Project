<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const items = [
    {
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUI_SbeRZGlsjhvvUgZCluYFbj_rKyIkjvjE1UtrQ26MwV6lGGGE5bLYIt8N-E5msVdoyTR0HWJ8qBuS2lHd9fHQKASlNMFQl9DOb6Qg",
        title: "ดอยอินทนนท์",
        description: "ดอยอินทนนท์ ยอดเขาที่สูงที่สุดในประเทศไทย เป็นภูเขาสูงตระหง่านสูงเสียดฟ้า...",
        rating: 4
    },
    {
        image: "https://lh5.googleusercontent.com/p/AF1QipMuPIRJKP7MOSFCYHJu3VXWC0CTTEHU0kV3ZJ1v=w608-h351-n-k-no",
        title: "ดอยหลวงเชียงดาว",
        description: "ดอยหลวงเชียงดาว เป็นยอดเขาที่ความสูงกว่า 2225 เมตร....",
        rating: 5
    },
    {
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTJvoUfr4ERPiTVOs_gz_zxjiTdbKHftvA97VgM-043K-jDVb8JFHd3VkBaNoFMDOFuDxBfHq17_MjwYR0aS8kz3yaWzkWUJqEn10gIA",
        title: "อุทยานแห่งชาติห้วยน้ำดัง",
        description: "อุทยานแห่งชาติห้วยน้ำดังเมีวิวทิวทัศน์สวยงาม มีจุดกางเต็นท์...",
        rating: 4
    },
    {
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSXjyPIR776PmObkk-Hu4Da5oEO29wvSzGvab1AJ8v504URWs-4K29bTJJ9BmpYk-WavaxQqvabyZWbHNTk1q97aFc6GfGUWyqSKA6LjQ",
        title: "ดอยผ้าห่มปก",
        description: "ยอดดอยผ้าห่มปก จ.เชียงใหม่ คืออีกหนึ่งจุดมุ่งหมายของนักเดินป่า...",
        rating: 4
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfTKbUyUKQA8r7466GkKTBy1WgvL-GGvXlmjvULZNN1ttp--WIi45bgNF8y3lG4-qI_5wX_syZDDgx8_WEnfdrz9aaFpEQqGgxu6Wr7w",
        title: "ดอยม่อนจอง",
        description: "ดินแดนแห่งหุบเขาที่ครอบคลุมพื้นที่เชียงใหม่และตากเอาไว้ด้วยกัน....",
        rating: 5
    }
];
</script>

<template>
    <div class="bg-gradient-to-r from-[#4E5034] to-[#97A483] py-10">
        <div class="text-center mb-8">
            <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white">Travel</div>
                <div class="text-4xl font-bold text-white">Welcome to the most popular camping spots in Chiang Mai</div>
            </div>
            <div class="text-lg text-white mt-4">Discover the best camping destinations in Chiang Mai</div>
        </div>
        <div class="max-w-screen-xl mx-auto">
            <swiper :slides-per-view="3" :space-between="20" grab-cursor="true" loop="true" class="swiper-container"
                effect="slide" autoplay="true">
                <swiper-slide v-for="(item, index) in items" :key="index" class="swiper-slide">
                    <div
                        class="bg-white text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-100 transition-all duration-300">
                        <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ item.title }}</h3>
                            <p class="text-gray-800 mb-4 ">{{ item.description }}</p>
                            <!-- Dynamic Rating -->
                            <div class="flex items-center mb-4">
                                <div class="rating">
                                    <template v-for="n in 5" :key="n">
                                        <input type="radio" :checked="n === item.rating" :name="'rating-' + index"
                                            class="mask mask-star-2 bg-orange-400" />
                                    </template>
                                </div>
                            </div>
                            <button
                                class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded transition-all duration-200">
                                Read more
                            </button>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="flex justify-center">
            
        </div>
    </div>
</template>

<style scoped>
.swiper-container {
    padding: 20px;
}

.swiper-slide {
    transform: scale(1);
    transition: transform 0.3s ease;
}

.swiper-slide:hover {
    transform: scale(1.05);
}

button:hover {
    background-color: #4299e1;
    transition: background-color 0.3s ease;
}
</style>
