<template>
    <div class="about py-10 px-4">
        <v-container>
            <v-row>
                <!-- Left Section: Image -->
                <v-col cols="12" md="6">
                    <v-card class="shadow-none !rounded-[16px] h-[250px] md:h-[430px]">
                        <v-img src="/details/sample.png" alt="Furniture" class="" cover />
                    </v-card>
                </v-col>

                <!-- Right Section: Text -->
                <v-col cols="12" md="6">
                    <v-card class="!p-10 shadow-none h-full bg-transparent">
                        <h1 class="text-[40px] md:text-[55px] font-bold  text-primary-800 mb-4">About Our Website</h1>
                        <p class="!text-primary-600 leading-relaxed text-[14px] sm:text-[18px] indent-8 pt-5 text-justify">
                            Le Décor គឺជា E-Commerce Website ដែលពួកយើងបង្កើតឡើងក្នុងគោលបំណងក្នុងការផ្តល់នូវ
                            គ្រឿងសង្ហារឹមដែលស្រស់ស្អាត និង ប្រកបដោយមុខងារយ៉ាងច្រើនសម្បូរបែប ស្រមតាមតម្រូវការរបស់អតិថិជន។
                            ពួកយើងធ្វើការផ្តល់ជូននូវសម្ភារៈដែលមានគុណភាពខ្ពស់ ជាមួយនឹងវត្ថុធាតុដើមល្អៗ
                            ដោយធានាបាននូវតម្លៃដែលសមរម្យ និងទំនុកចិត្តខ្ពស់។
                        </p>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Core Values Section -->
            <v-row justify="center" class="text-center my-14">
                <v-col cols="12" md="7" lg="5">
                    <h1 class="text-[40px] md:text-[55px] font-bold text-primary-800">Our Core Values</h1>
                    <p class="text-primary-600 text-sm mt-4">
                        Our values shape the culture of our organization and define the chapter of our company.
                    </p>
                </v-col>
            </v-row>

            <!-- Core Values Cards -->
            <v-row class="!g-6 flex-wrap justify-center align-content-between md:gap-y-6 sm:gap-y-6 gap-y-6">
                <v-col cols="12" sm="6" md="6" lg="4" class="lg:mb-0" v-for="(value, index) in coreValues" :key="index">
                    <v-card class="!p-6 text-center !rounded-[14px] !bg-primary-50 shadow-none relative overflow-visible h-100">
                        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2">
                            <v-avatar
                                class="!bg-primary-100 flex items-center justify-center !border-[15px] !border-white p-4"
                                size="100">
                                <v-icon color="primary-900" size="36">{{ value.icon }}</v-icon>
                            </v-avatar>
                        </div>
                        <h2 class="text-[14px] sm:text-[16px] md:text-[18px] text-primary-700 font-semibold mb-4 mt-15">
                            {{ value.title }}</h2>
                        <p class="text-[12px] sm:text-[14px] font-normal text-primary-600">{{ value.description }}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    const coreValues = [
        {
            title: "ការដឹកជញ្ជូនលឿន រហ័សទាន់ចិត្ត",
            description:
                "យើងផ្តល់ជូននូវសេវាកម្មដឹកជញ្ជូនលឿនរហ័ស ទាន់ចិត្តរាល់ការកម្ម៉ង់ ដោយធានាថាគ្រឿងសង្ហារឹមរបស់អ្នកទៅដល់អ្នកយ៉ាងរហ័ស និងងាយស្រួលតាមដែលអាចធ្វើទៅបាន។",
            icon: "mdi-truck-delivery",
        },
        {
            title: "ការធានាគុណភាព",
            description:
                "ប្រសិនបើលោកអ្នកមិនពេញចិត្តនឹងទិញទំនិញទាំងស្រុងទេ ខាងយើងនឹងផ្តល់ជូននូវការធានាសងប្រាក់វិញ។",
            icon: "mdi-shield-check",
        },
        {
            title: "Online Support",
            description:
                "សេវាឆ្លើយតបអតិថិជនរហ័ស ជួយលោកអ្នកជាមួយនឹងការសាកសួរណាមួយ ធានាបាននូវបទពិសោធន៍ទិញទំនិញ។",
            icon: "mdi-headset",
        },
    ];
</script>
