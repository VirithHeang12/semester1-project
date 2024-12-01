<template>
    <v-container fluid>
        <v-row class="p-3">
            <!-- Image side -->
            <v-col :cols="12" :sm="6" :md="5" :lg="4">
                <div class="relative h-auto w-auto lg:h-[550px] lg:w-[550px] lg:ml-auto">
                    <img :src="productDetails.url" alt="product"
                        class="rounded-[20px] object-cover aspect-square w-auto h-auto" />
                    <span
                        class="absolute left-3 top-3 rounded-xl bg-primary-600 px-4 py-[2px] text-sm font-light text-primary-50">
                        New
                    </span>
                    <the-wish-list-heart></the-wish-list-heart>
                </div>
            </v-col>

            <!-- Details side -->
            <v-col :cols="12" :sm="6" :md="7" :lg="8" class="text-primary-900 h-full">
                <v-breadcrumbs :items="items" class="text-primary-900 p-0 m-0">
                    <template v-slot:divider>
                        <v-icon icon="mdi-chevron-right" size="14px"></v-icon>
                    </template>
                </v-breadcrumbs>
                <h1 class="text-[45px] py-2 font-semibold uppercase sm:text-[30px]">{{ productDetails.title }}</h1>
                <h2 class="h2 font-semibold py-2">{{ productDetails.price }}</h2>

                <div class="flex flex-col gap-2">
                    <p class="text-[16px]">Color</p>
                    <div class="flex gap-3 ps-1">
                        <div v-for="(color, index) in colors" :key="index" tabindex="0" :class="[
                            'w-[25px] h-[25px] rounded-full outline-none cursor-pointer',
                            'hover:ring-2 hover:ring-[#d5d5d5c7]'
                        ]" :style="{ backgroundColor: color, outline: activeColor === color ? `2px solid ${color}` : '' }"
                            @click="setActive(color)">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2 my-5">
                    <p class="text-[16px]">Quantity</p>
                    <form class="max-w-xs">
                        <div class="relative flex items-center max-w-[7rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                                class="bg-gray-100 flex align-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg px-3 h-[33.5px] focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1"
                                aria-describedby="helper-text-explanation"
                                class="bg-gray-50 outline-none border-top border-bottom border-gray-300 h-[33.5px] text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                class="bg-gray-100 flex align-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg px-3 h-[33.5px] focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Buttons -->
                <div class="flex gap-4 flex-col sm:flex-row">
                    <button class="btn btn-dark bg-primary-800 rounded-[10px] text-primary-50 px-9 py-2"
                        @click="toggleModal"><a role="button" href="#payModal" data-bs-toggle="modal"
                            @click.prevent="openPaymentModal">បញ្ជាទិញ</a></button>
                    <button id="btn-add-to-cart"
                        class="btn flex gap-2 border-primary-800 hover:bg-primary-800 hover:text-primary-50 outline-primary-700 rounded-[10px] text-primary-700 px-6 py-2">
                        <svg width="19" height="19" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.01324 7.55024L1.90729 18.0821C1.9837 19.2651 2.95364 20.1924 4.13888 20.2154H14.253C15.4378 20.1918 16.4071 19.2646 16.4834 18.0821L17.3775 7.55024C17.4464 6.91068 17.2445 6.27148 16.8208 5.7875C16.3971 5.30352 15.7901 5.01894 15.147 5.00269H3.24367C2.60061 5.01894 1.99371 5.30352 1.56997 5.7875C1.14624 6.27148 0.944366 6.91068 1.01324 7.55024Z"
                                stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <mask id="path-2-inside-1_149_464" fill="white">
                                <path stroke-width="0"
                                    d="M14.1094 3.60662C13.8907 4.03918 14.064 4.56715 14.4965 4.7859C14.9292 5.00463 15.4572 4.83132 15.6759 4.39876L14.1094 3.60662ZM13.6124 1.66227L13.7014 0.789124C13.6719 0.786117 13.6422 0.784607 13.6124 0.784607V1.66227ZM4.77735 1.66227V0.784607C4.74764 0.784607 4.71795 0.786117 4.68841 0.789124L4.77735 1.66227ZM2.71393 4.39876C2.93268 4.83132 3.46066 5.00463 3.89321 4.7859C4.32577 4.56715 4.49909 4.03918 4.28035 3.60662L2.71393 4.39876ZM7.14702 10.6835C7.14702 10.1988 6.75406 9.80587 6.26936 9.80587C5.78466 9.80587 5.39171 10.1988 5.39171 10.6835H7.14702ZM12.9981 10.6835C12.9981 10.1988 12.6051 9.80587 12.1204 9.80587C11.6357 9.80587 11.2428 10.1988 11.2428 10.6835H12.9981ZM15.6759 4.39876C16.0468 3.66509 16.0328 2.79577 15.6383 2.07448L14.0983 2.91685C14.2153 3.1309 14.2195 3.38889 14.1094 3.60662L15.6759 4.39876ZM15.6383 2.07448C15.2437 1.35319 14.5193 0.872455 13.7014 0.789124L13.5235 2.53541C13.7662 2.56013 13.9812 2.70281 14.0983 2.91685L15.6383 2.07448ZM13.6124 0.784607H4.77735V2.53992H13.6124V0.784607ZM4.68841 0.789124C3.87049 0.872455 3.14607 1.35319 2.75152 2.07448L4.29151 2.91685C4.40859 2.70281 4.62358 2.56013 4.8663 2.53541L4.68841 0.789124ZM2.75152 2.07448C2.35697 2.79577 2.34292 3.66509 2.71393 4.39876L4.28035 3.60662C4.17025 3.38889 4.17441 3.1309 4.29151 2.91685L2.75152 2.07448ZM5.39171 10.6835V11.2686H7.14702V10.6835H5.39171ZM5.39171 11.2686C5.39171 13.3691 7.09448 15.0718 9.19489 15.0718V13.3165C8.06388 13.3165 7.14702 12.3996 7.14702 11.2686H5.39171ZM9.19489 15.0718C11.2953 15.0718 12.9981 13.3691 12.9981 11.2686H11.2428C11.2428 12.3996 10.3259 13.3165 9.19489 13.3165V15.0718ZM12.9981 11.2686V10.6835H11.2428V11.2686H12.9981Z" />
                            </mask>
                            <path
                                d="M14.1094 3.60662C13.8907 4.03918 14.064 4.56715 14.4965 4.7859C14.9292 5.00463 15.4572 4.83132 15.6759 4.39876L14.1094 3.60662ZM13.6124 1.66227L13.7014 0.789124C13.6719 0.786117 13.6422 0.784607 13.6124 0.784607V1.66227ZM4.77735 1.66227V0.784607C4.74764 0.784607 4.71795 0.786117 4.68841 0.789124L4.77735 1.66227ZM2.71393 4.39876C2.93268 4.83132 3.46066 5.00463 3.89321 4.7859C4.32577 4.56715 4.49909 4.03918 4.28035 3.60662L2.71393 4.39876ZM7.14702 10.6835C7.14702 10.1988 6.75406 9.80587 6.26936 9.80587C5.78466 9.80587 5.39171 10.1988 5.39171 10.6835H7.14702ZM12.9981 10.6835C12.9981 10.1988 12.6051 9.80587 12.1204 9.80587C11.6357 9.80587 11.2428 10.1988 11.2428 10.6835H12.9981ZM15.6759 4.39876C16.0468 3.66509 16.0328 2.79577 15.6383 2.07448L14.0983 2.91685C14.2153 3.1309 14.2195 3.38889 14.1094 3.60662L15.6759 4.39876ZM15.6383 2.07448C15.2437 1.35319 14.5193 0.872455 13.7014 0.789124L13.5235 2.53541C13.7662 2.56013 13.9812 2.70281 14.0983 2.91685L15.6383 2.07448ZM13.6124 0.784607H4.77735V2.53992H13.6124V0.784607ZM4.68841 0.789124C3.87049 0.872455 3.14607 1.35319 2.75152 2.07448L4.29151 2.91685C4.40859 2.70281 4.62358 2.56013 4.8663 2.53541L4.68841 0.789124ZM2.75152 2.07448C2.35697 2.79577 2.34292 3.66509 2.71393 4.39876L4.28035 3.60662C4.17025 3.38889 4.17441 3.1309 4.29151 2.91685L2.75152 2.07448ZM5.39171 10.6835V11.2686H7.14702V10.6835H5.39171ZM5.39171 11.2686C5.39171 13.3691 7.09448 15.0718 9.19489 15.0718V13.3165C8.06388 13.3165 7.14702 12.3996 7.14702 11.2686H5.39171ZM9.19489 15.0718C11.2953 15.0718 12.9981 13.3691 12.9981 11.2686H11.2428C11.2428 12.3996 10.3259 13.3165 9.19489 13.3165V15.0718ZM12.9981 11.2686V10.6835H11.2428V11.2686H12.9981Z"
                                fill="#3D3D3D" />
                            <path
                                d="M15.9015 3.95256L14.3351 3.16043L13.8838 4.05281L15.4502 4.84495L15.9015 3.95256ZM15.1083 2.93433L15.8783 2.51315L15.3984 1.63582L14.6284 2.057L15.1083 2.93433ZM3.76145 2.057L2.99147 1.63582L2.51157 2.51315L3.28156 2.93433L3.76145 2.057ZM4.05471 3.16043L2.48829 3.95257L2.93957 4.84495L4.50599 4.05281L4.05471 3.16043ZM5.39171 11.1835H7.14702V10.1835H5.39171V11.1835ZM6.26936 10.7686H5.39171V11.7686H6.26936V10.7686ZM11.2428 11.1835H12.9981V10.1835H11.2428V11.1835ZM15.3984 1.63582L13.8584 2.47819L14.3383 3.35551L15.8783 2.51315L15.3984 1.63582ZM2.51157 2.51315L4.05156 3.35551L4.53145 2.47819L2.99147 1.63582L2.51157 2.51315ZM5.39171 11.7686H7.14702V10.7686H5.39171V11.7686ZM9.69489 15.0718V13.3165H8.69489V15.0718H9.69489ZM12.9981 10.7686H11.2428V11.7686H12.9981V10.7686ZM14.1094 3.60662L13.2171 3.1553L13.217 3.15539L14.1094 3.60662ZM14.4965 4.7859L14.0452 5.67826L14.0453 5.67832L14.4965 4.7859ZM15.6759 4.39876L16.5683 4.84998L16.5683 4.84998L15.6759 4.39876ZM15.6383 2.07448L16.5157 1.59465L16.5156 1.59454L15.6383 2.07448ZM13.6124 1.66227H12.6124L14.6073 1.7636L13.6124 1.66227ZM4.77735 1.66227L3.7825 1.76361L5.77735 1.66227H4.77735ZM4.68841 0.789124L4.58715 -0.205736L4.58705 -0.205726L4.68841 0.789124ZM2.75152 2.07448L3.62884 2.55439L3.62884 2.55438L2.75152 2.07448ZM2.71393 4.39876L1.82155 4.85004L1.82155 4.85004L2.71393 4.39876ZM3.89321 4.7859L4.34448 5.67829L4.3445 5.67828L3.89321 4.7859ZM4.28035 3.60662L5.17274 3.15535L5.17274 3.15534L4.28035 3.60662ZM14.0983 2.91685L14.9757 2.43716L14.9755 2.43677L14.0983 2.91685ZM13.5235 2.53541L12.5286 2.43407L12.4273 3.4289L13.4221 3.53026L13.5235 2.53541ZM4.77735 2.53992H3.77735V3.53992H4.77735V2.53992ZM13.6124 2.53992V3.53992H14.6124V2.53992H13.6124ZM4.29151 2.91685L5.16883 3.39676L5.16883 3.39674L4.29151 2.91685ZM4.8663 2.53541L4.96765 3.53026L5.9625 3.42891L5.86115 2.43406L4.8663 2.53541ZM13.217 3.15539C12.7491 4.08072 13.1198 5.21025 14.0452 5.67826L14.9479 3.89354C15.0082 3.92406 15.0323 3.99763 15.0018 4.05784L13.217 3.15539ZM14.0453 5.67832C14.9707 6.14617 16.1003 5.77554 16.5683 4.84998L14.7835 3.94753C14.814 3.88709 14.8876 3.8631 14.9477 3.89348L14.0453 5.67832ZM14.6073 1.7636L14.6962 0.890457L12.7065 0.687791L12.6176 1.56093L14.6073 1.7636ZM13.8028 -0.205716C13.7395 -0.212171 13.676 -0.215393 13.6124 -0.215393V1.78461C13.6084 1.78461 13.6042 1.7844 13.5999 1.78396L13.8028 -0.205716ZM12.6124 0.784607V1.66227H14.6124V0.784607H12.6124ZM5.77735 1.66227V0.784607H3.77735V1.66227H5.77735ZM4.77735 -0.215393C4.71377 -0.215393 4.65029 -0.212162 4.58715 -0.205736L4.78966 1.78398C4.78562 1.7844 4.78151 1.78461 4.77735 1.78461V-0.215393ZM3.69355 0.89047L3.7825 1.76361L5.7722 1.56092L5.68326 0.687778L3.69355 0.89047ZM1.82155 4.85004C2.28954 5.77545 3.41909 6.14624 4.34448 5.67829L3.44195 3.89351C3.50222 3.86303 3.57582 3.88718 3.60631 3.94747L1.82155 4.85004ZM4.3445 5.67828C5.26991 5.21029 5.6407 4.08074 5.17274 3.15535L3.38796 4.05788C3.35748 3.99761 3.38163 3.92401 3.44193 3.89352L4.3445 5.67828ZM8.14702 10.6835C8.14702 9.64655 7.30635 8.80587 6.26936 8.80587V10.8059C6.20178 10.8059 6.14702 10.7511 6.14702 10.6835H8.14702ZM6.26936 8.80587C5.23236 8.80587 4.39171 9.64657 4.39171 10.6835H6.39171C6.39171 10.7511 6.33696 10.8059 6.26936 10.8059V8.80587ZM13.9981 10.6835C13.9981 9.64655 13.1574 8.80587 12.1204 8.80587V10.8059C12.0528 10.8059 11.9981 10.7511 11.9981 10.6835H13.9981ZM12.1204 8.80587C11.0834 8.80587 10.2428 9.64655 10.2428 10.6835H12.2428C12.2428 10.7511 12.188 10.8059 12.1204 10.8059V8.80587ZM16.5683 4.84998C17.0878 3.82243 17.0682 2.60488 16.5157 1.59465L14.7609 2.55432C14.9974 2.98665 15.0058 3.50776 14.7835 3.94753L16.5683 4.84998ZM13.2209 3.39653C13.18 3.32183 13.1785 3.23162 13.2171 3.1553L15.0018 4.05793C15.2606 3.54615 15.2506 2.93998 14.9757 2.43716L13.2209 3.39653ZM16.5156 1.59454C15.963 0.584335 14.9484 -0.0890118 13.8027 -0.205727L13.6 1.78397C14.0903 1.83392 14.5245 2.12204 14.761 2.55443L16.5156 1.59454ZM12.7065 0.68779L12.5286 2.43407L14.5184 2.63674L14.6962 0.890458L12.7065 0.68779ZM13.4221 3.53026C13.3371 3.52159 13.262 3.47163 13.2211 3.39692L14.9755 2.43677C14.7004 1.93399 14.1953 1.59868 13.6249 1.54056L13.4221 3.53026ZM13.6124 -0.215393H4.77735V1.78461H13.6124V-0.215393ZM3.77735 0.784607V2.53992H5.77735V0.784607H3.77735ZM4.77735 3.53992H13.6124V1.53992H4.77735V3.53992ZM14.6124 2.53992V0.784607H12.6124V2.53992H14.6124ZM4.58705 -0.205726C3.44146 -0.0890118 2.42681 0.584318 1.87419 1.59459L3.62884 2.55438C3.86532 2.12206 4.29951 1.83392 4.78976 1.78397L4.58705 -0.205726ZM5.16883 3.39674C5.12784 3.47168 5.0526 3.5216 4.96765 3.53026L4.76496 1.54056C4.19456 1.59866 3.68933 1.93393 3.41418 2.43696L5.16883 3.39674ZM5.86115 2.43406L5.68326 0.687777L3.69355 0.890471L3.87145 2.63675L5.86115 2.43406ZM1.8742 1.59458C1.32158 2.60484 1.30189 3.82245 1.82155 4.85004L3.60631 3.94748C3.38394 3.50774 3.39237 2.98669 3.62884 2.55439L1.8742 1.59458ZM5.17274 3.15534C5.21126 3.23153 5.20982 3.32182 5.16883 3.39676L3.41419 2.43694C3.13901 2.93999 3.12923 3.54625 3.38797 4.05789L5.17274 3.15534ZM4.39171 10.6835V11.2686H6.39171V10.6835H4.39171ZM8.14702 11.2686V10.6835H6.14702V11.2686H8.14702ZM4.39171 11.2686C4.39171 13.9213 6.54219 16.0718 9.19489 16.0718V14.0718C7.64677 14.0718 6.39171 12.8168 6.39171 11.2686H4.39171ZM9.19489 12.3165C8.61616 12.3165 8.14702 11.8474 8.14702 11.2686H6.14702C6.14702 12.9519 7.51159 14.3165 9.19489 14.3165V12.3165ZM9.19489 16.0718C11.8476 16.0718 13.9981 13.9213 13.9981 11.2686H11.9981C11.9981 12.8168 10.743 14.0718 9.19489 14.0718V16.0718ZM10.2428 11.2686C10.2428 11.8474 9.77361 12.3165 9.19489 12.3165V14.3165C10.8782 14.3165 12.2428 12.9519 12.2428 11.2686H10.2428ZM13.9981 11.2686V10.6835H11.9981V11.2686H13.9981ZM10.2428 10.6835V11.2686H12.2428V10.6835H10.2428Z"
                                fill="#4F4F4F" mask="url(#path-2-inside-1_149_464)" />
                        </svg>
                        <span @click="addToCartCallback">{{ productExists ? 'បានដាក់ចូលកន្ត្រក' : 'ដាក់ចូលកន្ដ្រក'
                            }}</span>
                    </button>
                </div>

                <div class="pt-2">
                    <p class="text-xs font-weight-regular flex items-center gap-2">
                        <svg width="20" height="12" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.77461 8.19374H11.6152C11.7545 8.19374 11.888 8.13843 11.9865 8.03997C12.0849 7.94151 12.1402 7.80798 12.1402 7.66874L13.9684 0.974988C13.9684 0.905515 13.9546 0.836732 13.9278 0.772625C13.901 0.708519 13.8618 0.650363 13.8124 0.60153C13.763 0.552696 13.7044 0.514156 13.6399 0.488143C13.5755 0.46213 13.5066 0.449161 13.4371 0.449988H5.50273C5.36321 0.449986 5.22935 0.505198 5.13039 0.603566C5.03144 0.701933 4.97543 0.835463 4.97461 0.974988L3.41211 7.66874C3.41211 7.80798 3.46742 7.94151 3.56588 8.03997C3.66433 8.13843 3.79787 8.19374 3.93711 8.19374H4.61836"
                                stroke="#454545" stroke-width="0.5" />
                            <path
                                d="M13.0189 8.19378H11.9346L13.4971 2.79065H16.0658C16.1045 2.79056 16.1427 2.79891 16.1777 2.8151C16.2128 2.83129 16.2439 2.85494 16.2689 2.8844L17.3877 4.85315C17.4278 4.89904 17.45 4.95784 17.4502 5.01878L16.4096 8.19378H15.2846"
                                stroke="#454545" stroke-width="0.5" />
                            <path
                                d="M5.72187 9.70938C6.36218 9.70938 6.88125 9.18331 6.88125 8.53438C6.88125 7.88544 6.36218 7.35938 5.72187 7.35938C5.08157 7.35938 4.5625 7.88544 4.5625 8.53438C4.5625 9.18331 5.08157 9.70938 5.72187 9.70938Z"
                                stroke="#454545" stroke-width="0.5" />
                            <path
                                d="M14.1721 9.70938C14.8124 9.70938 15.3314 9.18331 15.3314 8.53438C15.3314 7.88544 14.8124 7.35938 14.1721 7.35938C13.5318 7.35938 13.0127 7.88544 13.0127 8.53438C13.0127 9.18331 13.5318 9.70938 14.1721 9.70938Z"
                                stroke="#454545" stroke-width="0.5" />
                            <path d="M7.26523 1.98749H2.14648" stroke="#454545" stroke-width="0.5"
                                stroke-linecap="round" />
                            <path d="M6.25625 3.625H2.64062" stroke="#454545" stroke-width="0.5"
                                stroke-linecap="round" />
                            <path d="M6.62168 5.46875H1.00293" stroke="#454545" stroke-width="0.5"
                                stroke-linecap="round" />
                        </svg>
                        ដឹកជញ្ជូនដោយឥតគិតថ្លៃចំពោះការកម៉្មង់លើសពី $500
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row class="p-3 flex justify-center text-primary-700">
            <v-col cols="12">
                <ul class="nav nav-underline justify-content-center border-bottom" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link px-6 active" id="description-tab" data-bs-toggle="tab"
                            data-bs-target="#description-tab-pane" type="button" role="tab"
                            aria-controls="description-tab-pane" aria-selected="true">ពិពណ៌នាទំនិញ</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link px-6" id="warranty-tab" data-bs-toggle="tab"
                            data-bs-target="#warranty-tab-pane" type="button" role="tab"
                            aria-controls="warranty-tab-pane" aria-selected="false">លក្ខខណ្ឌនៃការធានា</button>
                    </li>
                </ul>
                <div class="tab-content font-light py-3 font-weight-regular leading-7" id="myTabContent">
                    <div class="tab-pane fade show active" id="description-tab-pane" role="tabpanel"
                        aria-labelledby="description-tab" tabindex="0">
                        <div class="flex justify-center">
                            <p class="text-center col-12 col-md-8 col-lg-6">
                                ត្រូវបានផលិតចេញពីសម្ភារៈដែលមានគុណភាពខ្ពស់
                                គ្រឿងសង្ហារឹមនីមួយៗត្រូវបានបង្កើតឡើងដើម្បីលម្អបន្ថែមសម្លេងស្ទីលដល់ផ្ទះរបស់អ្នក
                                ហើយរឹងមាំបន្សល់ទុកអាយុកាលជាយូរអង្វែង។ ជាមួយនឹងរចនាបែបសាមញ្ញ
                                និងមុខងារដែលអាចប្រើប្រាស់បានច្រើន
                                គ្រឿងសង្ហារឹមរបស់យើងសាកសមសម្រាប់ការតុបតែងទាន់សម័យ បែបបុរាណ ឬបែបចម្រុះ។
                            </p>
                        </div>
                        <div class="flex justify-center pt-2">
                            <div>
                                <span class="font-semibold">លក្ខណៈពិសេស ៖</span>
                                <ul class="list-disc pl-5">
                                    <li>ផលិតឡើងដោយសម្ភារៈដែលមានគុណភាពខ្ពស់</li>
                                    <li>រចនាបែបទាន់សម័យ និងសមរម្យសម្រាប់ការតុបតែងគ្រប់បែបយ៉ាង</li>
                                    <li>មានមុខងារដែលអាចប្រើប្រាស់បានយ៉ាងអាចជឿជាក់សម្រាប់ជីវិតប្រចាំថ្ងៃ</li>
                                    <li>រក្សា និងប្រើប្រាស់បានយូរអង្វែង ។</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="warranty-tab-pane" role="tabpanel" aria-labelledby="warranty-tab"
                        tabindex="0">
                        <div class="flex justify-center">
                            <p class="col-12 col-md-8 col-lg-6 text-center">
                                ការធានារបស់យើងមានគោលបំណងដើម្បីធានាបាននូវគុណភាព និងភាពជឿជាក់លើគ្រឿងសង្ហារឹមដែលអ្នកបានទិញ។
                                សូមអានលក្ខខណ្ឌខាងក្រោម ដើម្បីដឹងច្បាស់ពីការធានា និងការការពារដែលបានផ្តល់ជូន៖
                            </p>
                        </div>
                        <div class="flex justify-center pt-2">
                            <div>
                                <span class="font-semibold">លក្ខខណ្ឌដែលរួមបញ្ចូលក្នុងការធានា ៖</span>
                                <ul class="list-disc pl-5">
                                    <li>កំហូចដើមដែលកើតឡើងដោយក្រុមហ៊ុនផលិត (រាងសម្ព័ន្ធ បច្ចេកទេស ឬសម្ភារៈ)</li>
                                    <li>ការខូចខាតដែលមិនមែនបណ្ដាលមកពីការប្រើប្រាស់មិនត្រឹមត្រូវ</li>
                                    <li>សេវាការជួសជុល ឬការផ្លាស់ប្តូរនៅក្នុងរយៈពេលការធានា</li>
                                    <li>ការធានាមានសុពលភាព ១ឆ្នាំ ចាប់ពីថ្ងៃទិញ ។</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <ThePaymentForm ref="paymentModalRef" />
    </v-container>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { onMounted } from 'vue';
    import TheWishListHeart from "@/components/wishlist-heart/TheWishListHeart.vue";
    import { initFlowbite } from 'flowbite';
    import { useRoute } from 'vue-router';
    import { useCartStore } from '@/stores/cart';

    import ThePaymentForm from '@/components/modals/ThePaymentForm.vue';

    const route = useRoute();
    const cart = useCartStore();

    const paymentModalRef = ref(null);

    const openPaymentModal = () => {
        paymentModalRef.value.openModal();
    };

    onMounted(() => {
        initFlowbite();
    });

    const productExists = computed(() => {
        return cart.cart.some(item => item.title === route.query.name && item.price === route.query.price);
    });

    const productDetails = computed(() => {
        return {
            title: route.query.name,
            url: route.query.image,
            price: route.query.price,
            description: route.query.description,
        };
    });

    const items = computed(() => {
        return [
            {
                title: capitalize(route.params.category),
            },
            {
                title: route.query.category,
            }
        ];
    });

    const addToCartCallback = () => {
        if (productExists.value) return;

        cart.add({
            ...productDetails.value,
            quantity: 1,
        });
    };

    const capitalize = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    const show = ref(false);

    const toggleModal = () => show.value = !show.value;

    // handle color selection
    const colors = ['#AC9C8C', '#97AC8C', '#8C99AC', '#887E7E'];
    const activeColor = ref(colors[0]);
    function setActive(color) {
        activeColor.value = color;
    }
</script>

<style scoped>

    .nav-underline .nav-link.active,
    .nav-underline .show>.nav-link {
        color: #454545;
        font-weight: 600;
    }

    .nav-link:focus,
    .nav-link:hover {
        color: #5f5f5f;
        border-bottom-color: #797979 !important;
    }

    #btn-add-to-cart:hover svg path:first-of-type {
        stroke: #F8FAFC;
    }

    #btn-add-to-cart:hover svg mask {
        fill: #454545 !important;
    }

    #btn-add-to-cart:hover svg mask path,
    #btn-add-to-cart:hover svg path:nth-of-type(3) {
        stroke: none;
        fill: #F8FAFC;

    }
</style>
