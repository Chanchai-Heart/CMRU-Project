<script setup>

</script>


<template>
    <main>
        <div class="bg-gradient-to-r from-[#4E5034] via-[#97A483] to-[#4E5034] py-10">
            <div class="text-center mb-8">
                <div class="flex flex-col items-center">
                    <div class="text-xl font-bold text-white">About</div>
                    <div class="inverted-pyramid text-2xl sm:text-3xl md:text-4xl font-bold text-white">Camping and
                        Accommodation in Chiang Mai
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="text-base sm:text-lg text-white mt-4 px-6 sm:px-8 md:px-12">
                        การกางเต็นท์ในเชียงใหม่เป็นกิจกรรมที่เหมาะสำหรับผู้ที่รักธรรมชาติและต้องการสัมผัสประสบการณ์การพักผ่อนท่ามกลางป่าเขียวขจีและอากาศเย็นสบาย
                        โดยคุณสามารถเลือกกางเต็นท์ในจุดกางเต็นท์ที่มีสิ่งอำนวยความสะดวกครบครัน
                        หรือเลือกพื้นที่ที่ให้ความเป็นส่วนตัวมากขึ้นในธรรมชาติที่ยังคงความดิบ
                        การกางเต็นท์ในเชียงใหม่จะทำให้คุณได้สัมผัสกับบรรยากาศที่เงียบสงบและใกล้ชิดธรรมชาติ
                        ท่ามกลางภูเขาและป่าที่สวยงาม เป็นการพักผ่อนที่เติมเต็มทั้งร่างกายและจิตใจ
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center p-10 text-white">
                <!-- Camper Sites -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M274.4 4.2c8.2-5.7 19-5.7 27.3 0L521.5 155.9c13.5 9.3 22.2 24 23.9 40.2l26.7 254c3.5 33.1-22.4 61.9-55.7 61.9L440 512l-176 0L59.5 512C26.3 512 .4 483.2 3.9 450.1l26.7-254c1.7-16.3 10.4-31 23.9-40.2L274.4 4.2zM516.5 464c4.7 0 8.5-4.1 8-8.8l-26.7-254c-.2-2.3-1.5-4.4-3.4-5.7L312 69.7l0 209.6L413.6 464l102.9 0zM264 69.7L81.7 195.4c-1.9 1.3-3.2 3.4-3.4 5.7l-26.7 254c-.5 4.7 3.2 8.8 8 8.8L264 464l0-136 0-136 0-122.3z" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">CAMPER SITES</p>
                </div>

                <!-- Caravan Sites -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M0 112C0 67.8 35.8 32 80 32l336 0c88.4 0 160 71.6 160 160l0 160 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-288 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-44.2 0-80-35.8-80-80L0 112zM320 352l128 0 0-96-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 192zM96 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">CARAVAN SITES</p>
                </div>

                <!-- Tent Sites -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5L608 352c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512l144 0 16 0c17.7 0 32-14.3 32-32l0-118.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7l60.2 0 16 0c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">TENT SITES</p>
                </div>

                <!-- Camp Sites -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L288 60.8 249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4C4.3 415.4 0 427.7 0 440.4L0 464c0 26.5 21.5 48 48 48l240 0 240 0c26.5 0 48-21.5 48-48l0-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zM288 448l-119.5 0L288 291.7 407.5 448 288 448z" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">CAMP SITES</p>
                </div>

                <!-- Cabin Houses -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24L224 448l0 24c0 22.1-17.9 40-40 40L160 512l-13.3 0c-1.4 0-2.8 0-4.2-.1c-1.1 .1-2.2 .1-3.3 .1l-16 0c-22.1 0-40-17.9-40-40l0-16.2c-.3-2.7-.5-5.4-.5-8.1l.7-160.2-32 0c-17 0-32-14-32-32.1c0-10.1 4.9-19.5 13.1-25.5L266.4 4.6c11.2-7.5 25.9-7.5 37.1 0L562.7 230c8.2 6 13.1 15.4 13.1 25.5z" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">CABIN HOUSES</p>
                </div>

                <!-- Restaurant -->
                <div class="flex flex-col items-center">
                    <div class="fill-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="h-24 w-24 lucide lucide-utensils-crossed">
                            <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                            <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                            <path d="m2.1 21.8 6.4-6.3" />
                            <path d="m19 5-7 7" />
                        </svg>
                    </div>
                    <p class="text-lg font-bold">RESTAURANT</p>
                </div>
            </div>
        </div>
    </main>
</template>
