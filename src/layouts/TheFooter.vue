<template>
    <footer class="bg-gray-50">
        <v-container>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-44 sm:gap-x-20">
                <v-col class="flex flex-col gap-y-3">
                    <router-link :to="{ name: 'home' }">
                        <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.465843 10.3828H0V18.7188H9.16149C10.0155 18.7188 10.3261 20.0078 9.54969 20.4375L7.76398 21.3828C5.35715 22.6719 2.95032 23.3594 0.465843 23.3594H0V31.6953H8.92858C9.78261 31.6953 10.0932 32.9844 9.31678 33.4141L7.45342 34.3594C5.20187 35.5625 2.79504 36.1641 0.465843 36.1641H0V44.5H8.92858L9.93788 43.125C14.2857 37.5391 19.3323 34.6172 24.6118 34.6172H25V26.2812H16.0714C15.2174 26.2812 14.9068 24.9922 15.6832 24.5625L17.5466 23.6172C19.7982 22.4141 22.205 21.8125 24.5342 21.8125H24.9224V13.4766H15.8385C14.9845 13.4766 14.6739 12.1875 15.4503 11.7578L17.236 10.8125C19.6429 9.52343 22.0497 8.83595 24.5342 8.83595H24.9224V0.5H15.9938L14.9845 1.875C10.7919 7.46094 5.66771 10.3828 0.465843 10.3828Z" fill="#505050" />
                        </svg>
                    </router-link>
                    <p class="text-[13px] font-normal text-justify text-primary-900">
                        <span class="font-semibold">Le Décor Furniture Store</span>
                        ផ្តល់នូវគ្រឿងសង្ហារឹមដែលស្រស់ស្អាត និងមានមុខងារយ៉ាងសម្បូរបែបស្របទៅតាមតម្រូវការរបស់អតិថិជន។
                        ពួកយើងធ្វើការផ្តល់ជូននូវសម្ភារៈ ដែលមានគុណភាពខ្ពស់ ផលិតចេញពីវត្ថុធាតុដើមល្អៗ ដោយធានាបាននូវទំនុកចិត្តខ្ពស់ក្នុងការប្រើប្រាស់ ព្រមទាំងមានតម្លៃសមរម្យ។
                    </p>
                </v-col>
                <v-col class="flex flex-col gap-y-6 justify-center">
                    <h6 class="font-bold text-primary-800 text-[18px]">គ្រឿងសង្ហារឹមរបស់យើង</h6>
                    <ul class="list-none text-[15px] font-medium text-primary-800 grid grid-cols-2 gap-y-3 gap-x-4">
                        <li>
                            <router-link :to="{ name: 'bedroom' }">បន្ទប់គេង</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'livingroom' }">បន្ទប់ទទួលភ្ញៀវ</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'kitchen' }">ផ្ទះបាយ</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'lighting' }">អំពូលភ្លើង</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'office' }">បន្ទប់ការិយាល័យ</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'outdoor' }">ផ្នែកខាងក្រៅ</router-link>
                        </li>
                    </ul>
                </v-col>
                <v-col class="flex flex-col gap-y-6">
                    <h6 class="font-bold text-primary-800 mt-[30px] text-[18px]">ទាក់ទងមកពួកយើង</h6>
                    <ul class="flex flex-col gap-y-4">
                        <the-social-contact text="Facebook" href="https://facebook.com" class="text-primary-700">
                            <svg width="20" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.14996 3.29509H9.96164V0.139742C9.64908 0.0967442 8.57414 0 7.32226 0C4.71016 0 2.92081 1.643 2.92081 4.66274V7.44186H0.0383301V10.9693H2.92081V19.845H6.45487V10.9701H9.22076L9.65983 7.44269H6.45404V5.01251C6.45487 3.99297 6.72939 3.29509 8.14996 3.29509Z" fill="#505050" />
                            </svg>
                        </the-social-contact>
                        <the-social-contact text="Instagram" href="https://instagram.com">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z" fill="#505050" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z" fill="#505050" />
                                <circle cx="15.375" cy="4.62499" r="0.66625" fill="#505050" />
                            </svg>
                        </the-social-contact>
                        <the-social-contact text="Telegram" href="https://telegram.org">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0609 4.67742C11.0639 4.67742 11.0679 4.67742 11.0719 4.67742C11.1764 4.67742 11.2734 4.70992 11.3529 4.76592L11.3514 4.76492C11.4094 4.81542 11.4484 4.88642 11.4579 4.96642V4.96792C11.4679 5.02892 11.4734 5.09892 11.4734 5.17042C11.4734 5.20292 11.4724 5.23492 11.4699 5.26692V5.26242C11.3574 6.44692 10.8694 9.31942 10.6214 10.6454C10.5164 11.2069 10.3099 11.3949 10.1099 11.4129C9.67539 11.4534 9.34539 11.1259 8.92439 10.8499C8.26539 10.4174 7.89289 10.1484 7.25339 9.72692C6.51389 9.24042 6.99339 8.97192 7.41439 8.53492C7.52489 8.41992 9.44039 6.67742 9.47789 6.51942C9.47989 6.50992 9.48089 6.49942 9.48089 6.48842C9.48089 6.44942 9.46639 6.41392 9.44289 6.38692C9.41689 6.36992 9.38439 6.36042 9.35039 6.36042C9.32789 6.36042 9.30639 6.36492 9.28639 6.37242L9.28739 6.37192C9.22139 6.38692 8.16873 7.08259 6.12939 8.45892C5.90689 8.63442 5.62589 8.74542 5.31989 8.75842H5.31689C4.88339 8.70592 4.48989 8.60942 4.11639 8.47192L4.15339 8.48392C3.68439 8.33092 3.31189 8.25042 3.34389 7.99142C3.36089 7.85676 3.54656 7.71892 3.90089 7.57792C6.08356 6.62692 7.53906 6.00009 8.26739 5.69742C9.07089 5.27092 10.0024 4.91992 10.9819 4.69242L11.0604 4.67692L11.0609 4.67742ZM7.96489 0.169922C3.81389 0.179922 0.452393 3.54742 0.452393 7.69992C0.452393 11.8584 3.82339 15.2299 7.98239 15.2299C12.1414 15.2299 15.5124 11.8589 15.5124 7.69992C15.5124 3.54742 12.1509 0.179922 8.00089 0.169922H7.99989C7.98823 0.169922 7.97656 0.169922 7.96489 0.169922Z" fill="#505050" />
                            </svg>
                        </the-social-contact>
                    </ul>
                </v-col>
            </div>
        </v-container>
        <v-container>
            <div class="grid grid-cols-1">
                <p class="text-xs font-light mb-5">Copyright © 2024
                    Le Décor. All rights reserved.</p>
                <div class="flex justify-between">
                    <p class="text-xs font-light">Terms & Conditions</p>
                    <p class="text-xs font-light">Privacy Policy</p>
                </div>
            </div>
        </v-container>
    </footer>
</template>

<script setup>

    import TheSocialContact from '@/components/TheSocialContact.vue';
</script>

<style scoped></style>