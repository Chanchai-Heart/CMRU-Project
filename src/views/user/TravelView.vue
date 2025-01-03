<script setup>
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const items = [
    {
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUI_SbeRZGlsjhvvUgZCluYFbj_rKyIkjvjE1UtrQ26MwV6lGGGE5bLYIt8N-E5msVdoyTR0HWJ8qBuS2lHd9fHQKASlNMFQl9DOb6Qg",
        title: "ดอยอินทนนท์",
        description: "ดอยอินทนนท์ ยอดเขาที่สูงที่สุดในประเทศไทย เป็นภูเขาสูงตระหง่านสูงเสียดฟ้า ที่มอบประสบการณ์เดินทางสะดวกสบายและมีข้อจำกัดน้อย ถนนเหล่านี้จะได้รับการดูแลอย่างดี ทำให้นักท่องเที่ยวสามารถสำรวจความงามของวิวภูเขาได้ตามใจ ไม่ว่าจะเป็นการเดินทางแบบไปเช้า-เย็นกลับ หรือพักค้างคืน เพื่อดื่มด่ำกับบรรยากาศอันน่าหลงใหล ส่งผลให้ดอยแห่งนี้ กลายเป็นสถานที่ท่องเที่ยวยอดนิยมของคนทุกเพศทุกวัย ดอยอินทนนท์ มีสถานที่ท่องเที่ยวที่สวยงามมากมายทั้งบนภูเขาและบริเวณโดยรอบ ดังนั้นจึงขอแนะนำสถานที่ห้ามพลาด! ซึ่งได้รับความนิยมในหมู่นักเดินทาง เพื่อเป็นแนวทางในการเดินทางของคุณได้ตลอดทั้งฤดูกาล",
        rating: 4
    },
    {
        image: "https://lh5.googleusercontent.com/p/AF1QipMuPIRJKP7MOSFCYHJu3VXWC0CTTEHU0kV3ZJ1v=w608-h351-n-k-no",
        title: "ดอยหลวงเชียงดาว",
        description: "ใครเป็นสายธรรมชาติชอบปีนเขาเดินป่าชอบความท้าทายต้องยกให้ที่นี่เลย ดอยหลวงเชียงดาว หลายๆคนคงเคยได้ยินมาแล้วบ้างการพิชิตดอยหลวงเชียงดาวอาจจะอยู่ในลิสต์ของหลายๆคนด้วยความสูงเป็นอันดับสามของประเทศวิวที่สวยประทับใจบวกกับ ธรรมชาติ ที่ชวนน่าหลงใหลของจังหวัดเชียงใหม่หากไม่พูดถึงคงไม่ได้วันนี้พวกเรา Live the Adventure.com จะพานักผจญภัยทั้งหลายไปผจญภัยกันที่ดอยหลวงเชียงดาวจังหวัดเชียงใหม่กัน บอกเลยว่าโดนใจเหล่านักผจญภัยสายธรรมชาติสุดๆ พร้อมแล้วไปกันเลย",
        rating: 5
    },
    {
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTJvoUfr4ERPiTVOs_gz_zxjiTdbKHftvA97VgM-043K-jDVb8JFHd3VkBaNoFMDOFuDxBfHq17_MjwYR0aS8kz3yaWzkWUJqEn10gIA",
        title: "อุทยานแห่งชาติห้วยน้ำดัง",
        description: "อุทยานแห่งชาติห้วยน้ำดัง ชื่อที่คุ้นหูกันดีและจัดว่าเป็น ที่เที่ยวธรรมชาติสวย ของ เชียงใหม่ เลยก็ว่าได้ค่ะ เพราะเต็มไปด้วย ยอดดอย ทะเลหมอก น้ำพุร้อน ไปจนถึง กิจกรรมการนั่งเรือล่องแพ ชมวิวสวยๆ ในลำน้ำ เรียกได้ว่าอัดแน่น จัดเต็ม ชมความสวยของธรรมชาติกันได้แบบฟินๆ เลยค่ะ",
        rating: 4
    },
    {
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQKTnRIKoDpzJthtFhueLt1v1O7e2oXm_P7tNSzk2ADal2pVhwJlnwL66hgb4lkeRNNzYKorwaWZym2WnJmi9adl59MDwNFPyF45DwSSQ",
        title: "ดอยผ้าห่มปก",
        description: "ยอดดอยผ้าห่มปก จ.เชียงใหม่ คืออีกหนึ่งจุดมุ่งหมายของนักเดินป่า ตั้งอยู่ในเขตของอุทยานแห่งชาติดอยผ้าห่มปก จ.เชียงใหม่ มีความสูงจากระดับน้ำทะเลปานกลาง 2,285 เมตร ซึ่งเป็นยอดดอยที่สูงเป็นอันดับ 2 ของประเทศไทย การเดินทางไปบนยอดต้องเดินเท้าขึ้นไปเท่านั้น จากจุดกางเต็นท์ระยะทาง3.5กิโลเมตร ใช้เวลา 2วัน 1คืน หลายๆคนบอกว่าเดินง่าย แต่สำหรับเรา ช่วงครึ่งชั่วโมงแรกก็ชันเอาเรื่องเลยล่ะ แต่วิวข้างบนยอดสูงสุดอลังการใช้ได้ ถือว่าคุ้มค่าเหนื่อย",
        rating: 4
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSfTKbUyUKQA8r7466GkKTBy1WgvL-GGvXlmjvULZNN1ttp--WIi45bgNF8y3lG4-qI_5wX_syZDDgx8_WEnfdrz9aaFpEQqGgxu6Wr7w",
        title: "ดอยม่อนจอง",
        description: "ดอยม่อยจอง หนึ่งในที่เที่ยวที่ขึ้นชื่อลืมชาว่ามีจุดชมวิวพระอาทิตย์ที่สวยที่สุดแห่งหนึ่งในประเทศไทย แถมทางขึ้นก็ไม่ยาก เดินไม่ไกล แต่เปิดให้เข้าเฉพาะช่วงหน้าหนาวเท่านั้น แต่ถ้าได้ขึ้นไปแล้วก็คุ้มค่าสมการรอคอยจริงๆ",
        rating: 5
    }
];
</script>

<template>
    <div class="bg-gradient-to-r from-[#4E5034] via-[#97A483] to-[#4E5034] py-10">
        <div class="text-center">
            <div class="flex flex-col items-center">
                <div class="text-xl font-bold text-white">Travel</div>
                <div class="flex justify-center">
                    <div class="inverted-pyramid text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Discover the stunning mountain views of Chiang Mai!
                    </div>
                </div>
            </div>
            <div class="text-base md:text-lg text-white mt-4 inverted-pyramid px-6 sm:px-12 md:px-16">
                เชียงใหม่คือจุดหมายปลายทางที่สมบูรณ์แบบสำหรับผู้ที่หลงใหลในธรรมชาติและวิวทิวทัศน์อันงดงาม
                บนดอยสูงที่รายล้อมด้วยป่าเขียวขจี นักท่องเที่ยวจะได้สัมผัสอากาศบริสุทธิ์
                ชมพระอาทิตย์ขึ้นท่ามกลางทะเลหมอก และเพลิดเพลินกับบรรยากาศที่เงียบสงบและเย็นสบาย
                ไม่ว่าจะเป็นจุดชมวิวอันโดดเด่นหรือเส้นทางเดินป่าผจญภัย
                ที่นี่คือสถานที่ที่ผสานความงามของธรรมชาติเข้ากับเสน่ห์วัฒนธรรมล้านนาได้อย่างลงตัว
            </div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
            <swiper :slides-per-view="1" :space-between="20" grab-cursor="true" loop="true" class="swiper-container"
                effect="slide" autoplay="true" :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }">
                <swiper-slide v-for="(item, index) in items" :key="index" class="swiper-slide">
                    <div
                        class="bg-white text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-100 transition-transform duration-300">
                        <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 text-gray-800">
                                {{ item.title }}
                            </h3>
                            <p class="text-gray-800 mb-4">
                                {{ item.description.length > 120
                                    ? item.description.slice(0, 120) + "..."
                                    : item.description }}
                            </p>
                            <div class="flex items-center mb-4">
                                <div class="rating flex">
                                    <template v-for="n in 5" :key="n">
                                        <svg :class="{
                                            'text-orange-400': n <= item.rating,
                                            'text-gray-300': n > item.rating,
                                        }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            width="20" height="20">
                                            <path
                                                d="M12 .587l3.668 7.435L24 9.168l-6 5.847 1.417 8.268L12 18.897l-7.417 4.386L6 15.015 0 9.168l8.332-1.146L12 .587z" />
                                        </svg>
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
        <div class="flex justify-center my-4">
            <RouterLink :to="{ name: 'travel-detail' }" class="flex items-center justify-between text-white group">
                <p class="text-lg mr-4 transition-transform duration-300 group-hover:translate-x-2">
                    See more
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </RouterLink>
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
</style>